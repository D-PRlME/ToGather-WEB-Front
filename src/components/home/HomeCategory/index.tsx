import React from "react";
import * as _ from "./style";
import Logo from "../../../assets/logo/logo.svg";
import HomeLogo from "../../../assets/logo/home.svg";
import SearchLogo from "../../../assets/logo/search.svg";
import PostLogo from "../../../assets/logo/post.svg";
import ProfileLogo from "../../../assets/logo/profile.svg";
import { Link } from "react-router-dom";

const HomeCategory = () => {
  return (
    <_.HomeCategoryContainer>
      <_.HomeLogoBlock>
        <_.HomePageLogo src={Logo}></_.HomePageLogo>
        <_.HomeText>ToGather</_.HomeText>
      </_.HomeLogoBlock>
      <Link to="/">
        <_.MenuBlock>
          <_.MenuLogo src={HomeLogo} />
          <_.MenuText>홈</_.MenuText>
        </_.MenuBlock>
      </Link>
      <Link to="/search">
        <_.MenuBlock>
          <_.MenuLogo src={SearchLogo} />
          <_.MenuText>검색</_.MenuText>
        </_.MenuBlock>
      </Link>
      <Link to="/create">
        <_.MenuBlock>
          <_.MenuLogo src={PostLogo} />
          <_.MenuText>글쓰기</_.MenuText>
        </_.MenuBlock>
      </Link>
      <Link to="/mypage/home">
        <_.ProfileBlock>
          <_.MenuLogo src={ProfileLogo} />
          <_.MenuText>나</_.MenuText>
        </_.ProfileBlock>
      </Link>
    </_.HomeCategoryContainer>
  );
};

export default HomeCategory;
