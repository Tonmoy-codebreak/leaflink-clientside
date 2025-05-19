import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../LayOuts/MainLayout";
import HomePage from "../Pages/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {path:"/",
            element: <HomePage></HomePage>
        }
    ]
  },
]);

export default router;
