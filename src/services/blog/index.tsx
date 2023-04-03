import { blogInstance } from "@/services/blog/instance";

export const BlogApi = {
  login: ({ email, password }: { email: string; password: string }) => {
    return blogInstance.post("/users/login", {
      email,
      password,
    });
  },
  me: () => {
    return blogInstance.get("/users/me");
  },
};
