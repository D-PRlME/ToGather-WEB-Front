import * as _ from "./style";
import SortArrowIcon from "../../assets/icon/SortArrow";
import * as s from "../myPage/style";
import * as m from "../Edit/style";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { IProfileData, PostsListResponse } from "../../LocalTypes";
import useFetch from "../../hooks/useFetch";

const TagsContainerMotion = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function DeleteUserComponent() {
  // State
  const [onModal, setOnModal] = useState(false);
  const [password, setPassword] = useState<string>();

  // Hook
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  // API
  const [GETuserPost, {data: myProfileData}] = useFetch<IProfileData>("users");
  const [DELETEuser] = useFetch("users");

  const onChangeInput = (data: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(data.target.value);
  };
  useEffect(() => {
    GETuserPost({
      method: "get",
    });
  }, []);

  const onDeleteUser = () => {
    DELETEuser({
      method: "delete",
      data: {
        password,
      },
    }).then(() => {
      alert("삭제 성공");
      navigate("/");
    });
  };
  return (
    <_.Container>
      <AnimatePresence>
        {onModal && (
          <m.ModalContainer
            variants={TagsContainerMotion}
            initial="hidden"
            animate="visible"
          >
            <m.ModalBg onClick={() => setOnModal(false)} />
            <m.ModalWrapper
              style={{
                width: "450px",
                height: "300px",
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <_.Text weight={700} size={40} color={"black"}>
                  계정을 삭제하시겠습니까?
                </_.Text>
                <_.Text weight={500} size={20} color={"black"}>
                  모든 프로필, 프로젝트, 작성한 글이 서버에서 삭제되며, 이
                  작업은 되돌릴 수 없습니다.
                </_.Text>
              </div>
              <_.ModalBtnWrapper>
                <_.ModalBtn
                  bgColor={"#E1AD01"}
                  onClick={() => setOnModal(false)}
                >
                  취소
                </_.ModalBtn>
                <_.ModalBtn bgColor={"#F7F7F7"} onClick={onDeleteUser}>
                  진행
                </_.ModalBtn>
              </_.ModalBtnWrapper>
            </m.ModalWrapper>
          </m.ModalContainer>
        )}
      </AnimatePresence>
      <div>
        <s.BackBtnContainer
          onClick={() => navigate(-1)}
          style={{ marginLeft: 0 }}
        >
          <SortArrowIcon />
          <s.BackBtn>돌아가기</s.BackBtn>
        </s.BackBtnContainer>
        <_.Text size={40} weight={700} color={"black"}>
          계정 삭제
        </_.Text>
        <_.Text size={24} weight={500} color={"black"}>
          계정을 삭제하려면 비밀번호를 입력하세요
        </_.Text>
      </div>
      <div>
        <div style={{"display":"flex", "justifyContent":"center", "width":"756px", "marginBottom":"24px"}}>
          <img alt="" src={myProfileData?.profile_image_url} height={40} />
          <_.Text size={33} weight={700} color={"black"}>
            {myProfileData?.name}
          </_.Text>
        </div>
        <_.Input
          placeholder="비밀번호"
          ref={passwordRef}
          onChange={onChangeInput}
          value={password}
        />
      </div>
      <div style={{"alignSelf":"center", "width":"20rem"}}>
        <_.Btn onClick={() => setOnModal(true)}>
          <_.Text
            size={24}
            weight={700}
            color={"white"}
            onClick={() => {
              setOnModal(true);
            }}
          >
            계정 삭제
          </_.Text>
        </_.Btn>
      </div>
    </_.Container>
  );
}

export default DeleteUserComponent;
