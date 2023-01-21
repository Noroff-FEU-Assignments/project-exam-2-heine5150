import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import PostsPage from "../../pages/PostsPage";
import SinglePostPage from "../../pages/SinglePostPage";
import UpdatePost from "../forms/UpdatePostForm";
import ProfilePage from "../../pages/ProfilePage";
import ProfilesPage from "../../pages/ProfilesPage";
import RegisterPage from "../../pages/RegisterPage";
import Header from "../header/Header";
import LandingPage from "../../pages/LandingPage";
import CreatePost from "../../pages/CreatePost";
import { AuthProvider } from "../../context/AuthContext";

export default function Layout() {
  return (
    <AuthProvider>
      <Header />
      <Router>
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
          <Route path="/postspage">
            <PostsPage />
          </Route>
          <Route path="/singlepostpage/:id">
            <SinglePostPage />
          </Route>
          <Route path="/loginpage">
            <LoginPage />
          </Route>
          <Route path="/registerpage">
            <RegisterPage />
          </Route>
          <Route path="/updatepost">
            <UpdatePost />
          </Route>
          <Route path="/createpost">
            <CreatePost />
          </Route>
          <Route path="/profilepage">
            <ProfilePage />
          </Route>
          <Route path="/profilespage/:id">
            <ProfilesPage />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

// export default function Layout() {
//   return (
//     <>
//       <Header />
//       <Router>
//         <Route path="/landingpage" element={<LandingPage />} />
//         <Route path="/postspage" element={<PostsPage />} />
//         <Route path="/singlepostpage:id" element={<SinglePostPage />} />
//         <Route path="/loginpage" element={<LoginPage />} />
//         <Route path="/registerpage" element={<RegisterPage />} />
//         <Route path="/updatepost" element={<UpdatePost />} />
//         <Route path="/createpost" element={<CreatePost />} />
//         <Route path="/profilepage" element={<ProfilePage />} />
//         <Route path="/profilespage:id" element={<ProfilesPage />} />
//       </Router>
//     </>
//   );
// }
