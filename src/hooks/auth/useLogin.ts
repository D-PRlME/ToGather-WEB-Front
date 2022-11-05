import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { customAxios } from "../../lib/axios";

const useLogin = () => {
  const [loginData, setLoginData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChangeLoginData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitLogin = async () => {
    try {
      const { data } = await customAxios.post("/users/auth", {
        email: loginData.email,
        password: loginData.password,
      });
      localStorage.setItem("access_token", data.access_token);
      navigate("/");
    } catch (error) {}
  };

  return { loginData, onChangeLoginData, onSubmitLogin };
};

export default useLogin;
