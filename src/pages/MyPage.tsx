import HomeCategory from "../components/home/HomeCategory";
import { HomeContainer } from "../components/home/style";
import MyPageComponent from "../components/myPage";

function MyPage() {
  return (
    <HomeContainer>
      <HomeCategory />
      <MyPageComponent />
    </HomeContainer>
  );
}

export default MyPage;
