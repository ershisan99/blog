import axios from "axios";
import { Post } from "@/services/jsonplaceholder/types";

export const getPlaceholderPosts = () => {
  return axios
    .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);
};

export const getPlaceholderError = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/error/501")
    .then((res) => res.data);
};
