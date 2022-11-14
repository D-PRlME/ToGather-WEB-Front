import styled from "styled-components";
import { palette } from "../../styles/palette";

export const SignupContainer = styled.div`
  width: 1000px;
  height: 900px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const SignupWrap = styled.form`
  margin: 100px 250px;
  width: 480px;
  height: 475px;
  border-radius: 16px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.div`
  padding: 16px;
  font-size: 40px;
  font-weight: 700;
  p {
    margin: 0;
    color: ${palette.main};
  }
`;

export const SignupInput = styled.input`
  width: 430px;
  height: 53px;
  padding: 20px 14px;
  font-size: 20px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  /* margin-bottom: 16px; */

  box-sizing: border-box;
  border: 1px solid #dbdde5;
  border-radius: 6px;

  &:focus {
    border: 1px solid ${palette.main};
  }
`;

export const ExplainText = styled.p`
  /* margin: ; */
  margin: 0 0 10px 30px;
`;

export const NextBtn = styled.button`
  width: 430px;
  height: 53px;
  margin-left: 25px;
  margin-top: 60px;
  border-radius: 10px;
  border: 1px solid ${palette.gray[200]};
  color: #333;
  font-size: 24px;
  cursor: pointer;
  background-color: ${palette.gray};
  font-weight: bold;
`;
