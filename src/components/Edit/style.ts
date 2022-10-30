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

export const Input = styled.input<{ height?: number }>`
  width: 772px;
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
