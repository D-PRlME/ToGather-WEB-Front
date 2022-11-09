import { Route, Routes as Switch } from "react-router-dom";
import EditPage from "../../pages/EditPage";
import HomePage from "../../pages/HomePage";
import LogInPage from "../../pages/LogInPage";
import MyPage from "../../pages/MyPage";
import PostsPage from "../../pages/PostPage";
import SearchPage from "../../pages/SearchPage";
import Token from "../../lib/token";


const Router = () => {
  Token.setToken('token', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYW5namlzb3VuZ0Bkc20uaHMua3IiLCJ0eXAiOiJhY2Nlc3MiLCJleHAiOjE2Njc5NjQ5MTEsImlhdCI6MTY2Nzk2MTMxMX0.uUko4PYsOuzUE8pT4KNYl5L28rWRQF5_WBZ01YvZGtk')
  return (
    <Switch>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/edit" element={<EditPage />} />
      <Route path="/mypage/*" element={<MyPage />}></Route>
      <Route path="/posts/*" element={<PostsPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Switch>
  );
};

export default Router;
