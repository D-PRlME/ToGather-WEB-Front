import * as s from "../signup/style";
import { IoIosArrowBack } from "react-icons/io";
import { LogInHeader, LogInHeaderIn, LogInHeaderText } from "../login/style";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { customAxios } from "../../lib/axios";
import { MailImg } from "../signup/email";
import axios from "axios";

export default function AfterPostComponent() {
  const {register, handleSubmit,watch} = useForm<{code:string}>()
  const navigate = useNavigate();
  const location = useLocation();
  const [isAllEnter, setIsAllEnter] = useState(false);
  const onChange = () => {
    if(watch().code) setIsAllEnter(true);
    else setIsAllEnter(false);
  }
  const onValid = (form: {code:string}) => {
    axios(process.env.REACT_APP_BaseUrl + "/users/mail/verify", {
      method: "post",
      data:{
        email: location.state.email,
        auth_code: form.code
      }
    }).then(() => {
      navigate("/pwchange/change")
    })
  }
  return (
    <>
      <s.SignupContainer>
        <LogInHeader>
          <LogInHeaderIn>
            <LogInHeaderText>
              <IoIosArrowBack size="22px" />
              <Link to="/pwchange">돌아가기</Link>
            </LogInHeaderText>
          </LogInHeaderIn>
        </LogInHeader>
        <s.SignupWrap onSubmit={handleSubmit(onValid)} onChange={onChange}>
          <s.Title style={{ paddingLeft: 30, fontSize: 32, paddingBottom:0 }}>
            비밀번호 변경
          </s.Title>
          <s.ExplainText style={{ fontWeight: 700 }}>
            전송된 6자리 인증 번호를 입력해 주세요. 인증 번호는 5분 후에 만료됩니다
          </s.ExplainText>
          <s.SignupInput {...register("code")} placeholder="인증번호"/>
          <div style={{ alignSelf:"center", "marginTop":"30px"}}>
            <MailImg/>
          </div>
          <s.NextBtn isAllEnter={isAllEnter}>다음</s.NextBtn>
        </s.SignupWrap>
      </s.SignupContainer>
    </>
  );
}
