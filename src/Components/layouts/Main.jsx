import Sidebar from "../Sidebar/Sidebar";

import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

import '../../App.css'




export default function Main() {

  return (
    <div className="bg-[#f9f7fd] flex flex-col items-center" >
      <div className="  lg:max-w-[95%] mx-auto scroll-smooth rubik flex bg-[#f9f7fd]">
        <Sidebar></Sidebar>
        <div className="lg:max-w-[1270px] mx-auto md:ml-[110px] bg-[#f9f7fd]" >
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>

   
    </div>
  );
}
