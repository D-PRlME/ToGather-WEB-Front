import React, { useEffect, useState, Suspense } from "react";
import * as _ from "./style";
import * as s from "../../myPage/style";
import { Link } from "react-router-dom";
import HeartIcon from "../../../assets/icon/Heart";
import { customAxios } from "../../../lib/axios";
import { PostsListResponse, TagListResponse } from "../../../LocalTypes";

function Loading() {
  return <h1>로딩중입니다....</h1>;
}

const HomePostList = () => {
  const [tagsData, setTagsData] = useState<TagListResponse>();
  const [postsData, setPostsData] = useState<PostsListResponse>();

  const tagOnValid = (tags: string) => {
    const copyTags = tags.replace(".", "_").toUpperCase();
    customAxios("posts/tag", {
      method: "get",
      params: {
        tag: copyTags,
      },
    }).then((res) => setPostsData(res.data));
  };
  useEffect(() => {
    customAxios("posts/tag/list", {
      method: "get",
    })
      .then((res) => setTagsData(res.data))
      .catch((err) => {
        alert(err.message);
      });
    customAxios("posts", {
      method: "GET",
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
      <s.BoardContainer>
        {postsData?.post_list.map((post) => (
          <Link to={`/posts/${post.post_id}`} key={post.post_id}>
            <s.Board>
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
