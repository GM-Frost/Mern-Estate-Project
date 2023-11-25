import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Authentication/SignIn";
import About from "./pages/About/About";
import SignUp from "./pages/Authentication/SignUp";
import ProfileDash from "./pages/Profile/dashboard/ProfileDash";
import PrivateRoute from "./components/PrivateRoute";

import AllListings from "./pages/PropertyListing/AllListings";

import ContactUs from "./pages/ContactUs/ContactUs";
import Blog from "./pages/News/Blog";
import AddListing from "./pages/Profile/listing/AddListing";

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
