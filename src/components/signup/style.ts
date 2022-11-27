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
  background-color: ${palette.gray[200]};
  margin: 0 auto;
  /* color: red; */
  /* margin-bottom: 16px; */

  box-sizing: border-box;
  /* border: none; */
  border: 1px solid #dbdde5;
  /* border-right: none; */
  border-radius: 6px;

  &:focus {
    border: none;
  }
`;
export const PasswordInputWrap = styled.div`
  display: flex;
  width: 430px;
  height: 53px;
  border-radius: 5px;
  margin-left: 25px;
  border: 1px solid #dbdde5;
  justify-content: center;
  align-items: center;
  z-index: 1;
  opacity: 1;
  background-color: ${palette.gray[200]};
  &:focus {
    border: 1px solid ${palette.main};
  }
`;
export const PasswordInput = styled.input`
  width: 436px;
  height: 53px;
  padding: 20px 14px;
  font-size: 20px;
  display: flex;
  align-items: center;
  background-color: ${palette.gray[200]};

  box-sizing: border-box;
  border: none;

  border-right: none;
  border-radius: 6px 0 0 6px;

  &:focus {
    outline: none;
  }
`;
export const PWHideAndShow = styled.img`
  background-color: ${palette.gray[200]};
  border: none;
  padding: 14px;
  /* margin-left:; */
`;

export const ExplainText = styled.p`
  /* margin: ; */
  /* ${(props) => (props.color ? "red" : "red")} */
  /* color: red; */
  margin: 0 0 10px 30px;
`;

export const NextBtn = styled.button`
  width: 430px;
  height: 53px;
  margin-left: 25px;
  margin-top: 60px;
  border-radius: 10px;
  border: 1px solid ${palette.gray[300]};
  color: #333;
  font-size: 24px;
  cursor: pointer;
  background-color: ${palette.gray[200]};
  font-weight: bold;
`;
