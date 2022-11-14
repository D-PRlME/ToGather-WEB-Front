import styled from "styled-components";

export const HomePostSkillHeader = styled.div`
  display: flex;
  align-items: center;
  width: 785px;
  height: 100px;
  margin-left: 20px;
  padding-left: 20px;
  border-radius: 8px;
  background: #f7f7f7;
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 15px;
  margin-bottom: 5px;
`;

export const HomePostListContainer = styled.div`
  width: auto;
  height: 900px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  //background-color: yellow;
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80px;
  // background-color: aqua;
  border-radius: 10px;
  cursor: pointer;
  // padding-top: 16px;
`;

export const SkillLogo = styled.img`
  width: 50px;
  height: 50px;
`;

export const SkillText = styled.div`
  height: 20px;
  font-weight: bold;
`;
