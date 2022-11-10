import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  height: 900px;
  padding-left: 24px;
  align-items: center;
  gap: 8px;
  &:button {
    gap: 16px;
  }
`;

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
export const BtnContainer = styled.div`
  display: flex;
  width: 772px;
  justify-content: space-between;
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

export const QuestionModal = styled(motion.div)`
  display: flex;
  position: absolute;
  width: 342px;
  height: 58px;
  background-color: white;
  top: 55px;
  right: 0px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.2px;
  padding-left: 11px;
  align-items: center;
`;
export const Tag = styled(motion.div)`
  height: 80px;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: left;
  border-bottom: 1px solid rgba(39, 39, 39, 0.15);
`;
export const ModalContainer = styled(motion.div)`
가  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
export const ModalBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 0;
  backdrop-filter: blur(6px);
`;
export const ModalWrapper = styled(motion.div)`
  position: relative;
  width: 470px;
  height: 622px;
  background: #ffffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  z-index: 1;
  padding: 20px;
  justify-content: space-between;
`;
export const Text = styled.div<{
  weight: number;
  size: number;
  height?: number;
  color?: string;
}>`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size}px;
  line-height: ${(props) => (props.height ? props.height : 10)}px;
  color: ${(props) => (props ? props.color : "#FFFFFF")};
  z-index: 1;
`;
export const TagWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 500px;
  overflow: auto;
`;
export const ModalBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 48px;
  background: #f7f7f7;
  border: 2px solid rgba(39, 39, 39, 0.15);
  border-radius: 6px;
  z-index: -1;
`;
export const SelectTag = styled.div`
  height: 30px;
  margin: 10px 0 10px 0;
  padding: 10px;
  min-width: 100px;
  width: auto;
  background: #414141;
  border: 1px solid rgba(39, 39, 39, 0.15);
  border-radius: 37px;
  color: white;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;
