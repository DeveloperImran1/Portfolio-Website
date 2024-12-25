import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Title from "../Shared/Title";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowRoundForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";

const Project = () => {
    const [hoverd, setHoverd] = useState(false);
    return (

        <>
            <div id="projects" className="flex items-center justify-center mt-[80px] mb-[10px] ">
                <h1 className="text-3xl mb-5 mt-[110px] font-bold text-center"></h1>
                <Title title={"Recent Projects"} description={"Showcasing diverse projects: client collaborations, team ventures, and personal full-stack and front-end developments."}></Title>

            </div>

            <div className="grid gap-3 md:gap-6 lg:gap-7 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

                {/* EventSphare project */}
                <div className="border-2 rounded-[10px]">
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                to={'https://event-sphere-bice.vercel.app/' || "/"}
                                className="group"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="w-full h-[300px] p-0 rounded-[10px] mb-3 relative overflow-hidden bg-[#f4f4f4]">

                                    <div className="w-full h-full overflow-hidden rounded-lg relative">
                                        <div
                                            className="w-full h-full bg-animation"
                                            style={{
                                                backgroundImage: `url(https://i.ibb.co.com/f0WDk6R/screencapture-event-sphere-bice-vercel-app-2024-12-25-09-38-48.png)`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </Link>

                            {/* project description and featres  */}
                            <div className="relative p-[20px] lg:max-w-[37vw]" >
                                <div className="flex justify-between items-center ">
                                    <h1 className="text-xl font-semibold  text-left " >EventSphare</h1>
                                    <div className="avatar-group -space-x-[8px] rtl:space-x-reverse">
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/sW5JBYT/reactjs.png" />
                                            </div>
                                        </div>

                                        <div className="avatar ">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co.com/4SgX5Nk/nextjs.jpg" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co.com/7YZ6LHz/bg-f8f8f8-flat-750x-075-f-pad-750x1000-f8f8f8.jpg" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co.com/vHMjW41/logo-sm.png" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/WGVjtbX/mongodb.png" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/g6D3GsT/nodejs.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-base my-3 text-left">A dynamic event management and booking platform offering seamless ticketing, live chat, and video support.</p>

                                <div className="" >

                                    <div className="mt-4 flex justify-between items-center flex-wrap gap-1 md:gap-2 lg:gap-3" >

                                        <div className="flex  flex-wrap gap-1 md:gap-2 lg:gap-3">
                                            <Link target="_blank" to="https://github.com/DeveloperImran1/EventSphere" >
                                                <button className="animate-button rounded-xl border-2 border-sky-500 px-1 py-1 text-[12px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={16}></FaLink>Client Side</button>
                                            </Link>
                                            <Link target="_blank" to="https://github.com/DeveloperImran1/EventSphare-Server" >
                                                <button className="animate-button rounded-xl border-2 border-sky-500 px-1 py-1 text-[12px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={16}></FaLink>Server Side</button>
                                            </Link>
                                        </div>

                                        <Link to={'https://event-sphere-bice.vercel.app/' || "#"}
                                            target="_blank"
                                            onMouseEnter={() => setHoverd(true)} onMouseLeave={() => setHoverd(false)} className="border-2 icon-container rounded-full p-1 hover:bg-sky-500 border-sky-500 hover:text-white ease-in duration-300" >
                                            {
                                                hoverd ? <IoMdArrowRoundForward size={22} className="icon-hover ease-in duration-300" ></IoMdArrowRoundForward> : <MdArrowOutward size={22} className="icon-default ease-in duration-300" ></MdArrowOutward>
                                            }
                                        </Link>
                                    </div>
                                </div>
                            </div>



                        </motion.div>
                    </AnimatePresence>
                </div>


                {/* Book Vila project */}
                <div className="border-2 rounded-[10px]">
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                to={'https://book-vila-client.vercel.app/' || "/"}
                                className="group"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="w-full h-[300px] p-0 rounded-[10px] mb-3 relative overflow-hidden bg-[#f4f4f4]">

                                    <div className="w-full h-full overflow-hidden rounded-lg relative">
                                        <div
                                            className="w-full h-full bg-animation"
                                            style={{
                                                backgroundImage: `url(https://i.ibb.co.com/6cQNPs4/screencapture-book-vila-client-vercel-app-2024-12-25-18-47-58.png)`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </Link>

                            {/* project description and featres  */}
                            <div className="relative p-[20px] lg:max-w-[37vw]" >
                                <div className="flex justify-between items-center ">
                                    <h1 className="text-xl font-semibold  text-left " >Book Vila</h1>
                                    <div className="avatar-group -space-x-[8px] rtl:space-x-reverse">
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/sW5JBYT/reactjs.png" />
                                            </div>
                                        </div>

                                        <div className="avatar ">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co.com/4SgX5Nk/nextjs.jpg" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co.com/7YZ6LHz/bg-f8f8f8-flat-750x-075-f-pad-750x1000-f8f8f8.jpg" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co.com/vHMjW41/logo-sm.png" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/WGVjtbX/mongodb.png" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/g6D3GsT/nodejs.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-base my-3 text-left">Built and maintain Book Vila, a responsive React-based e-commerce platform with user-centric design and seamless functionality.</p>

                                <div className="" >

                                    <div className="mt-4 flex justify-between items-center flex-wrap gap-1 md:gap-2 lg:gap-3" >

                                        <div className="flex  flex-wrap gap-1 md:gap-2 lg:gap-3">
                                            <Link target="_blank" to="https://github.com/DeveloperImran1/BookVila-Client" >
                                                <button className="animate-button rounded-xl border-2 border-sky-500 px-1 py-1 text-[12px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={16}></FaLink>Client Side</button>
                                            </Link>
                                            <Link target="_blank" to="https://github.com/DeveloperImran1/BookVila-Server" >
                                                <button className="animate-button rounded-xl border-2 border-sky-500 px-1 py-1 text-[12px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={16}></FaLink>Server Side</button>
                                            </Link>
                                        </div>

                                        <Link to={'https://book-vila-client.vercel.app/' || "#"}
                                            target="_blank"
                                            onMouseEnter={() => setHoverd(true)} onMouseLeave={() => setHoverd(false)} className="border-2 icon-container rounded-full p-1 hover:bg-sky-500 border-sky-500 hover:text-white ease-in duration-300" >
                                            {
                                                hoverd ? <IoMdArrowRoundForward size={22} className="icon-hover ease-in duration-300" ></IoMdArrowRoundForward> : <MdArrowOutward size={22} className="icon-default ease-in duration-300" ></MdArrowOutward>
                                            }
                                        </Link>
                                    </div>
                                </div>
                            </div>



                        </motion.div>
                    </AnimatePresence>
                </div>


                {/* Touristbook project */}
                <div className="border-2 rounded-[10px]">
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                to={'https://touristbook.netlify.app/' || "/"}
                                className="group"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="w-full h-[300px] p-0 rounded-[10px] mb-3 relative overflow-hidden bg-[#f4f4f4]">

                                    <div className="w-full h-full overflow-hidden rounded-lg relative">
                                        <div
                                            className="w-full h-full bg-animation"
                                            style={{
                                                backgroundImage: `url(https://i.ibb.co.com/Dw9mPK6/screencapture-touristbook-netlify-app-2024-12-25-17-51-54.png)`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </Link>

                            {/* project description and featres  */}
                            <div className="relative p-[20px] lg:max-w-[37vw]" >
                                <div className="flex justify-between items-center ">
                                    <h1 className="text-xl font-semibold  text-left " >TouristBook</h1>
                                    <div className="avatar-group -space-x-[8px] rtl:space-x-reverse">
                                        <div className="avatar xl:hidden">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/2ZfCjX0/tailwindcss.png" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/sW5JBYT/reactjs.png" />
                                            </div>
                                        </div>

                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/VBJgmgv/javascript.png" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/wJDDjpc/expressjs.png" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/WGVjtbX/mongodb.png" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/g6D3GsT/nodejs.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-base my-3 text-left">Streamline Adventures with Transparent Booking & Engaging Travel Community for Better User Experience.</p>

                                <div className="" >

                                    <div className="mt-4 flex justify-between items-center flex-wrap gap-1 md:gap-2 lg:gap-3" >

                                        <div className="flex  flex-wrap gap-1 md:gap-2 lg:gap-3">
                                            <Link target="_blank" to="https://github.com/DeveloperImran1/TouristBook-client" >
                                                <button className="animate-button rounded-xl border-2 border-sky-500 px-1 py-1 text-[12px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={16}></FaLink>Client Side</button>
                                            </Link>
                                            <Link target="_blank" to="https://github.com/DeveloperImran1/TouristBook-Server" >
                                                <button className="animate-button rounded-xl border-2 border-sky-500 px-1 py-1 text-[12px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={16}></FaLink>Server Side</button>
                                            </Link>
                                        </div>

                                        <Link to={'https://touristbook.netlify.app/' || "#"}
                                            target="_blank"
                                            onMouseEnter={() => setHoverd(true)} onMouseLeave={() => setHoverd(false)} className="border-2 icon-container rounded-full p-1 hover:bg-sky-500 border-sky-500 hover:text-white ease-in duration-300" >
                                            {
                                                hoverd ? <IoMdArrowRoundForward size={22} className="icon-hover ease-in duration-300" ></IoMdArrowRoundForward> : <MdArrowOutward size={22} className="icon-default ease-in duration-300" ></MdArrowOutward>
                                            }
                                        </Link>
                                    </div>
                                </div>
                            </div>



                        </motion.div>
                    </AnimatePresence>
                </div>



                {/* RoomIntel  project */}
                <div className="border-2 rounded-[10px]">
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                to={'https://room-intel.netlify.app/' || "/"}
                                className="group"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="w-full h-[300px] p-0 rounded-[10px] mb-3 relative overflow-hidden bg-[#f4f4f4]">

                                    <div className="w-full h-full overflow-hidden rounded-lg relative">
                                        <div
                                            className="w-full h-full bg-animation"
                                            style={{
                                                backgroundImage: `url(https://i.ibb.co.com/ggBdnT0/screencapture-room-intel-netlify-app-2024-12-25-19-08-40.png)`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </Link>

                            {/* project description and featres*/}
                            <div className="relative p-[20px] lg:max-w-[37vw]" >
                                <div className="flex justify-between items-center ">
                                    <h1 className="text-xl font-semibold  text-left " >RoomIntel</h1>
                                    <div className="avatar-group -space-x-[8px] rtl:space-x-reverse">
                                        <div className="avatar xl:hidden">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/2ZfCjX0/tailwindcss.png" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/sW5JBYT/reactjs.png" />
                                            </div>
                                        </div>

                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/VBJgmgv/javascript.png" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/wJDDjpc/expressjs.png" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/WGVjtbX/mongodb.png" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/g6D3GsT/nodejs.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-base my-3 text-left">Explore detailed room information, filter by price, check availability, book or cancel easily, and share your reviews.</p>

                                <div className="" >

                                    <div className="mt-4 flex justify-between items-center flex-wrap gap-1 md:gap-2 lg:gap-3" >

                                        <div className="flex  flex-wrap gap-1 md:gap-2 lg:gap-3">
                                            <Link target="_blank" to="https://github.com/DeveloperImran1/RoomIntel-Client" >
                                                <button className="animate-button rounded-xl border-2 border-sky-500 px-1 py-1 text-[12px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={16}></FaLink>Client Side</button>
                                            </Link>
                                            <Link target="_blank" to="https://github.com/DeveloperImran1/RoomIntel-server" >
                                                <button className="animate-button rounded-xl border-2 border-sky-500 px-1 py-1 text-[12px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={16}></FaLink>Server Side</button>
                                            </Link>
                                        </div>

                                        <Link to={'https://room-intel.netlify.app/' || "/"}
                                            target="_blank"
                                            onMouseEnter={() => setHoverd(true)} onMouseLeave={() => setHoverd(false)} className="border-2 icon-container rounded-full p-1 hover:bg-sky-500 border-sky-500 hover:text-white ease-in duration-300" >
                                            {
                                                hoverd ? <IoMdArrowRoundForward size={22} className="icon-hover ease-in duration-300" ></IoMdArrowRoundForward> : <MdArrowOutward size={22} className="icon-default ease-in duration-300" ></MdArrowOutward>
                                            }
                                        </Link>
                                    </div>
                                </div>
                            </div>



                        </motion.div>
                    </AnimatePresence>
                </div>



                {/* Study Nest  project */}
                <div className="border-2 rounded-[10px]">
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                to={'https://developerimran1.github.io/StudyNest-Landing-page/' || "/"}
                                className="group"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="w-full h-[300px] p-0 rounded-[10px] mb-3 relative overflow-hidden bg-[#f4f4f4]">

                                    <div className="w-full h-full overflow-hidden rounded-lg relative">
                                        <div
                                            className="w-full h-full bg-animation"
                                            style={{
                                                backgroundImage: `url(https://i.ibb.co.com/MCJ0LNG/screencapture-developerimran1-github-io-Study-Nest-Landing-page-2024-12-25-18-56-18.png)`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </Link>

                            {/* project description and featres*/}
                            <div className="relative p-[20px] lg:max-w-[37vw]" >
                                <div className="flex justify-between items-center ">
                                    <h1 className="text-xl font-semibold  text-left " >Study Nest</h1>
                                    <div className="avatar-group -space-x-[8px] rtl:space-x-reverse">
                                        <div className="avatar ">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/Ns0mvQf/html5.png" />
                                            </div>
                                        </div>
                                        <div className="avatar ">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/1GzSwm8/css3.png" />
                                            </div>
                                        </div>
                                        <div className="avatar ">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/2ZfCjX0/tailwindcss.png" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/sW5JBYT/reactjs.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-base my-3 text-left">Designed a responsive StudyNest landing page using HTML, CSS, and Tailwind CSS for a sleek user experience.</p>

                                <div className="" >

                                    <div className="mt-4 flex justify-between items-center flex-wrap gap-1 md:gap-2 lg:gap-3" >

                                        <div className="flex  flex-wrap gap-1 md:gap-2 lg:gap-3">
                                            <Link target="_blank" to="https://github.com/DeveloperImran1/StudyNest-Landing-page" >
                                                <button className="animate-button rounded-xl border-2 border-sky-500 px-1 py-1 text-[12px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={16}></FaLink>Github Code</button>
                                            </Link>
                                        </div>

                                        <Link to={'https://developerimran1.github.io/StudyNest-Landing-page/' || "/"}
                                            target="_blank"
                                            onMouseEnter={() => setHoverd(true)} onMouseLeave={() => setHoverd(false)} className="border-2 icon-container rounded-full p-1 hover:bg-sky-500 border-sky-500 hover:text-white ease-in duration-300" >
                                            {
                                                hoverd ? <IoMdArrowRoundForward size={22} className="icon-hover ease-in duration-300" ></IoMdArrowRoundForward> : <MdArrowOutward size={22} className="icon-default ease-in duration-300" ></MdArrowOutward>
                                            }
                                        </Link>
                                    </div>
                                </div>
                            </div>



                        </motion.div>
                    </AnimatePresence>
                </div>




                {/* Haven House  project */}
                <div className="border-2 rounded-[10px]">
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                to={'https://assignment-9-c67d9.web.app/' || "/"}
                                className="group"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="w-full h-[300px] p-0 rounded-[10px] mb-3 relative overflow-hidden bg-[#f4f4f4]">

                                    <div className="w-full h-full overflow-hidden rounded-lg relative">
                                        <div
                                            className="w-full h-full bg-animation"
                                            style={{
                                                backgroundImage: `url(https://i.ibb.co.com/djKkK8Y/screencapture-assignment-9-c67d9-web-app-2024-12-25-19-05-32.png)`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </Link>

                            {/* project description and featres*/}
                            <div className="relative p-[20px] lg:max-w-[37vw]" >
                                <div className="flex justify-between items-center ">
                                    <h1 className="text-xl font-semibold  text-left " >Haven House</h1>
                                    <div className="avatar-group -space-x-[8px] rtl:space-x-reverse">
                                        <div className="avatar xl:hidden">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/2ZfCjX0/tailwindcss.png" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/sW5JBYT/reactjs.png" />
                                            </div>
                                        </div>

                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/VBJgmgv/javascript.png" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/wJDDjpc/expressjs.png" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/WGVjtbX/mongodb.png" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-[30px]">
                                                <img className="p-1" src="https://i.ibb.co/g6D3GsT/nodejs.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-base my-3 text-left">
                                    Built an education platform with Firebase and a property bookmark system for enhanced user engagement.</p>

                                <div className="" >

                                    <div className="mt-4 flex justify-between items-center flex-wrap gap-1 md:gap-2 lg:gap-3" >

                                        <div className="flex  flex-wrap gap-1 md:gap-2 lg:gap-3">
                                            <Link target="_blank" to="https://github.com/DeveloperImran1/Haven-house" >
                                                <button className="animate-button rounded-xl border-2 border-sky-500 px-1 py-1 text-[12px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={16}></FaLink>Github Code</button>
                                            </Link>

                                        </div>

                                        <Link to={'https://assignment-9-c67d9.web.app/' || "/"}
                                            target="_blank"
                                            onMouseEnter={() => setHoverd(true)} onMouseLeave={() => setHoverd(false)} className="border-2 icon-container rounded-full p-1 hover:bg-sky-500 border-sky-500 hover:text-white ease-in duration-300" >
                                            {
                                                hoverd ? <IoMdArrowRoundForward size={22} className="icon-hover ease-in duration-300" ></IoMdArrowRoundForward> : <MdArrowOutward size={22} className="icon-default ease-in duration-300" ></MdArrowOutward>
                                            }
                                        </Link>
                                    </div>
                                </div>
                            </div>



                        </motion.div>
                    </AnimatePresence>
                </div>



            </div>

        </>



    );
};

export default Project;