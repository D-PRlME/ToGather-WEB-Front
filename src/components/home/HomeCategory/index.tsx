import React from "react";
import {
  HomeCategoryContainer,
  HomeLogoBlock,
  HomePageLogo,
  HomeText,
  MenuBlock,
  MenuLogo,
  MenuText,
  ProfileBlock,
} from "./style";
import Logo from "../../../assets/logo/logo.svg";
import HomeLogo from "../../../assets/logo/home.svg";
import SearchLogo from "../../../assets/logo/search.svg";
import PostLogo from "../../../assets/logo/post.svg";
import ProfileLogo from "../../../assets/logo/profile.svg";

const HomeCategory = () => {
  return (
    <HomeCategoryContainer>
      <HomeLogoBlock>
        <HomePageLogo src={Logo}></HomePageLogo>
        <HomeText>ToGather</HomeText>
      </HomeLogoBlock>
      <MenuBlock>
        <MenuLogo src={HomeLogo} />
        <MenuText>홈</MenuText>
      </MenuBlock>
      <MenuBlock>
        <MenuLogo src={SearchLogo} />
        <MenuText>검색</MenuText>
      </MenuBlock>
      <MenuBlock>
        <MenuLogo src={PostLogo} />
        <MenuText>글쓰기</MenuText>
      </MenuBlock>
      <ProfileBlock>
        <MenuLogo src={ProfileLogo} />
        <MenuText>나</MenuText>
      </ProfileBlock>
    </HomeCategoryContainer>
  );
};

export default HomeCategory;
