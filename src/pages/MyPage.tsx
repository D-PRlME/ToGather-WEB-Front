import { Route, Routes } from "react-router-dom";
import HomeCategory from "../components/home/HomeCategory";
import { HomeContainer } from "../components/home/style";
import MyPageComponent from "../components/myPage";
import MyPostsComponent from "../components/myPage/myPosts";
import ProfileEditComponent from "../components/myPage/profileEdit";
import DeleteUserPage from "./DeleteUserPage";

function MyPage() {
  return (
    <HomeContainer>
      <HomeCategory />
      <Routes>
        <Route path="home" element={<MyPageComponent />} />
        <Route path="posts" element={<MyPostsComponent />} />
        <Route path="profileEdit" element={<ProfileEditComponent />} />
        <Route path="delete" element={<DeleteUserPage/>}/>
      </Routes>
    </HomeContainer>
  );
}

export default MyPage;
