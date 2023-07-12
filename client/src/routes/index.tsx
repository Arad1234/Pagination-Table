import { createBrowserRouter } from "react-router-dom";
import { URLS } from "../utils/constants";
import Home from "../pages/Home/Home";
import Posts from "../pages/Posts/Posts";

const { HOME, USER_POSTS_URL } = URLS;

export const router = createBrowserRouter([
  { path: HOME, element: <Home /> },
  { path: USER_POSTS_URL, element: <Posts /> },
]);
