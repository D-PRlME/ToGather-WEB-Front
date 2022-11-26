import { HomeContainer } from "../components/home/style";
import HomeCategory from "../components/home/HomeCategory";
import DeleteUserComponent from "../components/DeleteUser";
import React from "react";

function DeleteUserPage() {
  return (
    <HomeContainer>
      <DeleteUserComponent />
    </HomeContainer>
  );
}

export default DeleteUserPage;
