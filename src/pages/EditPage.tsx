import { HomeContainer } from "../components/home/style";
import HomeCategory from "../components/home/HomeCategory";
import EditComponent from "../components/Edit/Edit";

function EidtPage(){
  return (
    <HomeContainer>
      <HomeCategory/>
      <EditComponent/>
    </HomeContainer>
  )
}

export default EidtPage;