import axios from "axios";

export const customAxios = axios.create({
  baseURL: "http://52.55.240.35:8080/",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});
