import * as s from "../../signup/style";
import { IoIosArrowBack } from "react-icons/io";
import { LogInHeader, LogInHeaderIn, LogInHeaderText } from "../../login/style";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { customAxios } from "../../../lib/axios";
import axios from "axios";

export default function PwChangeComponent() {
  const {register, handleSubmit,watch, formState:{errors}} = useForm<{oldPw:string, newPw:string}>()
  const navigate = useNavigate();
  const [isAllEnter, setIsAllEnter] = useState(false);
  const onChange = () => {
    if(watch().oldPw && watch().newPw) setIsAllEnter(true);
    else setIsAllEnter(false);
  }
  const onValid = (form: {oldPw:string, newPw:string}) => {
    axios(process.env.REACT_APP_BaseUrl + "/users/password", {
      method: "patch",
      data:{
        "old_password":form.oldPw,
        "new_password": form.newPw
      }
    }).then(() => {
        alert("비밀번호 변경 성공!")
      navigate("/")
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
          <s.Title style={{ paddingLeft: 30, fontSize: 32 }}>
            비밀번호 변경
          </s.Title>
          <s.SignupInput 
            {...register("oldPw", 
            {
                required: {
                    value: true,
                    message: "반드시 입력해야 합니다."
                },
                pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/,
                    message:
                      "8자리 이상, 숫자, 영어 소문자, 특수문자를 포함해야 합니다 ",
                  },
            })} 
            placeholder="기본 비밀번호"
            type="password"
            />
            <span style={{"paddingLeft":30}}>{errors.oldPw?.message}</span>
          <br/>
          <s.SignupInput 
            {...register("newPw", 
            {
                required: {
                    value: true,
                    message: "반드시 입력해야 합니다."
                },
                pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/,
                    message:
                      "8자리 이상, 숫자, 영어 소문자, 특수문자를 포함해야 합니다 ",
                  },
            })} 
            placeholder="새 비밀번호"
            type="password"
            />
            <span style={{"paddingLeft":30}}>{errors.newPw?.message}</span>
          <s.NextBtn isAllEnter={isAllEnter}>다음</s.NextBtn>
        </s.SignupWrap>
      </s.SignupContainer>
    </>
  );
}
