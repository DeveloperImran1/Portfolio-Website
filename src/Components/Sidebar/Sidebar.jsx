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
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";

import { IoReorderThree } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
const Sidebar = () => {

  const [sidebar, setSidebar] = useState(true)
  const currentPage = useLocation();



  return (

    <div className="">
      <div className=' fixed top-[2%] right-[6%] md:hidden cursor-pointer z-50'>
        <IoReorderThree onClick={() => setSidebar(!sidebar)} size={26} className=''></IoReorderThree>
      </div>

      <div className={`${sidebar ? 'ablolute -left-[270px] md:left-0' : 'flex bg-[#F2F2F2] z-50 ablolute left-0 w-[calc(100vw-60%)] md:w-[60px] '} md:flex flex-col justify-start  items-center fixed border-r-2 shadow-inner  h-[100vh] transition-all transform `} >
        <Link to="/" className="relative">
          <img
            className="h-[22px] w-[17px] animate-spin absolute top-[12px] left-[25px] mx-auto"
            src="https://tech-apps-f8d51.web.app/assets/logo-BKgrWx8u.png"
            alt=""
          />
          <img
            className="h-[60px] w-[60px] mt-4"
            src="https://i.ibb.co/zb2S576/I-logo-removebg-preview.png"
            alt=""
          />
        </Link>



        {/* medium device er jonno  */}
        <div className="hidden md:flex flex-col gap-4 mt-16" >


          <div className="tooltip  tooltip-right" data-tip="Home">
            <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#home'}`} className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">
              <MdHome size={20} className="text-[#0095ff]"></MdHome>

            </a>
          </div>



          <div className={`tooltip  tooltip-right `} data-tip="Skills">
            <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#skills'}`} className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">

              <GrUserSettings size={17} className="text-[#0095ff]"></GrUserSettings>
            </a>
          </div>

          <div className="tooltip  tooltip-right" data-tip="Projects">
            <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#projects'}`} className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">

              <FaLayerGroup size={17} className="text-[#0095ff]"></FaLayerGroup>
            </a>
          </div>

          <div className="tooltip  tooltip-right" data-tip="My Team">
            <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#review'}`} className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">

              <FaUsers size={17} className="text-[#0095ff]"></FaUsers>
            </a>
          </div>


          <div className="tooltip  tooltip-right" data-tip="Achievement">
            <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#achived'}`} className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">

              <TfiCup size={17} className="text-[#0095ff]"></TfiCup>
            </a>
          </div>

          <div className="tooltip  tooltip-right" data-tip="Education">
            <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#education'}`} className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">

              <FaGraduationCap size={17} className="text-[#0095ff]"></FaGraduationCap>
            </a>
          </div>


          <div className="tooltip  tooltip-right" data-tip="Blogs">
            <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#blogs'}`} className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">

              <FaBloggerB size={17} className="text-[#0095ff]"></FaBloggerB>
            </a>
          </div>

          <div className="tooltip  tooltip-right" data-tip="Contact">
            <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#contact'}`} className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">

              <RiContactsFill size={17} className="text-[#0095ff]"></RiContactsFill>
            </a>
          </div>


          <div className="tooltip  tooltip-right" data-tip="All Blogs">
            <a href="/blogs" className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">

              <FaSwatchbook size={17} className="text-[#0095ff]"></FaSwatchbook>
            </a>
          </div>

        </div>


        {/* small device er jonno  */}
        <div className="flex md:hidden flex-col gap-4 mt-9" >


          <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#home'}`} className="flex items-center gap-2">
            <MdHome size={20} className="text-[#0095ff] hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-125 h-6 w-6 flex justify-center items-center"></MdHome>
            <p className="text-[17px] ">Home</p>
          </a>


          <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#skills'}`} className="flex items-center gap-2" >
            <GrUserSettings size={17} className="text-[#0095ff]  hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-125 h-6 w-6 flex justify-center items-center"></GrUserSettings>
            <p className="text-[17px]">Skills</p>
          </a>


          <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#projects'}`} className="flex items-center gap-2" >
            <FaLayerGroup size={17} className="text-[#0095ff]  hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-125 h-6 w-6 flex justify-center items-center"></FaLayerGroup>
            <p className="text-[17px]">Projects</p>
          </a>



          <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#review'}`} className="flex items-center gap-2" >
            <FaUsers size={17} className="text-[#0095ff]  hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-125 h-6 w-6 flex justify-center items-center"></FaUsers>
            <p className="text-[17px]">My Team</p>
          </a>



          <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#achived'}`} className="flex items-center gap-2" >
            <TfiCup size={17} className="text-[#0095ff] p-[2px] hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-125 h-6 w-6 flex justify-center items-center"></TfiCup>
            <p className="text-[17px]">Achievement</p>
          </a>


          <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#education'}`} className="flex items-center gap-2" >
            <FaGraduationCap size={17} className="text-[#0095ff]  hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-125 h-6 w-6 flex justify-center items-center"></FaGraduationCap>
            <p className="text-[17px]">Education</p>
          </a>

          <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#blogs'}`} className="flex items-center gap-2" >
            <FaBloggerB size={17} className="text-[#0095ff]  hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-125 h-6 w-6 flex justify-center items-center"></FaBloggerB>
            <p className="text-[17px]">Blogs</p>
          </a>

          <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#contact'}`} className="flex items-center gap-2" >
            <RiContactsFill size={17} className="text-[#0095ff]  hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-125 h-6 w-6 flex justify-center items-center"></RiContactsFill>
            <p className="text-[17px]">Contact</p>
          </a>


    

          <a href="/blogs" className="flex items-center gap-2" >
            <FaSwatchbook size={17} className="text-[#0095ff]  hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-125 h-6 w-6 flex justify-center items-center"></FaSwatchbook>
            <p className="text-[17px]">All Blogs</p>
          </a>


        </div>



      </div>

    </div>
  );
};

export default Sidebar;
