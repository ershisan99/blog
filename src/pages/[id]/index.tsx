import Link from "next/link";
import { useRouter } from "next/router";
import { usePlaceholderPosts } from "@/services/jsonplaceholder/hooks";
import { useMeQuery } from "@/services/blog/hoooks";

const PostPage = () => {
  const { data } = useMeQuery();
  const router = useRouter();
  const { posts, isLoading, isError, error } = usePlaceholderPosts();
  const queryId = router.query.id;
  const id = !!queryId && !Array.isArray(queryId) && parseInt(queryId);

  if (!posts) return null;

  const post = posts.find((post) => post.id === id);
  if (!post) return <div>post not found!</div>;
  return (
    <div>
      HELLO {data?.data.user?.username}x§x§
      <Link href={"/"} className={"text-2xl font-bold"}>
        HOME
      </Link>
      <div>{post.title}</div>
    </div>
  );
};

export default PostPage;
