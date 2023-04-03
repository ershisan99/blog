import axios from "axios";

export const blogInstance = axios.create({
  baseURL: "http://localhost:5274/v1",
});
