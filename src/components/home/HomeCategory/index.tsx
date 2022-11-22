import React, { useEffect, useState } from "react";
import * as _ from "./style";
import Logo from "../../../assets/logo/logo.svg";
import HomeLogo from "../../../assets/logo/home";
import SearchLogo from "../../../assets/logo/search";
import PostLogo from "../../../assets/logo/post";
import ProfileLogo from "../../../assets/logo/profile";
import { Link, useLocation, useMatch } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { IUserProfile } from "../../../LocalTypes";

const HomeCategory = () => {
  const {pathname} = useLocation();
  const [GETuser, {data}] = useFetch("users")
  const [userData, setUserData] = useState<IUserProfile>()
  useEffect(() => {
    GETuser({
      method: "get"
    }).then((res) => {
      setUserData(data);
    })
  }, [pathname])
  return (
    <>
      {!userData && 
      <_.ModalContainer>
        <_.ModalBg/>
        <_.ModalWrapper>
          <div>
            <_.Text size={40} weight={700} style={{width:"252px"}} height={47.73}>글을 확인하려면 계정이 필요해요</_.Text>
            <_.Text size={24} weight={500} height={28.64} style={{width:"261px"}}>로그인하거나 계정을 만들어 팀을 찾아보세요</_.Text>
          </div>
          <div>
            <_.ModalBtn><Link to="/login"><_.Text weight={700} size={24}>로그인</_.Text></Link></_.ModalBtn>
            <_.ModalBtn bgColor="#E1AD01" style={{marginTop: "8px"}}><Link to="/signup"><_.Text weight={700} size={24}>계정만들기</_.Text></Link></_.ModalBtn>
          </div>
        </_.ModalWrapper>
        </_.ModalContainer>}
      <_.HomeCategoryContainer>
        <_.HomeLogoBlock>
          <_.HomePageLogo src={Logo}></_.HomePageLogo>
          <_.HomeText>ToGather</_.HomeText>
        </_.HomeLogoBlock>
        <Link to="/">
          <_.MenuBlock isHere={pathname === "/"}>
            <HomeLogo/>
            <_.MenuText>홈</_.MenuText>
          </_.MenuBlock>
        </Link>
        <Link to="/search">
          <_.MenuBlock isHere={pathname === "/search"}>
            <SearchLogo/>
            <_.MenuText>검색</_.MenuText>
          </_.MenuBlock>
        </Link>
        <Link to="/create">
          <_.MenuBlock isHere={pathname === "/create"}>
            <PostLogo/>
            <_.MenuText>글쓰기</_.MenuText>
          </_.MenuBlock>
        </Link>
        <Link to="/mypage/home">
          <_.ProfileBlock>
            <ProfileLogo/>
            <_.MenuText>나</_.MenuText>
          </_.ProfileBlock>
        </Link>
      </_.HomeCategoryContainer>
    </>
  );
};

export default HomeCategory;
