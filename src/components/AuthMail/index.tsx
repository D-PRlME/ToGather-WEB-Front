import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import {
  LogInContainer,
  LogInHeader,
  LogInHeaderIn,
  LogInHeaderText,
} from "../login/style";
// import * as _ from "";

const AuthMail = () => {
  return (
    <LogInContainer>
      <LogInHeader>
        <LogInHeaderIn>
          <LogInHeaderText>
            <IoIosArrowBack size="22px" />
            돌아가기
          </LogInHeaderText>
        </LogInHeaderIn>
      </LogInHeader>
    </LogInContainer>
  );
};

export default AuthMail;
