import axios from "axios";
import { env } from "process";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token/token.constant";

export const customAxios = axios.create({
  baseURL: "http://52.55.240.35:8080/",
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${localStorage.getItem(ACCESS_TOKEN_KEY)}`,
  },
});
