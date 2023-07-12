import { createBrowserRouter } from "react-router-dom";
import { URLS } from "../utils/constants";
import Home from "../pages/Home/Home";
import Posts from "../pages/Posts/Posts";

const { ALL_POSTS, HOME, USER_POSTS } = URLS;

export const router = createBrowserRouter([
  { path: HOME, element: <Home /> },
  { path: ALL_POSTS, element: <Posts /> },
]);
