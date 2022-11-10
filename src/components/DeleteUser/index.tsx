import * as _ from "./style"
import SortArrowIcon from "../../assets/icon/SortArrow";
import * as s from "../myPage/style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function DeleteUserComponent(){
  const naviate = useNavigate();
  const [onModal, setOnModal] = useState(false);
  return (
    <_.Container>
      <AnimatePresence>
        {onModal &&
          <_.ModalContainer onClick={() => setOnModal(false)}>

          </_.ModalContainer>}
      </AnimatePresence>
      <div>
        <s.BackBtnContainer
          onClick={() => naviate(-1)}
          style={{ marginLeft: 0 }}
        >
          <SortArrowIcon />
          <s.BackBtn>돌아가기</s.BackBtn>
        </s.BackBtnContainer>
        <_.Text size={40} weight={700} color={"black"}>계정 삭제</_.Text>
        <_.Text size={24} weight={500} color={"black"}>계정을 삭제하려면 비밀번호를 입력하세요</_.Text>
      </div>
      <div>
        <div style={{display:"flex"}}>
          <img alt="oo"/>
          <_.Text size={33} weight={700} color={"black"}>이름</_.Text>
        </div>
        <_.Input placeholder="비밀번호"/>
      </div>
      <div>
        <_.Btn>
          <_.Text size={24} weight={700} color={"white"} onClick={() => {
            setOnModal(true);
          }}>
            계정 삭제
          </_.Text>
        </_.Btn>
      </div>
    </_.Container>
  );
}

export default DeleteUserComponent;