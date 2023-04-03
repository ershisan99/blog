import { getPlaceholderPosts } from "@/services/jsonplaceholder";
import { noRefetch } from "@/helpers";
import { useQuery } from "@tanstack/react-query";

export const usePlaceholderPosts = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["posts"],
    queryFn: getPlaceholderPosts,
    retry: false,
    ...noRefetch,
  });

  const modifiedData = data?.map((post) => ({
    ...post,
    content: post.body,
  }));

  return { posts: data, newData: modifiedData, ...rest };
};
