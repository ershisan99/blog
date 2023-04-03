import { Inter } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
import { getPlaceholderPosts } from "@/services/jsonplaceholder";
import axios from "axios";
import { noRefetch } from "@/helpers";
import Link from "next/link";
import { usePlaceholderPosts } from "@/services/jsonplaceholder/hooks";
import { useMeQuery } from "@/services/blog/hoooks";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { posts, isLoading, isError, error } = usePlaceholderPosts();
  const { data } = useMeQuery();
  console.log({ posts, isLoading, isError, error });

  console.error(
    (error &&
      axios.isAxiosError(error) &&
      "message" in error &&
      error?.message) ||
      "shit happened"
  );

  if (isLoading) return <div className={"bg-blue-500"}>Loading...</div>;
  if (isError) return <div className={"bg-blue-500"}>Error</div>;
  if (!posts) return null;
  return (
    <div className={"flex flex-col gap-4"}>
      HELLO {data?.data.user?.username}
      {posts.map((post) => {
        return (
          <Link
            href={`/${post.id}`}
            key={post.id}
            className={"text-blue-400 underline"}
          >
            {post.id} {post.title}
          </Link>
        );
      })}
    </div>
  );
}
