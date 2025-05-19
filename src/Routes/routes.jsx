import { createBrowserRouter } from "react-router";
import MainLayout from "../LayOuts/MainLayout";
import HomePage from "../Pages/HomePage";
import ExplorePage from "../Pages/ExplorePage";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import MyTipsPage from "../Pages/MyTipsPage";
import ShareTips from "../Pages/ShareTips";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <HomePage></HomePage> },
      {
        path: "/explore",
        element: <ExplorePage></ExplorePage>,
      },
      {
        path: "/login",
        element:<LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element:<SignUpPage></SignUpPage>,
      },

    //   Private Routs

      {
        path: "/auth/mytips",
        element:<MyTipsPage></MyTipsPage>
      },
    {
        path: "/auth/sharetips",
        element:<ShareTips></ShareTips>
      },
   
    ],
  },
]);

export default router;
