import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;
export const BackBtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 22px;
  cursor: pointer;
`;
export const BackBtn = styled.button`
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  line-height: 33.61px;
  color: #787878;
`;
export const BoardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: scroll;
`;
export const Board = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 137px;
  width: auto;
  margin-left: 20px;
  background: #f7f7f7;
  border-radius: 8px;
  padding: 12px;
`;
export const BoardTitle = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;
export const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  background: #e7e7e7;
  border: 1px solid rgba(39, 39, 39, 0.15);
  border-radius: 37px;
`;
export const UnderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Profile = styled.img`
  border: 1px solid rgba(39, 39, 39, 0.15);
  border-radius: 90px;
  width: 100px;
  height: 100px;
  margin-right: 8px;
  background-color: black;
`;
export const UserName = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;
export const UnderRightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
export const GrayText = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #787878;
`;
