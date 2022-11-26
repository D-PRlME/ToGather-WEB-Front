import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SortArrowIcon from "../../assets/icon/SortArrow";
import { BackBtn, BackBtnContainer, Profile } from "../myPage/style";
import * as _ from "./style";
import * as m from "../Edit/style";
import { customAxios } from "../../lib/axios";
import { DetailPostResponse, IProfileData } from "../../LocalTypes";
import { AnimatePresence } from "framer-motion";

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

const BoardContainerMotion = {
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
const BoardMotion = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
function PostComponent() {
  const navigate = useNavigate();
  const params = useParams();
  const [detailData, setDetailData] = useState<DetailPostResponse>();
  const [userProfileData, setUserProfileData] = useState<IProfileData>();
  const [isLike, setIsLike] = useState(false);
  const [onModal, setOnModal] = useState(false);
  const [onProfileModal, setProfileModal] = useState(false);

  useEffect(() => {
    // 상세 페이지 불러오기
    customAxios(`posts/${params["*"]}`, {
      method: "get",
    })
      .then((res) => setDetailData(res.data))
      .catch((err) => alert(err.message));
    setIsLike(Boolean(detailData?.is_liked));
  }, []);

  useEffect(() => {
    if(detailData){
      customAxios(`users/${detailData.user.user_id}`, {
        method: "get"
      })
        .then((res) => setUserProfileData(res.data))
        .catch((err) => console.log(err.message));
    }
    
  }, [detailData])
  const onValidLike = () => {
    if (isLike) {
      // 좋아요 삭제
      customAxios(`posts/like/${params["*"]}`, {
        method: "delete",
      })
        .then(() => {
          setDetailData(
            (current) =>
              current && {
                ...current,
                like_count: current.like_count - 1,
              }
          );
          setIsLike(false);
        })
        .catch(() => alert("좋아요 취소 실패.."));
    } else {
      // 좋아요 보내기
      customAxios(`posts/like/${params["*"]}`, {
        method: "post",
      })
        .then(() => {
          setDetailData(
            (current) =>
              current && {
                ...current,
                like_count: current?.like_count + 1,
              }
          );
          setIsLike(true);
        })
        .catch(() => alert("좋아요 보내기 실패.."));
    }
  };
  const onValidDelete = () => {
    customAxios(`posts/${params["*"]}`, {
      method: "delete",
    })
      .then(() => {
        alert("삭제 성공!");
        navigate("/");
      })
      .catch(() => alert("삭제 실패..."));
  };

  const onClickProfile = () => {
    setProfileModal(true)
  }
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
              <m.ModalWrapper>
                <m.ModalBtn
                  style={{"backgroundColor":"#E1AD01"}}
                  onClick={() => setOnModal(false)}
                >
                  취소
                </m.ModalBtn>
                <m.ModalBg style={{"backgroundColor":"#F7F7F7"}} onClick={onValidDelete}>
                  진행
                </m.ModalBg>
              </m.ModalWrapper>
            </m.ModalWrapper>
          </m.ModalContainer>
        )}
        {onProfileModal && (
          <m.ModalContainer
            variants={TagsContainerMotion}
            initial="hidden"
            animate="visible"
          >
            <m.ModalBg onClick={() => setProfileModal(false)} />
            <m.ModalWrapper
              style={{
                width: "470px",
                height: "338px",
                justifyContent: "flex-start",
                display: "flex",
                flexDirection: "column",
                gap: "15px"
              }}
            >
              <div 
                onClick={() => setProfileModal(false)}
                style={{"position":"absolute", "top": "20px", "zIndex": "2", "right": "20px"}}
              >
                <ExitIcon/>
              </div>
              <div style={{display: "flex"}}>
                <Profile
                  alt="none"
                  style={{ border: 0, height: 70, width: 70 }}
                  src={detailData?.user?.profile_image_url}
                />
                <div style={{display:"flex", "flexDirection":"column", "justifyContent":"center", gap: "20px"}}>
                  <_.Text size={25} weight={700}>{userProfileData?.name}</_.Text>
                  <_.Text size={24} weight={700} color={"gray"}>{userProfileData?.email}</_.Text>
                </div>
              </div>
              <_.TagContainer>
                {userProfileData?.positions?.map((position) => (
                  <_.Tag>{position}</_.Tag>
                ))}
              </_.TagContainer>
              <_.Text size={24} weight={500} style={{marginTop: "15px"}}>
                {userProfileData?.introduce}
              </_.Text>
            </m.ModalWrapper>
          </m.ModalContainer>
        )}
      </AnimatePresence>
      <div>
        <BackBtnContainer
          onClick={() => navigate(-1)}
          style={{ marginLeft: 0 }}
        >
          <SortArrowIcon />
          <BackBtn>돌아가기</BackBtn>
        </BackBtnContainer>
        <_.Text weight={700} size={32} height={38} color="black">
          {detailData?.title}
        </_.Text>
        <_.HeaderContainer>
          <div style={{ display: "flex", alignItems: "center" }} onClick={onClickProfile}>
            <Profile
              alt="none"
              style={{ border: 0 }}
              src={detailData?.user?.profile_image_url}
            />
            <_.Text weight={500} size={20} height={24}>
              {detailData?.user.user_name}
            </_.Text>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <_.Text weight={500} size={20} color={"#787878"}>
              {detailData?.created_at}
            </_.Text>
            <div
              style={{ position: "relative", display: "flex", "zIndex":-1 }}
              onClick={onValidLike}
            >
              <_.HeartText>{detailData?.like_count}</_.HeartText>
              <Heart />
            </div>
          </div>
        </_.HeaderContainer>
        <div>
          <svg
            width="772"
            height="1"
            viewBox="0 0 772 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="0.5"
              x2="772"
              y2="0.5"
              stroke="#272727"
              strokeOpacity="0.15"
            />
          </svg>
        </div>
        <_.TagContainer
          variants={BoardContainerMotion}
          initial="hidden"
          animate="visible"
        >
          {detailData?.tags?.map((tag) => (
            <_.Tag key={tag.name} variants={BoardMotion}>
              {tag.name}
            </_.Tag>
          ))}
        </_.TagContainer>
        <_.Contents value={detailData?.content}></_.Contents>
      </div>
      <_.BtnContainer>
        <_.Btn bgColor="#E1AD01" h={45}>
          연락하기
        </_.Btn>
        {detailData?.is_mine && (
          <div style={{ display: "flex" }}>
            <_.Btn
              bgColor="#F7F7F7"
              h={45}
              onClick={() => navigate(`/Edit/${params["*"]}`)}
            >
              수정
            </_.Btn>
            <_.Btn bgColor="#FE3D3D" h={45} onClick={onValidDelete}>
              삭제
            </_.Btn>
          </div>
        )}
      </_.BtnContainer>
    </_.Container>
  );
}

function Heart() {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", top: "25%", left: "60%" }}
    >
      <path
        d="M10.9312 5.01982L12.9155 2.9978C12.9155 2.9978 16.2228 -0.372247 19.5301 2.9978C22.8374 6.36784 19.5301 9.73789 19.5301 9.73789L10.9312 18.5L2.62619 9.73789C2.62619 9.73789 -0.828082 6.21806 2.33221 2.9978C5.4925 -0.222467 8.94678 2.9978 8.94678 2.9978L10.9312 5.01982Z"
        stroke="#787878"
        strokeWidth="2"
      />
    </svg>
  );
}

function ExitIcon(){
  return (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="16" fill="#D9D9D9"/>
      <path d="M9 9L23 23M9 23L23 9" stroke="#727272" strokeWidth="3" strokeLinecap="round" strokeLinejoin="bevel"/>
  </svg>
  )
}
export default PostComponent;
