

// Home.js
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';
import resume from '../../assets/Imran Resume Front-end Development.pdf';
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <div id="" className={`relative flex flex-col justify-center items-center gap-2 mx-auto mt-[40px] md:mt-[70px]  `}>

      
      <img className="w-[150px] lg:w-[180px] h-[150px] lg:h-[180px] z-10 rounded-full" src="https://i.postimg.cc/PxXKg8zy/Developer-Imran-Profile.png" alt="Profile Image" />
      <span className=" text-[30px] md:text-[40px] font-bold text-center flex justify-center items-center mt-3 ">
        Hi <img className="" src="https://res.cloudinary.com/dqdircc96/image/upload/v1736266015/Hi_ut0xb5.gif" width="35" />
       <span className='ml-[10px] '>I am Imran</span>
       </span>
    
      <h1 className="text-[18px] md:text-2xl font-bold text-center mt-[10px] z-10">Front-End Web Developer</h1>
      <p className="mb-3 w-[95%] md:w-[50%] mx-auto text-center">
        Front-end web developer with expertise in React, Tailwind CSS, and smooth user experience design, performance optimization, and intuitive interfaces for seamless web interactions
      </p>
      <div className="grid grid-flow-col gap-4">
        <Link target='_blank' to="https://www.facebook.com/imran9066588" className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">
          <FaFacebookF className="text-blue-600 hover:text-[#076aa5] text-[16px]" />
        </Link>
        <Link target='_blank' to="https://www.linkedin.com/in/developerimran1122/" className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">
          <FaLinkedin className="text-blue-600 hover:text-[#076aa5] text-[16px]" />
        </Link>
        <Link target='_blank' to="https://github.com/DeveloperImran1" className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">
          <FaGithub className="text-blue-600 hover:text-[#076aa5] text-[16px]" />
        </Link>
      </div>
      <div className="flex gap-3 mt-3">
        <a href={resume} download="Resume">
          <button className="animate-button text-[17px] box-border border-4 border-sky-900 w-[130px] h-9 rounded-lg bg-sky-600 text-white relative group">
            <span className="pr-8">Resume</span>
            <span className="bg-sky-900 absolute right-0 top-0 h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-10 duration-300">
              <svg viewBox="0 0 24 24" fill="none" className="w-8 inline mx-auto" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </a>

        <a href="#contact">
          <button className="text-[17px] animate-button box-border border-2 border-sky-900 w-[130px] h-9 rounded-lg bg-sky-600 text-white duration-200 hover:bg-sky-500 hover:text-white">
            Hire Me
          </button>
        </a>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 mt-[30px] md:mt-[60px] cursor-pointer">
        <a>Scroll Down</a>
        <a  data-aos="fade-up" href="#skills" className="animate-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 8.467 8.467" id="scroll-down">
            <path d="m -67.557504,132.58035 c -1.101718,0 -1.997778,0.89559 -1.997778,1.99731 v 3.41374 c 0,1.10172 0.89606,1.9973 1.997778,1.9973 h 1.463101 c 1.101719,0 1.997302,-0.89558 1.997302,-1.9973 v -3.41374 c 0,-1.10172 -0.895583,-1.99731 -1.997302,-1.99731 z m 0,0.58325 h 1.463101 c 0.788968,0 1.414061,0.62509 1.414061,1.41406 v 3.41374 c 0,0.78896 -0.625093,1.41453 -1.414061,1.41453 h -1.463101 c -0.788969,0 -1.414537,-0.62557 -1.414537,-1.41453 v -3.41374 c 0,-0.78897 0.625568,-1.41406 1.414537,-1.41406 z m 0.727028,0.0571 a 0.24379519,0.24379519 0 0 0 -0.239487,0.24662 v 0.5204 h -0.325662 l 0.570385,1.01651 0.113316,-0.2014 0.458975,-0.81511 h -0.329472 v -0.5204 a 0.24379519,0.24379519 0 0 0 -0.248055,-0.24662 z m -1.725917,2.08967 a 0.24411119,0.24411119 0 0 0 0.02333,0.48754 h 3.413744 a 0.24383083,0 1 0 0,-0.48754 h -3.413743 a 0.24379519,0.24379519 0 0 0 -0.02333,0 z" color="#000" overflow="visible" transform="translate(71.06 -132.051)" />
          </svg>
        </a>
      </div>

   
      <img className="h-[60px] w-[60px] rounded-full  animate-spin absolute top-[-4%] right-[15%]" src="https://res.cloudinary.com/dqdircc96/image/upload/v1736260770/reactjs_fq9myl.png" alt="" />
      <img className="animate-scale h-[30px] w-[30px]  rounded-full  absolute  top-[24%] right-[15%]" src="https://res.cloudinary.com/dqdircc96/image/upload/v1736260776/mongodb_rxsmnt.png" alt="" />

      <img className="h-[40px] w-[40px] rounded-full absolute top-[-4%] left-[15%]" src="https://res.cloudinary.com/dqdircc96/image/upload/v1736260769/javascript_lubfvy.png" alt="" />

      <img className="animate-scale h-[30px] w-[30px]  rounded-full absolute top-[24%] left-[15%]" src="https://res.cloudinary.com/dqdircc96/image/upload/v1736260783/expressjs_zqjbld.png" alt="" />

    </div>
  );
}
