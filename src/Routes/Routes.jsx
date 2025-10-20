import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Components/layouts/Main";
import BlogsDetails from "../Components/Blogs/BlogsDetails";
import Blogs from "../Components/Blogs/Blogs";
import HomeContaner from "../Components/Home/HomeContaner";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <HomeContaner></HomeContaner>
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>
        },
        {
          path: "/blogs/:id",
          element: <BlogsDetails></BlogsDetails>,
          loader: ()=> fetch(`/Blogs.json`)
        },
      
      ]
    },
   
  ]);

  