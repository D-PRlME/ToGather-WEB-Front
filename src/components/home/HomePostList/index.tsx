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

interface PostsListResponse{
  "post_list" : [
      {
        "post_id" : number
        "title" : string;
        "user" : {
          "user_id" : number;
          "user_name" : string;
          "profile_image_url" : string;
        },
        "created_at" : string
        "tags" : [
          {
            "name" : string,
            "image_url" : string
          }
        ],
        "is_finished" : boolean,
        "like_count":number
      }
    ]
}
function Loading(){
  return (
    <h1>로딩중입니다....</h1>
  )
}
const HomePostList = () => {
  const [tagsData, setTagsData] = useState<TagListResponse>()
  const [postsData, setPostsData] = useState<PostsListResponse>()
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYW5namlzb3VuZ0Bkc20uaHMua3IiLCJ0eXAiOiJhY2Nlc3MiLCJleHAiOjE2Njc4MjA5ODYsImlhdCI6MTY2NzgxNzM4Nn0.PzJFBlCV0HcKo5qYE-vMLtvde-NRauoTGvEDYMLG3-M"
  useEffect(()=>{
    axios(process.env.REACT_APP_BaseUrl + "/posts/tag/list").then((res)=>setTagsData(res.data))
    axios(process.env.REACT_APP_BaseUrl + "/posts", {
        headers: {
            Authorization: token
        }
    }).then((res) => setPostsData(res.data))
  },[])
  return (
    <>
      <_.HomePostListContainer>
        <_.HomePostSkillHeader>
          <Suspense fallback={<Loading/>}>
          {tagsData?.tags.map((tag) => (
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
          {postsData?.post_list.map((post) => (
            <Link to={`/posts/${post.user.user_id}`}>
              <s.Board key={post.post_id} variants={BoardMotion}>
                <s.BoardTitle>{post.title}</s.BoardTitle>
                <s.TagWrapper>
                  {post.tags.map((tag)=> (
                    <s.Tag>{tag.name}</s.Tag>
                  ))}
                </s.TagWrapper>
                <Line />
                <s.UnderWrapper>
                  <div>
                    <s.Profile alt="none" src={post.user.profile_image_url}/>
                    <s.UserName>{post.user.user_name}</s.UserName>
                  </div>
                  <s.UnderRightWrapper>
                    <div>
                      <HeartIcon />
                      <s.GrayText style={{ marginLeft: "4px" }}>{post.like_count}</s.GrayText>
                    </div>
                    <SectionLine />
                    <s.GrayText>{post.created_at}</s.GrayText>
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
      <line y1="0.5" x2="790" y2="0.5" stroke="#272727" strokeOpacity="0.15" />
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
      <path d="M1 0L1 7.5L1 15" stroke="#272727" strokeOpacity="0.15" />
    </svg>
  );
}

export default HomePostList;
