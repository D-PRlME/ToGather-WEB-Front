import { HomeContainer } from "../components/home/style";
import HomeCategory from "../components/home/HomeCategory";
import PostComponent from "../components/posts";

function PostPage(){
  return (
    <HomeContainer>
      <HomeCategory/>
      <PostComponent/>
    </HomeContainer>
  )
}

export default PostPage;