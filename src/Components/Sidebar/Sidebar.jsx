import { MdHome } from "react-icons/md";
import { FaFileContract, FaRegUser } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaLayerGroup } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col justify-between items-center gap-11 fixed border-r-2 " >
      <img
        className="h-[60px] w-[60px]"
        src="https://tse4.mm.bing.net/th?id=OIP.W_MeRmKJ0d9WsrUx7XiHRgHaHa&pid=Api&P=0&h=220"
        alt=""
      />
      <div className="flex flex-col gap-4 mt-11" >
        <a href="#home" className="hover:text-red-400 rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">
          <MdHome size={20}></MdHome>
        </a>
   
        <a href="#skills" className="hover:text-red-400 rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">

          <FaBriefcase size={17}></FaBriefcase>
        </a>
        <a href="#projects" className="hover:text-red-400 rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">

          <FaLayerGroup size={17}></FaLayerGroup>
        </a>


        <a href="#review" className="hover:text-red-400 rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">

          <FaRegMessage size={17}></FaRegMessage>
        </a>
        <a href="#blogs" className="hover:text-red-400 rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">

          <FaEdit size={17}></FaEdit>
        </a>
        <a href="#education" className="hover:text-red-400 rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">

          <FaGraduationCap size={17}></FaGraduationCap>
        </a>
        <a href="#contact" className="hover:text-red-400 rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">

          <FaFileContract size={17}></FaFileContract>
        </a>
      </div>

      {/* <div className="-rotate-90 -ml-14 mt-6 text-sm ">
        <p >&copy; 2024</p>
      </div> */}
    </div>
  );
};

export default Sidebar;
