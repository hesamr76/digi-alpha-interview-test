import axios from "axios";

const Axios = axios.create({
  baseURL: "https://jsonplaceholder.ir"
});

export const users = () => {
  return Axios.get("users");
};
