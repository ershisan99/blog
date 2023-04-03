import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BlogApi } from "@/services/blog/index";
import { blogInstance } from "@/services/blog/instance";
import { noRefetch } from "@/helpers";
import { useRouter } from "next/router";

export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  const { push } = useRouter();
  return useMutation({
    mutationFn: BlogApi.login,
    onSuccess: (res) => {
      const token = res.data.token;
      localStorage.setItem("jwt", token);
      blogInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      queryClient.invalidateQueries(["me"]);
      push("/");
    },
  });
};

export const useMeQuery = () => {
  return useQuery({
    queryFn: BlogApi.me,
    queryKey: ["me"],
    retry: false,
    ...noRefetch,
  });
};
