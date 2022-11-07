import React, { useEffect, useState, Suspense } from "react";
import * as _ from "./style";
import * as s from "../../myPage/style"
import flutter from "../../../assets/logo/skill/flutter.svg";
import UserLogo from "../../../assets/logo/user.svg";
import PostLike from "../../../assets/logo/like.svg";
import { Link } from "react-router-dom";
import HeartIcon from "../../../assets/icon/Heart";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";

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
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      bounce: 0.2
    }
  },
};

interface TagListResponse{
  "tags": [
    {
      "name": string;
      "image_url": string;
    },
  ]
}
function Loading(){
  return (
    <h1>로딩중입니다....</h1>
  )
}
const HomePostList = () => {
   const [data, setData] = useState<TagListResponse>()
  useEffect(()=>{
    axios(process.env.REACT_APP_BaseUrl + "/posts/tag/list").then((res)=>setData(res.data))
  },[])
  return (
    <>
      <_.HomePostListContainer>
        <_.HomePostSkillHeader>
          <Suspense fallback={<Loading/>}>
          {data?.tags.map((tag) => (
            <_.Skill key={tag.name}>
              <_.SkillLogo src={tag.image_url} alt={"loading"}/>
              <_.SkillText>{tag.name}</_.SkillText>
            </_.Skill>
          ))}
          </Suspense>
        </_.HomePostSkillHeader>
        <s.BoardContainer
          variants={BoardContainerMotion}
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Link to="/posts">
              <s.Board key={i} variants={BoardMotion}>
                <s.BoardTitle>제목</s.BoardTitle>
                <s.TagWrapper>
                  <s.Tag>Flutter</s.Tag>
                  <s.Tag>Javscript</s.Tag>
                </s.TagWrapper>
                <Line />
                <s.UnderWrapper>
                  <div>
                    <s.Profile alt="none" />
                    <s.UserName>유저이름</s.UserName>
                  </div>
                  <s.UnderRightWrapper>
                    <div>
                      <HeartIcon />
                      <s.GrayText style={{ marginLeft: "4px" }}>21</s.GrayText>
                    </div>
                    <SectionLine />
                    <s.GrayText>1시간전</s.GrayText>
                  </s.UnderRightWrapper>
                </s.UnderWrapper>
              </s.Board>
            </Link>
          ))}
        </s.BoardContainer>
      </_.HomePostListContainer>
    </>
  );
};

function Line() {
  return (
    <svg
      width="759"
      height="1"
      viewBox="0 0 759 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="0.5" x2="759" y2="0.5" stroke="#272727" strokeOpacity="0.15" />
    </svg>
  );
}

function SectionLine() {
  return (
    <svg
      width="2"
      height="15"
      viewBox="0 0 2 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 0L1 7.5L1 15" stroke="#272727" stroke-opacity="0.15" />
    </svg>
  );
}

export default HomePostList;
