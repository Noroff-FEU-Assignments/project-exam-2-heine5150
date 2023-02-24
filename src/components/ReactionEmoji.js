// import { useContext } from "react";
// import { BASE_URL, POSTS_URL } from "../constants/api";
// import { AuthContext } from "../context/AuthContext";
// import { Button } from "@mui/material";

// const url = BASE_URL + POSTS_URL;
// const emoji = "❤️";

// export default function ReactionEmoji({ postId }) {
//   const { auth } = useContext(AuthContext);
//   const { accessToken } = auth;

//   const addLike = async () => {
//     try {
//       const response = await fetch(`${url}/${postId}/react/${emoji}`, {
//         method: "PUT",
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
//       if (!response.ok) {
//         throw new Error(`Error ${response.status}`);
//       }
//       const data = await response.json();
//       console.log("Received data", data);
//       this.setState({});
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Button variant="outlined" onClick={addLike}>
//       Like ❤️
//     </Button>
//   );
// }

import { useContext, useState } from "react";
import { BASE_URL, POSTS_URL } from "../constants/api";
import { AuthContext } from "../context/AuthContext";
import { Button } from "@mui/material";

const url = BASE_URL + POSTS_URL;
const emoji = "❤️";

export default function ReactionEmoji({ postId }) {
  const { auth } = useContext(AuthContext);
  const { accessToken } = auth;
  const [refresh, setRefresh] = useState(false);

  const addLike = async () => {
    try {
      const response = await fetch(`${url}/${postId}/react/${emoji}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }
      const data = await response.json();
      console.log("Received data", data);
      setRefresh(!refresh);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button variant="outlined" onClick={addLike}>
      Like ❤️
    </Button>
  );
}
