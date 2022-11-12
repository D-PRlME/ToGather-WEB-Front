import { HomeContainer } from "../components/home/style";
import HomeCategory from "../components/home/HomeCategory";
import DeleteUserComponent from "../components/DeleteUser";

function DeleteUserPage(){
  return (
    <HomeContainer>
      <DeleteUserComponent/>
    </HomeContainer>
  );
}

export default DeleteUserPage;