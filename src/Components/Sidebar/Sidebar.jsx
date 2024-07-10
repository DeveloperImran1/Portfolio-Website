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

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col justify-start  items-center fixed border-r-2 shadow-inner  h-[100vh] " >
      <Link to="/" >
        <img
          className="h-[60px] w-[60px]"
          src="https://tse4.mm.bing.net/th?id=OIP.W_MeRmKJ0d9WsrUx7XiHRgHaHa&pid=Api&P=0&h=220"
          alt=""
        />
      </Link>
      <div className="flex flex-col gap-4 mt-11" >


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
