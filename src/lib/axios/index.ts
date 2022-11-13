import axios from "axios";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token/token.constant";

export const customAxios = axios.create({
  baseURL: "http://3.35.113.190:8080/",
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${localStorage.getItem(ACCESS_TOKEN_KEY)}`,
  },
});
