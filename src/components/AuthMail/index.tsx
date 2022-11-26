import React from "react";
import * as _ from "./style";
import * as L from "../login/style";
import { IoIosArrowBack } from "react-icons/io";
import AuthIcon from "../../assets/logo/auth.svg";

const AuthMail = () => {
  return (
    <>
      <L.LogInContainer>
        <L.LogInHeader>
          <L.LogInHeaderIn>
            <L.LogInHeaderText>
              <IoIosArrowBack size="22px" />
              돌아가기
            </L.LogInHeaderText>
          </L.LogInHeaderIn>
        </L.LogInHeader>
        <_.AuthContainer>
          <_.AuthText>
            이메일 인증
            <p>
              yeemail666@dsm.hs.kr로 전송된 6자리 인증 번호를 입력해 주세요.
              인증 번호는 5분 후에 만료됩니다
            </p>
          </_.AuthText>
          <_.AuthInput placeholder="인증번호" />
          <_.AuthIcon src={AuthIcon} />
          <_.AuthNextBtn>다음</_.AuthNextBtn>
        </_.AuthContainer>
      </L.LogInContainer>
    </>
  );
};

export default AuthMail;
