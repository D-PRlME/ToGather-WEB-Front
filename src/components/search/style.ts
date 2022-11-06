import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 900px;
  padding: 24px;
  align-items: start;
  gap: 20px;
`
export const Input = styled.input<{ height?: number; width?: number }>`
  width: ${(props) => (props.width ? props.width : 772)}px;
  height: ${(props) => (props.height ? props.height : 48)}px;
  color: #787878;
  border: 1px solid rgba(39, 39, 39, 0.15);
  border-radius: 6px;
  font-size: 20px;
  padding: 12px;
  background: #f7f7f7;
  resize: none;
`;
export const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const Tag = styled(motion.div)<{bgColor?: string}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  background: ${props=>props.bgColor ? props.bgColor : "#e7e7e7"};
  border: 1px solid rgba(39, 39, 39, 0.15);
  border-radius: 37px;
`;
export const Btn = styled.button<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  border: 2px solid rgba(39, 39, 39, 0.15);
  border-radius: 45px;
  padding: 8px 16px;
  height: 45px;
  font-weight: bold;
  font-size: 24px;
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
  background: #f7f7f7;
  border-radius: 8px;
  padding: 12px;
`;
export const BoardTitle = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;
export const BoardTagWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const BoardTag = styled.div`
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
  width: 33px;
  height: 33px;
  margin-right: 8px;
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