import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/listing/CreateListing";
import UpdateListing from "./pages/listing/UpdateListing";
import Listing from "./pages/Listing";
import ProfileDash from "./pages/ProfileDash";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/profile",
      element: (
        <PrivateRoute>
          <ProfileDash />
        </PrivateRoute>
      ),
    },
    // {
    //   path: "/profile",
    //   element: (
    //     <PrivateRoute>
    //       <Profile />
    //     </PrivateRoute>
    //   ),
    // },
    {
      path: "/create-listing",
      element: (
        <PrivateRoute>
          <CreateListing />
        </PrivateRoute>
      ),
    },
    {
      path: "/update-listing/:listingId",
      element: (
        <PrivateRoute>
          <UpdateListing />
        </PrivateRoute>
      ),
    },
    {
      path: "/listing/:listingId",
      element: <Listing />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
