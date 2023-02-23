import { Link } from "react-router-dom";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import Header from "../components/Header";
import { useTheme } from "@mui/material/styles";

export default function PostsList({ posts }) {
  const theme = useTheme();

  return (
    <>
      {posts &&
        posts.map((post) => (
          <Link
            key={post.id}
            to={`/posts/${post.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
                alignItems: {
                  xs: "flex.start",
                  md: "center",
                },
                gap: {
                  xs: 0,
                  md: "40px",
                },
                margin: "10px 0",
                padding: "5px",
                border: "2px solid #f06292",
                ":hover": {
                  boxShadow: 10,
                },
                bgcolor: "background.main",
              }}
            >
              <Box sx={{ width: "100px", border: "2px solid hotpink" }}>
                <Avatar alt="avatar" src={post.author.avatar} />
                <Header subtitle2={post.author.name} />
              </Box>
              <CardContent
                sx={{
                  width: "400px",
                  mt: {
                    xs: "20px",
                    md: "0",
                  },
                  ml: {
                    xs: "0",
                    md: "20px",
                  },
                  wordWrap: "break-word",
                  border: "2px solid blue",
                }}
              >
                <Header subtitle1={post.title} />
                <Typography variant="body1">
                  {post.body && post.body.substring(0, 120)}...
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
    </>
  );
}
