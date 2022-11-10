import React, { useEffect, useState, Suspense } from "react";
import * as _ from "./style";
import * as s from "../../myPage/style";
import { Link } from "react-router-dom";
import HeartIcon from "../../../assets/icon/Heart";
import axios from "axios";
import Token from "../../../lib/token";
import { customAxios } from "../../../lib/axios";

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
      bounce: 0.2,
    },
  },
};

export interface TagListResponse {
  tags: [
    {
      name: string;
      image_url: string;
    }
  ];
}
export interface IDetailPost {
  post_id: number;
  title: string;
  user: {
    user_id: number;
    user_name: string;
    profile_image_url: string;
  };
  created_at: string;
  tags: [
    {
      name: string;
      image_url: string;
    }
  ];
  is_finished: boolean;
  like_count: number;
}

export interface PostsListResponse {
  post_list: IDetailPost[];
}

export interface ISelectTags {
  [key: string]:
    | "SPRING_BOOT"
    | "MYSQL"
    | "BACKEND"
    | "NODE_JS"
    | "REACT"
    | "FRONTED"
    | "VUE_JS"
    | "SWIFT"
    | "JAVA"
    | "JAVASCRIPT";
}

function Loading() {
  return <h1>로딩중입니다....</h1>;
}

const HomePostList = () => {
  const [tagsData, setTagsData] = useState<TagListResponse>();
  const [postsData, setPostsData] = useState<PostsListResponse>();
  // TODO : customaxios로 바꾸기
  const tagOnValid = (tags: string) => {
    const copyTags = tags.replace(".", "_").toUpperCase();
    axios(process.env.REACT_APP_BaseUrl + "/posts/tag", {
      method: "get",
      headers: {
        Authorization: Token.getToken("token"),
      },
      params: {
        tag: copyTags,
      },
    }).then((res) => setPostsData(res.data));
  };
  // TODO : localToken으로 변경해야함
  useEffect(() => {
    customAxios("posts/tag/list", {
      method: "get",
      headers: {
        Authorization: Token.getToken("token"),
      },
    })
      .then((res) => setTagsData(res.data))
      .catch((err) => {
        alert(err.message);
      });
    customAxios("posts", {
      method: "GET",
      headers: {
        Authorization: Token.getToken("token"),
      },
    })
      .then((res) => setPostsData(res.data))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <_.HomePostListContainer>
      <_.HomePostSkillHeader>
        <Suspense fallback={<Loading />}>
          {tagsData?.tags.map((tag) => (
            <_.Skill key={tag.name} onClick={() => tagOnValid(tag.name)}>
              <_.SkillLogo src={tag.image_url} alt={"loading"} />
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
          <Link to={`/posts/${post.post_id}`} key={post.post_id}>
            <s.Board variants={BoardMotion}>
              <s.BoardTitle>{post.title}</s.BoardTitle>
              <s.TagWrapper>
                {post.tags.map((tag) => (
                  <s.Tag>{tag.name}</s.Tag>
                ))}
              </s.TagWrapper>
              <Line />
              <s.UnderWrapper>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <s.Profile alt="none" src={post.user.profile_image_url} />
                  <s.UserName>{post.user.user_name}</s.UserName>
                </div>
                <s.UnderRightWrapper>
                  <div>
                    <HeartIcon />
                    <s.GrayText style={{ marginLeft: "4px" }}>
                      {post.like_count}
                    </s.GrayText>
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
