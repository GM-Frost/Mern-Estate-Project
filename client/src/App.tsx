import "./global.css";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import SignUp from "./pages/SignUp";

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
  ]);

  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/sign-in" element={<SignIn />} />
    //     <Route path="/sign-up" element={<SignUp />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/profile" element={<Profile />} />
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
}

export default App;
