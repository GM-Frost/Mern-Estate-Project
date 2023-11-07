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
import Listing from "./pages/listing/Listing";
import ProfileDash from "./pages/ProfileDash";
import AddListing from "./pages/listing/AddListing";
import ForSale from "./pages/listing/ForSale";
import ForRent from "./pages/listing/ForRent";
import AllListings from "./pages/AllListings";
import Page404 from "./components/Page404";
import EditListing from "./pages/listing/crud/EditListing";

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
      path: "/profileold",
      element: (
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      ),
    },
    {
      path: "/profile",
      element: (
        <PrivateRoute>
          <ProfileDash />
        </PrivateRoute>
      ),
    },
    {
      path: "/profile/addlisting",
      element: (
        <PrivateRoute>
          <AddListing />
        </PrivateRoute>
      ),
    },
    {
      path: "/profile/addlisting/forsale",
      element: (
        <PrivateRoute>
          <ForSale />
        </PrivateRoute>
      ),
    },
    {
      path: "/profile/addlisting/forrent",
      element: (
        <PrivateRoute>
          <ForRent />
        </PrivateRoute>
      ),
    },
    {
      path: "/listings",
      element: <AllListings />,
    },
    {
      path: "/create-listing",
      element: (
        <PrivateRoute>
          <CreateListing />
        </PrivateRoute>
      ),
    },
    {
      path: "/updateListing/:listingId",
      element: (
        <PrivateRoute>
          <UpdateListing />
        </PrivateRoute>
      ),
    },
    {
      path: "/update-listing/:listingId",
      element: (
        <PrivateRoute>
          <EditListing />
        </PrivateRoute>
      ),
    },
    {
      path: "/listing/:listingId",
      element: <Listing />,
    },
    {
      path: "*",
      element: <Page404 />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
