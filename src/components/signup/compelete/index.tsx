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
import { Link } from "react-router-dom";

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
          <Link to="/">
            <CompeleteBtn>완료</CompeleteBtn>
            </Link>
        </CompeleteWrap>
      </CompeleteContainer>
    </>
  );
};

export default SignupCompelete;
