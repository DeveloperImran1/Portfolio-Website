import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Components/layouts/Main";
import BlogsDetails from "../Components/Blogs/BlogsDetails";
  

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    },
    {
      path: "/blog/:id",
      element: <BlogsDetails></BlogsDetails>,
      loader: ()=> fetch(`/Blogs.json`)
    }
  ]);

  