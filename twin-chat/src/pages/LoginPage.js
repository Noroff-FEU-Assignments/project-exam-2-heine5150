import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { BASE_URL, LOGIN_URL } from "../constants/api";

const url = BASE_URL + LOGIN_URL;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const schema = yup.object().shape({
    email: yup.string().required("Please enter your email"),
    password: yup.string().required("Please enter your password"),
  });

  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const logIn = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const json = await response.json();
        const user = {
          name: json.name,
          email: json.email,
          avatar: json.avatar,
          accessToken: json.accessToken,
        };
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user);
        navigate("/posts");
      } else {
        setError("An error occurred while logging in, please try again later");
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <form>
      <h1>Log In</h1>
      {error && <p className="error">{error}</p>}
      <input
        placeholder="Your email adress"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        ref={emailRef}
      />
      <input
        type="password"
        placeholder="Your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        ref={passwordRef}
      />
      <button onClick={logIn}>Log In</button>
      <Link to="/register">Not registered? Do it here!</Link>
    </form>
  );
}
