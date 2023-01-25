import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
// import CommentsList from "../components/CommentsList";
import articles from "./article-content";
import { BASE_URL } from "../constants/api";

export default function SinglePostPage() {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTQwLCJuYW1lIjoiaGVpbmU1MTUwIiwiZW1haWwiOiJoZWlndW43MzE5M0BzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6IiIsImJhbm5lciI6IiIsImlhdCI6MTY3NDQ3ODk0Nn0.1mchbHlMNzoGIDgKPtBKdVXDkpJC37iJyp8PKQtU5L8",
      },
    };
    const loadPosts = async () => {
      axios
        .get(`${BASE_URL}/api/v1/social/posts`, options)
        .then((response) => {
          const data = response.data;
          console.log(data);
          setArticleInfo({
            data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    loadPosts();
  }, []);

  const { postId } = useParams();
  const post = articles.find((article) => article.name === postId);

  if (!post) {
    return <NotFoundPage />;
  }
  return (
    <>
      <h1>{post.title}</h1>
      <p>This article has {articleInfo.upvotes} upvote(s)</p>
      {post.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      {/* <CommentsList comments={comments} /> */}
    </>
  );
}
