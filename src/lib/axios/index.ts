import axios from "axios";

// import {
//   ACCESS_TOKEN_KEY,
//   REQUEST_TOKEN_KEY,
// } from "../../constants/token/token.constant";

export const customAxios = axios.create({
  baseURL: "http://52.55.240.35:8080/",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("access_token"),
  },
});
