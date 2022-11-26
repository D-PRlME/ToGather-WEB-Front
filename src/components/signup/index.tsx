import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { LogInHeader, LogInHeaderIn, LogInHeaderText } from "../login/style";
import {
  ExplainText,
  NextBtn,
  SignupContainer,
  SignupInput,
  SignupWrap,
  Title,
} from "./style";

interface ISignUp {
  email: string;
  name: string;
  password: string;
}

function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<ISignUp>();

  const onValid = async (data: ISignUp) => {
    const res = await axios.post("http://52.55.240.35:8080/users", data, {
      withCredentials: true, // CORS 처리 옵션
    });
    console.log(res);
    // console.log("aaa");

    navigate("/auth");
  };
  const onInValid = () => {
    console.log("실패");
  };

  return (
    <>
      <SignupContainer>
        <LogInHeader>
          <LogInHeaderIn>
            <LogInHeaderText>
              <IoIosArrowBack size="22px" />
              돌아가기
            </LogInHeaderText>
          </LogInHeaderIn>
        </LogInHeader>
        <SignupWrap onSubmit={handleSubmit(onValid, onInValid)}>
          <Title>
            <p>ToGather</p> 시작하기
          </Title>
          <SignupInput
            aria-invalid={
              !isDirty ? undefined : errors.email ? "true" : "false"
            }
            {...register("email", {
              required: "dsm.hs.kr 도메인을 사용하는 이메일을 사용하세요",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
              minLength: {
                value: 10,
                message: "dsm.hs.kr 도메인을 사용하는 이메일을 사용하세요",
              },
              maxLength: { value: 40, message: "메일이 너무 길어요!" },
            })}
            placeholder="이메일"
          />
          <ExplainText>
            {errors.email && <small role="alert">{errors.email.message}</small>}
          </ExplainText>
          <SignupInput
            aria-invalid={
              !isDirty ? undefined : errors.password ? "true" : "false"
            }
            {...register("password", {
              required:
                "8자리 이상, 숫자, 영어 소문자, 특수문자를 포함해야 합니다",
              minLength: {
                value: 8,
                message: "8자리 이상 비밀번호를 사용하세요.",
              },
              maxLength: {
                value: 20,
                message: "20자리 이하 비밀번호를 사용하세요.",
              },
            })}
            type="password"
          />
          <ExplainText>
            {errors.password && (
              <small role="alert">{errors.password.message}</small>
            )}
          </ExplainText>
          <SignupInput
            type="name"
            {...register("name", {
              required: "이름은 필수 항목입니다",
              minLength: { value: 1, message: "이름이 너무 짧아요!" },
              maxLength: { value: 10, message: "이름이 너무 길어요!" },
            })}
            placeholder="이름"
          />
          <NextBtn>다음</NextBtn>
        </SignupWrap>
      </SignupContainer>
    </>
  );
}

export default SignUp;
