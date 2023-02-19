import { useContext } from "react";
import { BASE_URL, POSTS_URL } from "../constants/api";
import { AuthContext } from "../context/AuthContext";
import { Button } from "@mui/material";

const url = BASE_URL + POSTS_URL;
const emoji = "❤️";

export default function ReactionEmoji({ postId }) {
  const { auth } = useContext(AuthContext);
  const { accessToken } = auth;

  const addLike = () => {
    fetch(`${url}/${postId}/react/${emoji}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        console.log("Received response", response);
        if (!response.ok) {
          throw new Error(`Error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Received data", data);
        window.location.reload();
      })
      .catch((error) => console.error(error));
  };

  return (
    <Button variant="outlined" onClick={addLike}>
      Like ❤️
    </Button>
  );
}
