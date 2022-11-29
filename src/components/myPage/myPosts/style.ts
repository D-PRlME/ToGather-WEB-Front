import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 20px;
`;
export const Profile = styled.img`
  width: 70px;
  height: 70px;
  border: 1px solid rgba(39, 39, 39, 0.15);
  border-radius: 888px;
`;
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 820px;
  margin-top: 23px;
`;
export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 12px;
  height: auto;
`;
export const Text = styled(motion.div)<{
  weight: number;
  size: number;
  height: number;
  color?: string;
}>`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size}px;
  line-height: ${(props) => props.height}px;
  color: ${(props) => (props ? props.color : "#FFFFFF")};
`;
export const LogOutBtn = styled.button`
  width: 107px;
  height: 53px;
  background: #f7f7f7;
  border-radius: 8px;
`;
export const TagContainer = styled(motion.div)`
  display: flex;
  justify-content: left;
  gap: 10px;
`;
export const Tag = styled(motion.div)`
  height: 30px;
  padding: 4px;
  background-color: tomato;
  border-radius: 4px;
`;
export const BtnContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;
export const Btn = styled(motion.button)`
  width: 386px;
  height: 53px;
  background: #f7f7f7;
  border-radius: 8px;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 12px;
  font-weight: 700;
`;
