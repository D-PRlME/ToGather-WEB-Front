import * as s from "../signup/style";
import { IoIosArrowBack } from "react-icons/io";
import { LogInHeader, LogInHeaderIn, LogInHeaderText } from "../login/style";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { customAxios } from "../../lib/axios";
import axios from "axios";

export default function PwChangeHome() {
  const {register, handleSubmit,watch} = useForm<{email:string}>()
  const navigate = useNavigate();
  const [isAllEnter, setIsAllEnter] = useState(false);
  const onChange = () => {
    if(watch().email) setIsAllEnter(true);
    else setIsAllEnter(false);
  }
  const onValid = (form: {email:string}) => {
    customAxios("users/mail", {
      method: "post",
      data:{
        email:form.email
      }
    }).then(() => {
      navigate("/pwchange/ok", {state: {email: form.email}})
    })
  }
  return (
    <>
      <s.SignupContainer>
        <LogInHeader>
          <LogInHeaderIn>
            <LogInHeaderText>
              <IoIosArrowBack size="22px" />
              <Link to="/">돌아가기</Link>
            </LogInHeaderText>
          </LogInHeaderIn>
        </LogInHeader>
        <s.SignupWrap onSubmit={handleSubmit(onValid)} onChange={onChange}>
          <s.Title style={{ paddingLeft: 30, fontSize: 32, paddingBottom:0 }}>
            비밀번호 변경
          </s.Title>
          <s.ExplainText style={{ fontWeight: 700 }}>
            인증번호를 수신하기 위한 이메일 주소가 필요합니다
          </s.ExplainText>
          <s.SignupInput {...register("email", {required: true})} placeholder="이메일"/>
          <s.NextBtn isAllEnter={isAllEnter}>다음</s.NextBtn>
        </s.SignupWrap>
      </s.SignupContainer>
    </>
  );
}
