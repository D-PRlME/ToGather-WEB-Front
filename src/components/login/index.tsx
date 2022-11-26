import * as _ from "./style";
import { IoIosArrowBack } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import React from "react";

interface ILogin {
  email: string;
  password: string;
}

function LogIn() {
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  const onValid = async (data: ILogin) => {
    const res = await axios.post("http://52.55.240.35:8080/users/auth", data, {
      withCredentials: true, // CORS 처리 옵션
    });
    console.log(res);
  };
  const onInValid = () => {
    console.log("실패", errors);
  };
  return (
    <>
      <_.LogInContainer>
        <_.LogInHeader>
          <_.LogInHeaderIn>
            <_.LogInHeaderText>
              <IoIosArrowBack size="22px" />
              돌아가기
            </_.LogInHeaderText>
          </_.LogInHeaderIn>
        </_.LogInHeader>
        <_.LogInWrap onSubmit={handleSubmit(onValid, onInValid)}>
          <_.LogInText>
            마음 맞는 팀원을 찾는
            <br /> 간단한 방법.
            <p>ToGather</p>
          </_.LogInText>
          <_.LoginInput
            type="email"
            {...register("email", {
              required: "dsm.hs.kr 도메인을 사용하는 이메일을 사용하세요",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                message: "이메일 형식이 아니에요!",
              },
              minLength: { value: 10, message: "메일이 너무 짧아요!" },
              maxLength: { value: 40, message: "메일이 너무 길어요!" },
            })}
            placeholder="이메일"
          />
          <_.LoginInput
            type="password"
            {...register("password", {
              required:
                "8자리 이상, 숫자, 영어 소문자, 특수문자를 포함해야 합니다",
              minLength: { value: 8, message: "비밀번호가 너무 짧아요!" },
              maxLength: { value: 20, message: "비밀번호가 너무 길어요!" },
            })}
            placeholder="비밀번호"
          ></_.LoginInput>
          <_.LoginSubmitButton>로그인</_.LoginSubmitButton>
          <_.LoginAlertText>
            <strong>비밀번호 변경</strong>
          </_.LoginAlertText>
        </_.LogInWrap>
      </_.LogInContainer>
    </>
  );
}

export default LogIn;
