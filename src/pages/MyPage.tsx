import { Route, Routes } from "react-router-dom";
import HomeCategory from "../components/home/HomeCategory";
import { HomeContainer } from "../components/home/style";
import MyPageComponent from "../components/myPage";
import MyPostsComponent from "../components/myPage/MyPosts";

function MyPage() {
  return (
    <HomeContainer>
      <HomeCategory />
      <Routes>
        <Route path="home" element={<MyPageComponent />} />
        <Route path="posts" element={<MyPostsComponent />} />
      </Routes>
    </HomeContainer>
  );
}

export default MyPage;
