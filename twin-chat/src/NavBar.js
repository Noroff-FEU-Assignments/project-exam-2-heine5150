import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "./context/AuthContext";

export default function NavBar() {
  const [auth, setAuth] = useContext(AuthContext);

  const history = useNavigate();

  function logout() {
    setAuth(null);
    history.push("/");
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/register">Register</Link>
        </li>
        {auth ? (
          <>
            |{" "}
            <li>
              <Link to="/myprofile">Profile</Link>
            </li>{" "}
            | <button onClick={logout}>Log out</button>
          </>
        ) : (
          <Link to="/login"></Link>
        )}
      </ul>
    </nav>
  );
}
