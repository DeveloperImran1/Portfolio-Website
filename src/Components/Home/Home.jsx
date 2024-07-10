import { FaFacebookF, FaGithub, FaLinkedin, FaMessage } from "react-icons/fa6";
import resume from "../../assets/Resume (Front-end Webdeveloper).pdf"
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div id="home" className="flex flex-col justify-center items-center gap-2 mx-auto mt-[70px] h-[100vh] min-w-[calc(100vw-220px)] relative" >
      <img className="w-[150px] h-[150px] z-10 rounded-full" src="https://i.ibb.co/C5j8rL3/Blue-Modern-Facebook-Profile-Picture.png" alt="Profile Image" />
      <span className="text-[40px] font-bold text-center flex justify-center items-center gap-3 mt-3 z-10">Hi  <img className="" src="https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Hi.gif" width="35" />  </span>
      <div className="wrapper  absolute top-[25%]">
        <svg className="svg">
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            I am Imran
          </text>
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-center mt-[50px] z-10">Front-End Web Developer</h1>
      <p className="mb-3 md:w-[50%] mx-auto text-center">
        Front-end web developer with expertise in React, Tailwind CSS, and smooth user experience design, performance optimization, and intuitive interfaces for seamless web interactions
      </p>
      <div className="grid grid-flow-col gap-4 " >
       

        <Link to="https://www.facebook.com/DeveloperImran1" className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">
          <FaFacebookF className=" text-blue-600 hover:text-[#076aa5] text-[16px]  "></FaFacebookF>
        </Link>
        <Link to="https://www.linkedin.com/in/developerimran1122/" className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">
          <FaLinkedin className=" text-blue-600 hover:text-[#076aa5] text-[16px]  "></FaLinkedin>
        </Link>
        <Link to="https://github.com/DeveloperImran1" className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">
          <FaGithub className=" text-blue-600 hover:text-[#076aa5] text-[16px]  "></FaGithub>
        </Link>
        {/* <a href="tel:+8801311710894" className="border p-2 border-blue-500  rounded-full hover:bg-blue-500">
                        <FaPhoneAlt  className=" text-blue-600  hover:text-white text-[16px]  "></FaPhoneAlt>
                    </a> */}

      </div>
      <div className="flex gap-3 mt-3" >
        <a href={resume} download="Resume">
          <button className="animate-button text-[17px] box-border border-4 border-sky-900 w-[130px] h-9 rounded-lg bg-sky-600 text-white relative group"><span className="pr-8">Resume</span><span className="bg-sky-900 absolute right-0 top-0  h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-10 duration-300"><svg viewBox="0 0 24 24" fill="none" className="w-8 inline mx-auto" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>
        </a>
        <a href="#contact">
          {/* <button className=" text-[17px] box-border border-2 border-sky-900 w-[130px] h-9 rounded-lg bg-sky-600 text-white  duration-200 hover:bg-sky-500 hover:text-white">Button</button> */}
          <button id="" className="text-[17px] animate-button box-border border-2 border-sky-900 w-[130px] h-9 rounded-lg bg-sky-600 text-white duration-200 hover:bg-sky-500 hover:text-white">
          Hire Me
        </button>        </a>
      </div>

      <div className="  flex flex-col items-center justify-center gap-2 mt-[30px] md:mt-[60px] cursor-pointer "  >
        <a>Scrool Down</a>
        <a href="#skills" className="animate-button">

          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 8.467 8.467" id="scroll-down"><path d="m -67.557504,132.58035 c -1.101718,0 -1.997778,0.89559 -1.997778,1.99731 v 3.41374 c 0,1.10172 0.89606,1.9973 1.997778,1.9973 h 1.463101 c 1.101719,0 1.997302,-0.89558 1.997302,-1.9973 v -3.41374 c 0,-1.10172 -0.895583,-1.99731 -1.997302,-1.99731 z m 0,0.58325 h 1.463101 c 0.788968,0 1.414061,0.62509 1.414061,1.41406 v 3.41374 c 0,0.78896 -0.625093,1.41453 -1.414061,1.41453 h -1.463101 c -0.788969,0 -1.414537,-0.62557 -1.414537,-1.41453 v -3.41374 c 0,-0.78897 0.625568,-1.41406 1.414537,-1.41406 z m 0.727028,0.0571 a 0.24379519,0.24379519 0 0 0 -0.239487,0.24662 v 0.5204 h -0.325662 l 0.570385,1.01651 0.113316,-0.2014 0.458975,-0.81511 h -0.329472 v -0.5204 a 0.24379519,0.24379519 0 0 0 -0.248055,-0.24662 z m -1.725917,2.08967 a 0.24411119,0.24411119 0 0 0 0.02333,0.48754 h 3.413744 a 0.24383083,0.24383083 0 1 0 0,-0.48754 h -3.413743 a 0.24379519,0.24379519 0 0 0 -0.02333,0 z" color="#000" overflow="visible" transform="translate(71.06 -132.051)" ></path></svg>
        </a>
      </div>
    </div>
  )
}
