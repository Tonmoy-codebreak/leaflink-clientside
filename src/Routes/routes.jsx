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
import TipsDetailPage from "../Pages/TipsDetailPage";
import UpdateTip from "../Pages/UpdateTip";
import UserEntryLayout from "../LayOuts/UserEntryLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/",
        loader: ()=> fetch('https://leaflink-app-server.vercel.app/activeusers'),
        element: <HomePage></HomePage> },
      {
        path: "/explore",
        loader: ()=> fetch('https://leaflink-app-server.vercel.app/allusers'),
        element: <ExplorePage></ExplorePage>,
      },
      // {
      //   path: "/login",
      //   element: <LoginPage></LoginPage>,
      // },
      // {
      //   path: "/register",
      //   element: <SignUpPage></SignUpPage>,
      // },
      {
        path: "/browsetips",
        loader: ()=> fetch('https://leaflink-app-server.vercel.app/publictips'),
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
      {
        path: "/auth/tipsDetails/:id",
        errorElement: <ErrorPage></ErrorPage>,
        element: (
          <PrivateRoute>
            <TipsDetailPage/>
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/updatetip/:id",
        errorElement: <ErrorPage></ErrorPage>,
        element: (
          <PrivateRoute>
            <UpdateTip></UpdateTip>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/user",
    element: <UserEntryLayout></UserEntryLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/user/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/user/register",
        element: <SignUpPage></SignUpPage>,
      },
    ]
  }
   
]);

export default router;
