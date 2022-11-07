import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SortArrowIcon from "../../assets/icon/SortArrow";
import { IDetailPost } from "../home/HomePostList";
import { BackBtn, BackBtnContainer, Profile } from "../myPage/style";
import * as _ from "./style";

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
  const [detailData, setDetailData] = useState<IDetailPost>({});
  const token =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYW5namlzb3VuZ0Bkc20uaHMua3IiLCJ0eXAiOiJhY2Nlc3MiLCJleHAiOjE2Njc4NDEzODAsImlhdCI6MTY2NzgzNzc4MH0.fKjrK5-ykI90QoQAB8jTxVx3GaRBEmf8LHbJo9HxiMM";
  useEffect(() => {
    axios(process.env.REACT_APP_BaseUrl + `/posts/${params["*"]}`, {
      method: "get",
      headers: {
        Authorization: token,
      },
    }).then((res) => setDetailData(res.data));
  }, []);
  console.log(detailData);
  return (
    <_.Container>
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <Profile
              htmlFor="imgFile"
              as="label"
              style={{ width: "40px", height: "40px" }}
            >
              <Profile alt="none" style={{ border: 0 }} />
            </Profile>
            <input type="file" id="imgFile" style={{ display: "none" }} />
            <_.Text weight={500} size={20} height={24}>
              {detailData?.user}
            </_.Text>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <_.Text weight={500} size={20} color={"#787878"}>
              {detailData?.created_at}
            </_.Text>
            <div style={{ position: "relative", display: "flex" }}>
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
              stroke-opacity="0.15"
            />
          </svg>
        </div>
        <_.TagContainer
          variants={BoardContainerMotion}
          initial="hidden"
          animate="visible"
        >
          {detailData?.tags.map((tag) => (
            <_.Tag key={tag.name} variants={BoardMotion}>
              {tag.name}
            </_.Tag>
          ))}
        </_.TagContainer>
        <_.Contents readOnly>내용들</_.Contents>
      </div>
      <_.BtnContainer>
        <_.Btn bgColor="#E1AD01" h={45}>
          연락하기
        </_.Btn>
        <div style={{ display: "flex" }}>
          <_.Btn bgColor="#F7F7F7" h={45}>
            수정
          </_.Btn>
          <_.Btn bgColor="#FE3D3D" h={45}>
            삭제
          </_.Btn>
        </div>
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
        stroke-width="2"
      />
    </svg>
  );
}
export default PostComponent;
