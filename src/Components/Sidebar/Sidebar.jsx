import { MdHome } from "react-icons/md";
import { FaFileContract, FaRegUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaLayerGroup } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { GrUserSettings } from "react-icons/gr";
import { RiContactsFill } from "react-icons/ri";
import { FaBloggerB } from "react-icons/fa6";
import { FaSwatchbook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar = () => {

  // Initialize state variables
  const [theme, setTheme] = useState(() => {
    // Retrieve theme from localStorage on component mount
    const locatTheme = localStorage.getItem("theme");
    // If no theme is found in localStorage, default to dark theme
    // return locatTheme === "dark" ? true : false;
    return locatTheme === "light" ? true : false;
  });

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    // Store current theme in localStorage
    // localStorage.setItem("theme", theme ? "dark" : "light");
    localStorage.setItem("theme", theme ? "light" : "dark");

    // Apply theme to HTML element
    // document.querySelector('html').setAttribute('data-theme', theme ? "dark" : "light");
    document
      .querySelector("html")
      .setAttribute("data-theme", theme ? "light" : "dark");
  }, [theme]); // Re-run effect when theme changes


  // 3 dot menu
  const [toggle, setToggle] = useState(false)

  return (
    <div className="hidden md:flex flex-col justify-start  items-center fixed border-r-2 shadow-inner  h-[100vh] " >
      <Link to="/" className="relative">
        <img
          className="h-[22px] w-[17px] animate-spin absolute top-[12px] left-[25px] mx-auto"
          src="https://tech-apps-f8d51.web.app/assets/logo-BKgrWx8u.png"
          alt=""
        />
        <img
          className="h-[60px] w-[60px] mt-4"
          src="https://i.ibb.co/S64gtJh/I-logo.png"
          alt=""
        />
        
      </Link>

      
            
      <div className="flex flex-col gap-4 mt-16" >


        <div className="tooltip  tooltip-right" data-tip="Home">
          <a href="#home" className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">
            <MdHome size={20} className="text-[#0095ff]"></MdHome>
          </a>
        </div>



        <div className="tooltip  tooltip-right" data-tip="Skills">
          <a href="#skills" className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">

            <GrUserSettings size={17} className="text-[#0095ff]"></GrUserSettings>
          </a>
        </div>

        <div className="tooltip  tooltip-right" data-tip="Projects">
          <a href="#projects" className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">

            <FaLayerGroup size={17} className="text-[#0095ff]"></FaLayerGroup>
          </a>
        </div>

        <div className="tooltip  tooltip-right" data-tip="Blogs">
          <a href="#blogs" className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">

            <FaBloggerB size={17} className="text-[#0095ff]"></FaBloggerB>
          </a>
        </div>

        <div className="tooltip  tooltip-right" data-tip="Review">
          <a href="#review" className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">

            <FaRegMessage size={17} className="text-[#0095ff]"></FaRegMessage>
          </a>
        </div>


        <div className="tooltip  tooltip-right" data-tip="Education">
          <a href="#education" className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">

            <FaGraduationCap size={17} className="text-[#0095ff]"></FaGraduationCap>
          </a>
        </div>

        <div className="tooltip  tooltip-right" data-tip="Contact">
          <a href="#contact" className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">

            <RiContactsFill size={17} className="text-[#0095ff]"></RiContactsFill>
          </a>
        </div>


  
        <div className="tooltip  tooltip-right" data-tip="All Blogs">
          <a href="/blogs" className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">

            <FaSwatchbook size={17} className="text-[#0095ff]"></FaSwatchbook>
          </a>
        </div>


      </div>

      {/* <div className="-rotate-90 -ml-14 mt-6 text-sm ">
        <p >&copy; 2024</p>
      </div> */}
    </div>
  );
};

export default Sidebar;
