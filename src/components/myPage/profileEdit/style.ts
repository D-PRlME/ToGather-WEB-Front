import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 33px;
  gap: 20px;
`;
export const Btn = styled.button<{ bgColor: string; w: number; h: number }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;
  border: 2px solid rgba(39, 39, 39, 0.15);
  border-radius: 888px;
  background-color: ${(props) => props.bgColor};
`;
export const Input = styled.input`
  width: 756px;
  height: 53px;
  background: #f7f7f7;
  padding: 12px;
  border: 1px solid rgba(39, 39, 39, 0.15);
  border-radius: 6px;
`;
