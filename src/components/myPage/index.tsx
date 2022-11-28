import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as _ from "./myPosts/style";
import { useEffect, useState } from "react";
import { customAxios } from "../../lib/axios";
import token from "../../lib/token";
import Modal from "../modal/Modal";
import { Container, ProfileContainer } from "./myPosts/style";
import useFetch from "../../hooks/useFetch";

const TagContainerMotion = {
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

const TagMotion = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};


export interface IProfileData {
  user_id: number;
  name: string;
  email: string;
  profile_image_url: string;
  introduce: string;
  positions: string[];
}
function MyPageComponent() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [myProfileData, setMyProfileData] = useState<IProfileData>();

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const navigate = useNavigate();
  useEffect(() => {
    customAxios("users", {
      method: "get",
    })
      .then((res) => setMyProfileData(res.data))
      .catch((err) => alert(err.message));
  }, []);

  const onLogOut = () => {
    customAxios("users/logout", {
      method: "delete",
    })
  }
  return (
    <>
      {isOpenModal && (
        <Modal onClickToggleModal={onClickToggleModal}>
          <button onClick={onLogOut}>로그아웃</button>
        </Modal>
      )}
      <Container>
        <ProfileContainer>
          <div style={{ display: "flex" }}>
            <_.Profile alt="none" src={myProfileData?.profile_image_url}/>
            <_.ProfileTextContainer>
              <_.Text weight={700} size={28} height={33}>
                {myProfileData?.name}
              </_.Text>
              <_.Text weight={500} size={20} height={24}>
                {myProfileData?.email}
              </_.Text>
            </_.ProfileTextContainer>
          </div>
          <_.Btn color="#f7f7f7">
            <_.Text
              weight={500}
              size={24}
              height={29}
              color="black"
              onClick={onClickToggleModal}
              // onClick={onLogOut}
            >
              로그아웃
            </_.Text>
          </_.Btn>
        </ProfileContainer>
        <_.TagContainer
          variants={TagContainerMotion}
          initial="hidden"
          animate="visible"
        >
          {myProfileData?.positions.map((tag) => (
            <_.Tag variants={TagMotion} key={tag}>
              <_.Text weight={700} size={18} height={30} color="black">
                {tag}
              </_.Text>
            </_.Tag>
          ))}
        </_.TagContainer>
        <_.BtnContainer>
          <Link to="/mypage/profileEdit">
            <_.Btn>
              <_.Text weight={500} height={28.8} size={24}>
                계정 정보 수정
              </_.Text>
            </_.Btn>
          </Link>
          <_.Btn>
            <_.Text weight={500} height={28.8} size={24}>
              비밀번호 변경
            </_.Text>
          </_.Btn>
          <Link to="/mypage/posts">
            <_.Btn>
              <_.Text weight={500} height={28.8} size={24}>
                내 게시글 보기
              </_.Text>
            </_.Btn>
          </Link>
          <_.Btn>
            <_.Text weight={500} height={28.8} size={24}>
              개발자들
            </_.Text>
          </_.Btn>
        </_.BtnContainer>
      </Container>
    </>
  );
}

export default MyPageComponent;
