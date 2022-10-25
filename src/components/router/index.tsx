import { Route, Routes as Switch } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import LogInPage from "../../pages/LogInPage";

const Router = () => {
  return (
    <Switch>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LogInPage />} />
    </Switch>
  );
};

export default Router;
