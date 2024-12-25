import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {

  // 3 dot menu
  const [toggle, setToggle] = useState(false)  
  

  return (
    <div>
      <nav className="bg-white border-gray-200  my-11">
        <div className="flex flex-wrap items-center justify-between mx-auto ">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Md Imran
            </span>
          </a>
          <button
          onClick={()=> setToggle(!toggle)}
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className={`${toggle ? 'block':'hidden'} w-full h-full rounded-lg bg-red-300`}>
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white"
                  aria-current="page">
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white"
                  aria-current="page">
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white"
                  aria-current="page">
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white"
                  aria-current="page">
                  Skills
                </a>
              </li>
        
            </ul>
          </div>

          <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  aria-current="page"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  aria-current="page"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  aria-current="page"
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  aria-current="page"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  aria-current="page"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex gap-4 ">
          
            <button className="text-xl box-border border-4 border-sky-900  h-11 w-32 rounded-lg bg-sky-600 text-white relative group"><span className="pr-8">Resume</span><span className="bg-sky-900 absolute right-0 top-0  h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-10 duration-300"><svg viewBox="0 0 24 24" fill="none" className="w-8 inline mx-auto" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>

            
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
