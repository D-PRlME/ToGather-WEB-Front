import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  margin-left: 30px;
`
export const Text = styled.div<{size: number, weight: number, color: string}>`
  font-size: ${props => props.size}px;
  color: ${props => props.color};
  font-weight: ${props => props.weight};
`
export const Input = styled.input`
  width: 756px;
  height: 53px;
  background-color: #F7F7F7;
  border: 1px solid rgba(39, 39, 39, 0.15);
  border-radius: 6px;
  padding-left: 10px;
  font-size: 24px;
  font-weight: 500;
`
export const Btn = styled.button`
  width: 121px;
  height: 45px;
  background: #FE3D3D;
  border: 2px solid rgba(39, 39, 39, 0.15);
  border-radius: 888px;
`
export const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  left: 0;
`

