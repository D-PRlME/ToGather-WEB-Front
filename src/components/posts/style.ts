import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 900px;
  padding-left: 24px;
  align-items: center;
  padding: 24px;
  align-items: flex-start;
`;

export const Text = styled(motion.div)<{
  weight: number;
  size: number;
  height?: number;
  color?: string;
}>`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size}px;
  line-height: ${(props) => (props.height ? props.height : 10)}px;
  color: ${(props) => (props ? props.color : "#FFFFFF")};
`;

export const HeartText = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 38px;
  border: 2px solid rgba(39, 39, 39, 0.15);
  border-radius: 888px;
  padding-right: 30px;
  font-weight: 500;
  font-size: 20px;
  margin-left: 16px;
`;

export const HeaderContainer = styled(motion.div)`
  display: flex;
  width: 772px;
  justify-content: space-between;
`;
export const TagContainer = styled(motion.div)`
  display: flex;
  justify-content: left;
  gap: 10px;
  margin-top: 14px;
`;
export const Tag = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: tomato;
  background: #e7e7e7;
  border: 1px solid rgba(39, 39, 39, 0.15);
  border-radius: 37px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;
export const Contents = styled.textarea`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: black;
  width: 772px;
  resize: none;
  border: 0;
  outline: none;
  margin-top: 18px;
  height: 550px;
`;
export const BtnContainer = styled(motion.div)`
  display: flex;
  width: 772px;
  justify-content: space-between;
`;
export const Btn = styled(motion.button)<{ bgColor: string; h: number }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  height: ${(props) => props.h}px;
  border: 2px solid rgba(39, 39, 39, 0.15);
  border-radius: 888px;
  background-color: ${(props) => props.bgColor};
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;
