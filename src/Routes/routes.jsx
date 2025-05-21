import { createBrowserRouter } from "react-router";
import MainLayout from "../LayOuts/MainLayout";
import HomePage from "../Pages/HomePage";
import ExplorePage from "../Pages/ExplorePage";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import MyTipsPage from "../Pages/MyTipsPage";
import ShareTips from "../Pages/ShareTips";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoutes";
import BrowseTips from "../Pages/BrowseTips";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/",
        loader: ()=> fetch('http://localhost:3000/activeusers'),
        element: <HomePage></HomePage> },
      {
        path: "/explore",
        element: <ExplorePage></ExplorePage>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <SignUpPage></SignUpPage>,
      },
      {
        path: "/browsetips",
        element: <BrowseTips></BrowseTips>,
      },

      //   Private Routs
      {
        path: "/auth/sharetips",
        element: (
          <PrivateRoute>
            <ShareTips />
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/mytips",
        element: (
          <PrivateRoute>
            <MyTipsPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
