import { Route, Routes as Switch } from "react-router-dom";
// import AuthPage from "../../pages/AuthPage";
import HomePage from "../../pages/HomePage";
import LogInPage from "../../pages/LogInPage";
// import MyPage from "../../pages/MyPage";
// import PasswordChangePage from "../../pages/PasswordChangePage";
import SignupPage from "../../pages/SignupPage";
import SignupCompelete from "../signup/compelete";

const Router = () => {
  return (
    <Switch>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LogInPage />} />
      {/* <Route path="/mypage" element={<MyPage />} /> */}
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signup/compelete" element={<SignupCompelete />} />
      {/* <Route path="/auth" element={<AuthPage />} /> */}
      {/* <Route path="/passwordchange" element={<PasswordChangePage />} /> */}
    </Switch>
  );
};

export default Router;
