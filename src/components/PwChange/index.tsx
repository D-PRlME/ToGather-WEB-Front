import * as s from "../signup/style";
import { IoIosArrowBack } from "react-icons/io";
import { LogInHeader, LogInHeaderIn, LogInHeaderText } from "../login/style";
import { Link } from "react-router-dom";

export default function PwChangeComponent() {
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
        <s.SignupWrap>
          <s.Title style={{ paddingBottom: 0, fontSize: 32 }}>
            비밀번호 변경
          </s.Title>
          <s.ExplainText style={{ fontWeight: 700 }}>
            인증번호를 수신하기 위한 이메일 주소가 필요합니다
          </s.ExplainText>
        </s.SignupWrap>
      </s.SignupContainer>
    </>
  );
}
