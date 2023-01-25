import PostsList from "../components/PostsList";
import articles from "./article-content";

export default function PostsPage() {
  return (
    <>
      <h1>Posts</h1>
      <PostsList articles={articles} />
    </>
  );
}
