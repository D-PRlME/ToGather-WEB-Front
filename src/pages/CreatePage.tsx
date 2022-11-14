import { HomeContainer } from "../components/home/style";
import HomeCategory from "../components/home/HomeCategory";
import CreateComponent from "../components/Edit";

function CreatePage(){
  return (
    <HomeContainer>
      <HomeCategory/>
      <CreateComponent/>
    </HomeContainer>
  )
}

export default CreatePage;