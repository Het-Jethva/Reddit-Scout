import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { postsState } from "../state";
import PostCard from "./PostCard";

const PostList = () => {
  const posts = useRecoilValue(postsState);

  const renderedPosts = useMemo(() => {
    return posts.map((post, index) => <PostCard key={index} post={post} />);
  }, [posts]);

  return (
    <div className="mt-8">
      {posts.length > 0 ? (
        <div>{renderedPosts}</div>
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
};

export default PostList;
