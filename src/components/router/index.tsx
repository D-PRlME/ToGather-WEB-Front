import { Route, Routes as Switch } from "react-router-dom";

// import EditPage from "../../pages/EditPage";
import HomePage from "../../pages/HomePage";
import SignupPage from "../../pages/SignupPage";
import LogInPage from "../../pages/LogInPage";
import MyPage from "../../pages/MyPage";
import SearchPage from "../../pages/SearchPage";
import CreatePage from "../../pages/CreatePage";
import EmailPage from "../signup/email/index";
import PostPage from "../../pages/PostPage";
import SignupCompelete from "../signup/compelete/index";
import PwChangeHome from "../PwChange/index";
import AfterPostComponent from "../PwChange/afterPost"
import PwChangeComponent from "../PwChange/pwchange/index"
// import EditPage from "../../pages/EditPage";
import React from "react";

const Router = () => {
  return (
    <Switch>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/email" element={<EmailPage />} />
      <Route path="/email/ok" element={<SignupCompelete />} />
      <Route path="/pwchange" element={<PwChangeHome />} />
      <Route path="/pwchange/ok" element={<AfterPostComponent/>}/>
      <Route path="/pwchange/change" element={<PwChangeComponent/>}/>
      {/* <Route path="/edit" element={<EditPage />} /> */}
      <Route path="/mypage/*" element={<MyPage />}></Route>
      <Route path="/create" element={<CreatePage />} />
      {/* <Route path="/edit/*" element={<EditPage />} /> */}
      {/*TODO : 라우터 하나로 통일해야함*/}
      <Route path="/posts/*" element={<PostPage />} />
      <Route path="/mypage/*" element={<MyPage />} />
      {/* <Route path="/posts/*" element={<PostsPage />} /> */}
      <Route path="/search" element={<SearchPage />} />
    </Switch>
  );
};

export default Router;
