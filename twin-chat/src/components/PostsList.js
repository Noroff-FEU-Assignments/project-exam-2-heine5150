import { Link } from "react-router-dom";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import Header from "../components/Header";
import "../App.css";

export default function PostsList({ posts }) {
  return (
    <>
      {posts &&
        posts.map((post) => (
          <Link
            key={post.id}
            to={`/posts/${post.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "40px",
                margin: "10px 0",
              }}
            >
              <Box sx={{ width: "100px" }}>
                <Avatar alt="avatar" src={post.author.avatar} />
                <Header subtitle2={post.author.name} />
              </Box>
              <Box sx={{ width: "400px" }}>
                <Card className="card">
                  <CardContent
                    sx={{ wordWrap: "break-word", bgcolor: "background.main" }}
                  >
                    <Header subtitle1={post.title} />
                    <Typography variant="body2">
                      {post.body && post.body.substring(0, 120)}...
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Link>
        ))}
    </>
  );
}
