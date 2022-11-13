import React from "react";
import * as _ from "./style";
import flutter from "../../../assets/logo/skill/flutter.svg";
import UserLogo from "../../../assets/logo/user.svg";
import PostLike from "../../../assets/logo/like.svg";
const HomePostList = () => {
  return (
    <>
      <_.HomePostListContainer>
        <_.HomePostSkillHeader>
          <_.Skill>
            <_.SkillLogo src={flutter} />
            <_.SkillText>flutter</_.SkillText>
          </_.Skill>
        </_.HomePostSkillHeader>
        <_.HomePostContainer>
          <_.HomePostTop>
            <_.HomePostTitle>제목</_.HomePostTitle>
            <_.HomePostTag>Flutter</_.HomePostTag>
          </_.HomePostTop>
          <_.HomePostBottom>
            <_.HomePostUserWrap>
              <_.HomePostUser src={UserLogo}></_.HomePostUser>
              <_.HomePostUserName>사람김</_.HomePostUserName>
            </_.HomePostUserWrap>
            {/* <HomePostRight>
              <HomePostLikes src={PostLike} />
            </HomePostRight> */}
          </_.HomePostBottom>
        </_.HomePostContainer>
      </_.HomePostListContainer>
    </>
  );
};

export default HomePostList;
