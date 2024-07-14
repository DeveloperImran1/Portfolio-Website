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

// import { useCallback } from "react";
// import Particles from "react-particles";
// //import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
// import Particle from "../Particle/Particle";




export default function Main() {
  // const particlesInit = useCallback(async engine => {
  //   console.log(engine);
  //   // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
  //   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //   // starting from v2 you can add only the features you need reducing the bundle size
  //   //await loadFull(engine);
  //   await loadSlim(engine);
  // }, []);

  // const particlesLoaded = useCallback(async container => {
  //   await console.log(container);
  // }, []);

  return (
    <div className="bg-[#f9f7fd]" >
      <div className="  lg:max-w-[95%] mx-auto scroll-smooth rubik flex bg-[#f9f7fd]">
        <Sidebar></Sidebar>
        <div className="md:ml-[110px] bg-[#f9f7fd]" >
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>

{/* <Particle></Particle> */}
   
    </div>
  );
}
