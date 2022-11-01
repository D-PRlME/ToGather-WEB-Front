import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 33px;
  gap: 20px;
`;
export const Btn = styled.button<{ bgColor: string; h: number }>`
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
export const Input = styled.input<{ h?: number }>`
  width: 756px;
  height: ${(props) => (props.h ? props.h : 29)}px;
  background: #f7f7f7;
  padding: 12px;
  border: 1px solid rgba(39, 39, 39, 0.15);
  border-radius: 6px;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
`;
export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
