import React, { useState } from "react";
import * as _ from "./style";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { Eye } from "../../assets/logo/index";
import {
  PasswordInput,
  PasswordInputWrap,
  PWHideAndShow,
} from "../signup/style";
// import Eye from "../../assets/logo/eye.svg";
// import IoEyeOutline from "react-icons/io";

interface ILogin {
  email: string;
  password: string;
}

function LogIn() {
  const [hidePassword, setHidePassword] = useState(true);

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  const onValid = async (data: ILogin) => {
    await axios
      .post("http://52.55.240.35:8080/users/auth", data, {
        withCredentials: true, // CORS 처리 옵션
      })
      .then((res: AxiosResponse) => {
        localStorage.setItem("token", res.data.access_token);
        alert("로그인 성공!");
        navigate(-1);
      })
      .catch((err) => {
        alert("로그인 실패... " + err.message);
      });
  };
  const onInValid = () => {
    console.log("실패", errors);
  };
  return (
    <>
      <_.LogInContainer>
        <_.LogInHeader>
          <_.LogInHeaderIn>
            <_.LogInHeaderText onClick={() => navigate(-1)}>
              <IoIosArrowBack size="22px" />
              <Link to="/">돌아가기</Link>
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
          <PasswordInputWrap>
            <PasswordInput
              placeholder="비밀번호"
              type={hidePassword ? "password" : "text"}
              {...register("password", {
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
          <_.LoginSubmitButton>로그인</_.LoginSubmitButton>
          <_.LoginAlertTextWrap>
            <_.LoginAlertText>
              <strong>
                <Link to="/">비밀번호 변경</Link>
              </strong>
            </_.LoginAlertText>{" "}
            <_.LoginAlertText>
              <strong>
                <Link to="/signup">회원가입</Link>
              </strong>
            </_.LoginAlertText>
          </_.LoginAlertTextWrap>
        </_.LogInWrap>
      </_.LogInContainer>
    </>
  );
}

export default LogIn;
