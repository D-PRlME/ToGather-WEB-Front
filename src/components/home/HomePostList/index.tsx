import React from "react";
import {
  HomePostBottom,
  HomePostContainer,
  HomePostLikes,
  HomePostListContainer,
  HomePostRight,
  HomePostSkillHeader,
  HomePostTag,
  HomePostTitle,
  HomePostTop,
  HomePostUser,
  HomePostUserName,
  HomePostUserWrap,
  Skill,
  SkillLogo,
  SkillText,
} from "./style";
import flutter from "../../../assets/logo/skill/flutter.svg";
import UserLogo from "../../../assets/logo/user.svg";
import PostLike from "../../../assets/logo/like.svg";
const HomePostList = () => {
  return (
    <>
      <HomePostListContainer>
        <HomePostSkillHeader>
          <Skill>
            <SkillLogo src={flutter} />
            <SkillText>flutter</SkillText>
          </Skill>
        </HomePostSkillHeader>
        <HomePostContainer>
          <HomePostTop>
            <HomePostTitle>제목</HomePostTitle>
            <HomePostTag>Flutter</HomePostTag>
          </HomePostTop>
          <HomePostBottom>
            <HomePostUserWrap>
              <HomePostUser src={UserLogo}></HomePostUser>
              <HomePostUserName>사람김</HomePostUserName>
            </HomePostUserWrap>
            {/* <HomePostRight>
              <HomePostLikes src={PostLike} />
            </HomePostRight> */}
          </HomePostBottom>
        </HomePostContainer>
      </HomePostListContainer>
    </>
  );
};

export default HomePostList;
