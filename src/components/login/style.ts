import styled from "styled-components";
import { palette } from "../../styles/palette";

export const LogInContainer = styled.div`
  width: 1000px;
  height: 900px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const LogInWrap = styled.form`
  margin: 100px 250px;
  // background-color: blue;
  width: 480px;
  height: 475px;
  border-radius: 16px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
  // flex-direction: column;
`;

export const LogInHeader = styled.div`
  width: 100%;
  height: 40px;
  // background-color: green;
  flex-direction: column;
`;

export const LogInHeaderIn = styled.div`
  padding: 10px 20px;
  width: 300px;
  height: 40px;
  // background-color: red;
`;

export const LogInHeaderText = styled.div`
  font-size: 25px;
  color: ${palette.gray[400]};
`;

export const LogInText = styled.div`
  display: block;
  padding: 24px;
  font-weight: 700;
  font-size: 40px;
  p {
    margin: 0;
    color: #e1ad01;
  }
`;

export const LoginInput = styled.input`
  background-color: ${palette.gray[200]};
  width: 430px;
  height: 53px;
  padding: 20px 14px;
  font-size: 20px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 16px;

  box-sizing: border-box;
  border: 1px solid #dbdde5;
  border-radius: 6px;

  &:focus {
    border: 1px solid ${palette.main};
  }
`;

export const LoginSubmitButton = styled.button`
  width: 430px;
  height: 53px;
  margin: 25px 25px 0 25px;
  border-radius: 10px;
  border: 1px solid ${palette.main};
  color: #333;
  font-size: 24px;
  cursor: pointer;
  background-color: ${palette.main};
  font-weight: bold;
`;

export const LoginAlertTextWrap = styled.div`
  color: #787878;
  display: flex;
`;

export const LoginAlertText = styled.p`
  font-size: 16px;
  margin: 0 auto;
  color: #2b2b2b;
  margin-top: 24px;
  text-align: center;

  strong {
    color: ${palette.gray[400]};
    cursor: pointer;
  }
`;

export const HideAndShowEye = styled.img``;
