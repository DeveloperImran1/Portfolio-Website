import Home from "../Home/Home";
import Sidebar from "../Sidebar/Sidebar";
import About from "../About/About";
import Testimonials from "../Testimonials/Testimonials";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Project from "../Projects/Projects";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

import '../../App.css'

export default function Main() {
  return (
    <div className="bg-[#f9f7fd]" >
      <div className="max-w-[95%] mx-auto scroll-smooth rubik flex ">
        <Sidebar></Sidebar>
        <div className="md:ml-[110px] " >
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
