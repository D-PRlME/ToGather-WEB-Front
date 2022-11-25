import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { Eye } from "../../assets/logo/index";
import API from "../../utils/api";
import { LogInHeader, LogInHeaderIn, LogInHeaderText } from "../login/style";
import {
  ExplainText,
  NextBtn,
  PasswordInput,
  // PasswordHide,
  // PasswordHide,
  PasswordInputWrap,
  PWHideAndShow,
  SignupContainer,
  SignupInput,
  SignupWrap,
  Title,
} from "./style";
// import { AiOutlineEye } from "react-icons/ai";
// import Eye from "../../assets/logo/eye.svg";
interface IAuthForm {
  name: string;
  email: string;
  pw: string;
  pwConfirm: string;
}

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    // setError,
  } = useForm<IAuthForm>({ mode: "onChange" });

  const onValid = (data: IAuthForm) => {
    console.log(data);
    const userData = {
      name: data.name,
      email: data.email,
      pw: data.pw,
    };

    API.post("/users", userData)
      .then((response) => {
        if (response.status === 200) {
          const authEmail = { email: userData.email };
          console.log(authEmail);
        }
      })
      .catch((error) => console.log(error.response));
  };

  const onInValid = () => {
    console.log("실패");
  };
  const [hidePassword, setHidePassword] = useState(true);

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <>
      <SignupContainer>
        <LogInHeader>
          <LogInHeaderIn>
            <LogInHeaderText>
              <IoIosArrowBack size="22px" />
              <Link to="/">돌아가기</Link>
            </LogInHeaderText>
          </LogInHeaderIn>
        </LogInHeader>
        <SignupWrap onSubmit={handleSubmit(onValid, onInValid)}>
          <Title>
            <p>ToGather</p> 시작하기
          </Title>
          <SignupInput
            // placeholder="이메일"
            type="email"
            {...register("email", {
              required: "dsm.hs.kr 도메인을 사용하는 이메일을 사용하세요*",
              pattern: {
                value:
                  // /^[a-zA-Z0-9+-\_.]+@[d-sD-s0-9-]+\.[h-sH-S0-9-.]+\.[k-rK-R0-9-.]+$/,
                  // /(\W|^)dsm\hs\kr(\W|$)/,
                  /^[a-zA-Z0-9+-\_.]+@dsm.hs.kr$/,
                message: "dsm.hs.kr 도메인을 사용하는 이메일을 사용하세요",
              },
            })}
            placeholder="이메일"
          />
          <ExplainText>
            {/* {errors.name?.type === "required" &&
              "dsm.hs.kr 도메인을 사용하는 이메일을 사용하세요."} */}
            {/* {errors.firstName?.type === "maxLength" && errors.firstName.message} */}
            {/* dsm.hs.kr 도메인을 사용하는 이메일을 사용하세요. */}
            {errors?.email?.message}
          </ExplainText>
          <PasswordInputWrap>
            <PasswordInput
              placeholder="비밀번호"
              type={hidePassword ? "password" : "text"}
              {...register("pw", {
                required:
                  "8자리 이상, 숫자, 영어 소문자, 특수문자를 포함해야 합니다**",
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/,
                  message:
                    "8자리 이상, 숫자, 영어 소문자, 특수문자를 포함해야 합니다 ",
                },
              })}
            ></PasswordInput>
            <PWHideAndShow src={Eye} alt="" onClick={toggleHidePassword} />
          </PasswordInputWrap>
          <ExplainText>
            {/* 8자리 이상, 숫자, 영어 소문자, 특수문자를 포함해야 합니다 */}
            {errors?.pw?.message}
          </ExplainText>
          <SignupInput
            {...register("name", {
              required: "이름을 입력해주세요",
              minLength: {
                value: 2,
                message: "2글자 이상 입력해주세요",
              },
              pattern: {
                value: /^[A-za-z0-9가-힣]{2,8}$/,
                message: "8자 이내로 입력",
              },
            })}
            placeholder="이름"
            type="name"
          />
          <NextBtn>다음</NextBtn>
        </SignupWrap>
      </SignupContainer>
    </>
  );
};

export default SignUp;
