import * as _ from "./style";
import { IoIosArrowBack } from "react-icons/io";
import useLogin from "../../hooks/auth/useLogin";

const LogIn = () => {
  const { loginData, onChangeLoginData, onSubmitLogin } = useLogin();

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
        <_.LogInWrap>
          <_.LogInText>
            마음 맞는 팀원을 찾는
            <br /> 간단한 방법.
            <p>ToGather</p>
          </_.LogInText>
          <_.LoginInput
            value={loginData.email}
            name="email"
            onChange={onChangeLoginData}
            placeholder="이메일"
          />
          <_.LoginInput
            value={loginData.password}
            name="password"
            type="password"
            onChange={onChangeLoginData}
            placeholder="비밀번호"
          ></_.LoginInput>
          <_.LoginSubmitButton onClick={onSubmitLogin}>
            로그인
          </_.LoginSubmitButton>
          <_.LoginAlertText>
            <strong>비밀번호 변경</strong>
          </_.LoginAlertText>
        </_.LogInWrap>
      </_.LogInContainer>
    </>
  );
};

export default LogIn;
