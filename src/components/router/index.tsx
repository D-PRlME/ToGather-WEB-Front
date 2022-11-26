import { Route, Routes as Switch } from "react-router-dom";

import PostsPage from "../../pages/PostPage";
import HomePage from "../../pages/HomePage";
import SignUpPage from "../../pages/SignupPage";
import LogInPage from "../../pages/LogInPage";
import MyPage from "../../pages/MyPage";
import SearchPage from "../../pages/SearchPage";
import CreatePage from "../../pages/CreatePage";
import EditPage from "../../pages/EditPage";
import React from "react";
import AuthMailPage from "../../pages/AuthMailPage";

const Router = () => {
  return (
    <Switch>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/auth" element={<AuthMailPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/edit" element={<EditPage />} />
      <Route path="/mypage/*" element={<MyPage />}></Route>
      <Route path="/create" element={<CreatePage />} />
      <Route path="/edit/*" element={<EditPage />} />
      {/*TODO : 라우터 하나로 통일해야함*/}
      <Route path="/mypage/*" element={<MyPage />} />
      <Route path="/posts/*" element={<PostsPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Switch>
  );
};

export default Router;
