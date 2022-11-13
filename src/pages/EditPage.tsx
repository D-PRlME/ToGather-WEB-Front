import EditComponent from "../components/Edit";
import HomeCategory from "../components/home/HomeCategory";
import { HomeContainer } from "../components/home/style";

function EditPage() {
  return (
    <HomeContainer>
      <HomeCategory />
      <EditComponent />
    </HomeContainer>
  );
}

export default EditPage;
