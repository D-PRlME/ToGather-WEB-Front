import { Route, Routes as Switch } from "react-router-dom";
import EditPage from "../../pages/EditPage";
import HomePage from "../../pages/HomePage";
import LogInPage from "../../pages/LogInPage";
import MyPage from "../../pages/MyPage";
import PostsPage from "../../pages/PostsPage";
import PostComponent from "../posts";
import SearchPage from "../../pages/SearchPage";

const Router = () => {
  return (
    <Switch>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/edit" element={<EditPage />} />
      <Route path="/mypage/*" element={<MyPage />}></Route>
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Switch>
  );
};

export default Router;
