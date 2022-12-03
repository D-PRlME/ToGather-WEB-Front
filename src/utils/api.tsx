import axios from "axios";

const API = axios.create({
  baseURL: "http://52.55.240.35:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
