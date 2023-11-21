import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import About from "./pages/About/About";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";

import ProfileDash from "./pages/ProfileDash";

import AllListings from "./pages/PropertyListing/AllListings";
import Page404 from "./components/Page404";

import ContactUs from "./pages/ContactUs/ContactUs";
import Blog from "./pages/News/Blog";
import AddListing from "./pages/Profile/listing/AddListing";
import CreateListing from "./pages/Profile/listing/CreateListing";
import UpdateListing from "./pages/Profile/listing/UpdateListing";
import EditListing from "./pages/Profile/listing/crud/EditListing";
import Listing from "./pages/Profile/listing/Listing";
import ForSale from "./pages/Profile/listing/ForSale";
import ForRent from "./pages/Profile/listing/ForRent";

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
      path: "/news",
      element: <Blog />,
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
      path: "/contactus",
      element: <ContactUs />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
