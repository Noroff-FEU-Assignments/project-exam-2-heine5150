import ProfilesList from "../components/ProfilesList";
import LoaderIndicator from "../common/LoaderIndicator";
import { useState, useEffect, useContext } from "react";
import { BASE_URL, PROFILE_URL } from "../constants/api";
import { AuthContext } from "../context/AuthContext";
import { Container } from "@mui/material";
import { BackButton } from "../common/BackButton";

const url = BASE_URL + PROFILE_URL;

export default function ProfilesPage() {
  const { auth } = useContext(AuthContext);
  const { accessToken } = auth;
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      if (!auth) {
        throw new Error("No auth token found in localStorage");
      }
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setProfiles(data);
          setLoading(false);
        })
        .catch((error) => console.log(error.message));
    } catch (e) {
      console.log(e.message);
    }
  }, [auth]);

  return (
    <Container maxWidth="lg">
      <BackButton />
      {loading ? <LoaderIndicator /> : <ProfilesList profiles={profiles} />}
    </Container>
  );
}
