import { Link } from "react-router-dom";

export default function PostsList({ articles }) {
  return (
    <>
      {articles.map((article) => (
        <Link
          key={article.name}
          className="article-list-item"
          to={`/posts/${article.name}`}
        >
          <h3>{article.title}</h3>
          <p>{article.content[0].substring(0, 180)}...</p>
        </Link>
      ))}
    </>
  );
}
