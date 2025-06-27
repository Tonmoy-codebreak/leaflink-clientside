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
import DashBoardLayout from "../LayOuts/DashBoardLayout";
import Statistics from "../Pages/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://leaflink-app-server.vercel.app/activeusers"),
        element: <HomePage />,
      },
      {
        path: "/explore",
        loader: () => fetch("https://leaflink-app-server.vercel.app/tip-users"),
        element: <ExplorePage />,
      },
      {
        path: "/browsetips",
        loader: () =>
          fetch("https://leaflink-app-server.vercel.app/publictips"),
        element: <BrowseTips />,
      },
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
        element: (
          <PrivateRoute>
            <TipsDetailPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/updatetip/:id",
        element: (
          <PrivateRoute>
            <UpdateTip />
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/dashboard",
        element: (
          <PrivateRoute>
            <DashBoardLayout />
          </PrivateRoute>
        ),
        children: [
          { index: true, element: <Statistics /> },

          // Use BrowseTips with loader for "alltips"
          {
            path: "alltips",
            loader: () =>
              fetch("https://leaflink-app-server.vercel.app/publictips"),
            element: <BrowseTips />,
          },

          {
            path: "mytips",
            element: <MyTipsPage />,
          },

          // Use ShareTips for "addtips"
          {
            path: "addtips",
            element: <ShareTips />,
          },

          // Use ExplorePage with loader for "contributors"
          {
            path: "contributors",
            loader: () =>
              fetch("https://leaflink-app-server.vercel.app/tip-users"),
            element: <ExplorePage />,
          },
        ],
      },
    ],
  },
  {
    path: "/user",
    element: <UserEntryLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <SignUpPage /> },
    ],
  },
]);

export default router;
