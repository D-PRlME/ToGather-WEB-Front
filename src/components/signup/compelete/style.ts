import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const CompeleteContainer = styled.div`
  width: 1000px;
  height: 900px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const CompeleteWrap = styled.div`
  margin: 100px 250px;
  width: 480px;
  height: 475px;
  border-radius: 16px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.p`
  padding: 17px;
  font-size: 30px;
  font-weight: 700;
  p {
    margin: 0;
  }
`;

export const CompeleteBtn = styled.button`
  width: 430px;
  height: 53px;
  margin-left: 25px;
  margin-top: 70px;
  /* padding-top: 40px; */
  border-radius: 10px;
  border: 1px solid ${palette.main};
  color: #333;
  font-size: 24px;
  cursor: pointer;
  background-color: ${palette.main};
  font-weight: bold;
`;

export const CompeleteIconWrap = styled.img`
  margin-left: 160px;
`;
