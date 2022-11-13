import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { LogInHeader, LogInHeaderIn, LogInHeaderText } from "../../login/style";
import {
  CompeleteBtn,
  CompeleteContainer,
  CompeleteIconWrap,
  CompeleteWrap,
  Title,
} from "./style";
import CompeleteIcon from "../../../assets/logo/compelete.svg";

const SignupCompelete = () => {
  return (
    <>
      <CompeleteContainer>
        <LogInHeader>
          <LogInHeaderIn>
            <LogInHeaderText>
              <IoIosArrowBack size="22px" />
              돌아가기
            </LogInHeaderText>
          </LogInHeaderIn>
        </LogInHeader>
        <CompeleteWrap>
          <Title>
            가입이 <p>완료되었어요</p>
          </Title>
          <CompeleteIconWrap src={CompeleteIcon} />
          <CompeleteBtn>완료</CompeleteBtn>
        </CompeleteWrap>
      </CompeleteContainer>
    </>
  );
};

export default SignupCompelete;
