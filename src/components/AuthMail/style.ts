import styled from "styled-components";
import { palette } from "../../styles/palette";

export const AuthContainer = styled.form`
  margin: 100px 250px;
  // background-color: blue;
  width: 480px;
  height: 475px;
  border-radius: 16px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
  // flex-direction: column;
`;

export const AuthText = styled.p`
  margin: 0;
  display: block;
  padding: 24px;
  font-weight: 700;
  font-size: 40px;
  p {
    margin: 0;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const AuthInput = styled.input`
  background-color: #f7f7f7;
  width: 430px;
  height: 53px;
  padding: 20px 14px;
  font-size: 20px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  /* color: red; */
  /* margin-bottom: 16px; */

  box-sizing: border-box;
  border: 1px solid #dbdde5;
  border-radius: 6px;

  &:focus {
    border: 1px solid ${palette.red};
  }
`;

export const AuthNextBtn = styled.button`
  width: 430px;
  height: 53px;
  margin-left: 25px;
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid ${palette.gray[200]};
  color: #333;
  font-size: 24px;
  cursor: pointer;
  background-color: #f7f7f7;
  font-weight: bold;
`;

export const AuthIcon = styled.img`
  margin-top: 30px;
  margin-left: 150px;
`;
