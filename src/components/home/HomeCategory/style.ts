import { motion } from "framer-motion";
import styled from "styled-components";

export const HomeCategoryContainer = styled.div`
  width: 250px;
  height: 900px;
  border-right: 1px solid rgba(39, 39, 39, 0.15);
  // background-color: red;
`;

export const HomeLogoBlock = styled.div`
  display: flex;
  width: 100px;
  height: 50px;
  // background-color: yellow;
`;

export const HomeText = styled.div`
  align-self: flex-start;
  width: 80px;
  padding-top: 10px;
  font-size: 25px;
  font-weight: 700;
`;

export const MenuText = styled.span`
  align-self: flex-start;
  font-weight: 700;
  padding-top: 15px;
  margin-left: 5px;
`;

export const MenuBlock = styled.div<{isHere?: boolean}>`
  display: flex;
  align-items: center;
  padding-left: 9px;
  gap: 12px;
  width: 236px;
  height: 50px;
  background: ${props => props.isHere ? "#f2f2f2" : "white"};
  border-radius: 8px;
  color: ${props => props.isHere ? "#E1AD01" : "black"};
  margin: 5px;
  path {
    fill: ${props => props.isHere ? "#E1AD01" : "black"};
  }
`;
export const MenuLogo = styled.svg`
  width: 30px;
  object-fit: scale-down;
  margin-left: 5px;
  // margin-bottom: 60px;
`;

export const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 500px 5px 5px;
  width: 236px;
  height: 50px;
  gap: 12px;
  border-radius: 8px;
`;

export const HomePageLogo = styled.img`
  width: 60px;
  object-fit: scale-down;
  margin: 0px auto;
  // margin-bottom: 60px;
`;

// 모달창
export const ModalBg = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  filter: blur(6px);
`
export const ModalContainer = styled(motion.div)`
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
export const ModalWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 470px;
  height: 300px;
  background: #ffffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  z-index: 1;
  padding: 20px;
  justify-content: space-between;
`;
export const ModalBtn = styled.div<{bgColor?: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 48px;
  background: ${props => props.bgColor ? props.bgColor : "#f7f7f7"};
  border: 2px solid rgba(39, 39, 39, 0.15);
  border-radius: 6px;
  z-index: -1;
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