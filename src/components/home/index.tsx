import HomeCategory from "./HomeCategory";
import HomePostList from "./HomePostList";
import { HomeContainer } from "./style";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeCategory />
        <HomePostList />
      </HomeContainer>
    </>
  );
};

export default Home;
