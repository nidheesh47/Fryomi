import { createBrowserRouter } from "react-router-dom";

import UserLayout from "../layout/UserLayout";

import ErrorPage from "../components/shared/ErrorPage";

import HomePage from "../components/user/HomePage";
import CartPage from "../components/user/CartPage";
import AboutPage from "../components/shared/AboutPage";
import SignUpPage from "../components/shared/SignUpPage";
import LoginPage from "../components/shared/LoginPage";
import AllRestaurantsPage from "../components/restaurant/AllRestaurantsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/all-restaurant",
        element: <AllRestaurantsPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;