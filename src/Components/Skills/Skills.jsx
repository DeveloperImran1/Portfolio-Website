import { FaDropbox } from "react-icons/fa";
import 'animate.css';
import Title from "../Shared/Title";
import videoFile from "../../../public/videoFile.mp4"
import { TfiCup } from "react-icons/tfi";
import { MdOutlineDateRange } from "react-icons/md";
import { BsEmojiHeartEyes } from "react-icons/bs";
import './ButtonStyle.css'
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";

const Skills = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped(prevIsFlipped => !prevIsFlipped);
    };
    return (

        <div id="skills" className="mt-[80px] " >

            {/* animation button, 4 site dia colour hoi  */}
            {/* <a id="a" className="">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Button
            </a> */}
            <Title title={"My Skills"} description={"Here are some front-end, back-end, and other tools and technologies. This technologys know and I use in my professional projects."}></Title>
            <div className="relative -z-0">
                {/* <section className="dark:bg-gray-100 dark:text-gray-800  object-cover h-full w-full absolute top-0 left-0  ">
                    <div className="container  p-6 mx-auto space-y-6 sm:space-y-12  sticky  left-0 top-0">
                        <a rel="noopener noreferrer" href="#" className=" block max-w-full gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <video className="w-full h-64 rounded sm:h-96 lg:col-span-7 object-cover" autoPlay loop muted poster="/path-to-your-poster.jpg">
                                <source src={videoFile} type="video/mp4" />

                            </video>

                        </a>



                    </div>
                </section> */}






                <div className="mb-[60px] relative z-20" >
                    <h1 className="text-2xl my-3">Front-End Technology</h1>
                    <div style={{ willChange: 'transform', transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s', transform: 'perspective(600px) rotateX(0deg) scale3d(1, 1, 1)' }}>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5" >

                            <div className=" bg-main-bg dark:bg-primary/60 dark:ring-gray-800 bg-slate-200  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition  hover:grayscale-0 text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl hover:rounded-3xl transition-all duration-300 ease-in-out transform delay-200" >
                                <img className="size-[90px] my-transition group-hover:animate-bounce group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/Ns0mvQf/html5.png" alt="" />
                                <p className="text-2xl font-semi-bold text-[#076aa5]">92%</p>
                                <h1 className="text-xl font-semi-bold text-[#076aa5]">HTML5</h1>
                            </div>

                            <div onMouseEnter={handleClick} onMouseLeave={handleClick}  >
                                {isFlipped ? <div className="bg-main-bg dark:bg-primary/60 dark:ring-gray-800 bg-slate-200  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition  hover:grayscale-0 text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl hover:rounded-3xl transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                    <p className="text-2xl font-semi-bold text-[#076aa5]">92%</p>
                                    <h1 className="text-xl font-semi-bold text-[#076aa5]">HTML5</h1>
                                </div> :
                                    <div className="bg-white dark:bg-primary/60 dark:ring-gray-800  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition  hover:grayscale-0 text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl hover:rounded-3xl transition-all duration-300 ease-in-out transform delay-200" >
                                <img className="size-[90px] my-transition group-hover:animate-bounce group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/Ns0mvQf/html5.png" alt="" />

                                    </div>
                                }
                            </div>
                            <div onMouseEnter={handleClick} onMouseLeave={handleClick}  >
                                {isFlipped ? <div className="bg-main-bg dark:bg-primary/60 dark:ring-gray-800 bg-slate-200  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition  hover:grayscale-0 text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl hover:rounded-3xl transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                    <h1 className="text-2xl font-bold text-[#076aa5]">CSS3</h1>
                                    <p className="text-2xl font-semi-bold text-[#076aa5]">82%</p>
                                </div> :
                                    <div className="bg-white dark:bg-primary/60 dark:ring-gray-800  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition  hover:grayscale-0 text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl hover:rounded-3xl transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] my-transition animate-bounce group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/1GzSwm8/css3.png" alt="" />

                                    </div>
                                }
                            </div>


                            <div className="bg-main-bg dark:bg-primary/60 dark:ring-gray-800 hover:rotateY-45 bg-slate-200  p-6 md:p-8 group rounded-xl flex flex-col justify-center items-center space-y-3 my-transition grayscale hover:grayscale-0 text-center ring-1 ring-ring-color overflow-hidden hover:scale-y-110 transition transform" >
                                <img className="size-[90px] my-transition group-hover:animate-bounce group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/1GzSwm8/css3.png" alt="" />
                                <p className="text-2xl font-semi-bold text-[#076aa5]">82%</p>
                                <h1 className="text-xl font-semi-bold text-[#076aa5]">CSS3</h1>
                            </div>


                            <div className="bg-main-bg dark:bg-primary/60 dark:ring-gray-800 bg-slate-200  p-6 md:p-8 group rounded-xl flex flex-col justify-center items-center space-y-3 my-transition grayscale hover:grayscale-0 text-center ring-1 ring-ring-color overflow-hidden hover:scale-y-110 transition transform" >
                                <img className="size-[90px] my-transition group-hover:animate-bounce group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/2ZfCjX0/tailwindcss.png" alt="" />
                                <p className="text-2xl font-semi-bold text-[#076aa5]">90%</p>
                                <h1 className="text-xl font-semi-bold text-[#076aa5]">Tailwind CSS</h1>
                            </div>



                            <div className="bg-main-bg dark:bg-primary/60 dark:ring-gray-800 bg-slate-200  p-6 md:p-8 group rounded-xl flex flex-col justify-center items-center space-y-3 my-transition grayscale hover:grayscale-0 text-center ring-1 ring-ring-color overflow-hidden hover:scale-y-110 transition transform" >
                                <img className="size-[90px] my-transition group-hover:animate-bounce group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/VBJgmgv/javascript.png" alt="" />
                                <p className="text-2xl font-semi-bold text-[#076aa5]">62%</p>
                                <h1 className="text-xl font-semi-bold text-[#076aa5]">Javascript</h1>
                            </div>

                            <div className="bg-main-bg dark:bg-primary/60 dark:ring-gray-800 bg-slate-200  p-6 md:p-8 group rounded-xl flex flex-col justify-center items-center space-y-3 my-transition grayscale hover:grayscale-0 text-center ring-1 ring-ring-color overflow-hidden hover:scale-y-110 transition transform" >
                                <img className="size-[90px] my-transition group-hover:animate-bounce group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/sW5JBYT/reactjs.png" alt="" />
                                <p className="text-2xl font-semi-bold text-[#076aa5]">68%</p>
                                <h1 className="text-xl font-semi-bold text-[#076aa5]">ReactJS</h1>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="mb-[60px] z-20" >
                    <h1 className="text-2xl my-3">Back-End Technology</h1>
                    <div style={{ willChange: 'transform', transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s', transform: 'perspective(600px) rotateX(0deg) scale3d(1, 1, 1)' }}>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5" >
                            <div className="bg-main-bg dark:bg-primary/60 dark:ring-gray-800 bg-slate-200  p-6 md:p-8 group rounded-xl flex flex-col justify-center items-center space-y-3 my-transition grayscale hover:grayscale-0 text-center ring-1 ring-ring-color overflow-hidden hover:scale-y-110 transition transform" >
                                <img className="size-[90px] my-transition group-hover:animate-bounce group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/g6D3GsT/nodejs.png" alt="" />
                                <p className="text-2xl font-semi-bold text-[#076aa5]">73%</p>
                                <h1 className="text-xl font-semi-bold text-[#076aa5]">Node JS</h1>
                            </div>


                            <div className="bg-main-bg dark:bg-primary/60 dark:ring-gray-800 bg-slate-200  p-6 md:p-8 group rounded-xl flex flex-col justify-center items-center space-y-3 my-transition grayscale hover:grayscale-0 text-center ring-1 ring-ring-color overflow-hidden hover:scale-y-110 transition transform" >
                                <img className="size-[90px] my-transition group-hover:animate-bounce group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/wJDDjpc/expressjs.png" alt="" />
                                <p className="text-2xl font-semi-bold text-[#076aa5]">68%</p>
                                <h1 className="text-xl font-semi-bold text-[#076aa5]">Express JS</h1>
                            </div>


                            <div className="bg-main-bg dark:bg-primary/60 dark:ring-gray-800 bg-slate-200  p-6 md:p-8 group rounded-xl flex flex-col justify-center items-center space-y-3 my-transition grayscale hover:grayscale-0 text-center ring-1 ring-ring-color overflow-hidden hover:scale-y-110 transition transform" >
                                <img className="size-[90px] my-transition group-hover:animate-bounce group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/WGVjtbX/mongodb.png" alt="" />
                                <p className="text-2xl font-semi-bold text-[#076aa5]">52%</p>
                                <h1 className="text-xl font-semi-bold text-[#076aa5]">Mongo DB</h1>
                            </div>




                        </div>
                    </div>
                </div>

                <div className="mb-[60px] z-20" >
                    <h1 className="text-2xl my-3">Others Technology</h1>
                    <div style={{ willChange: 'transform', transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s', transform: 'perspective(600px) rotateX(0deg) scale3d(1, 1, 1)' }}>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5" >
                            <div className="bg-main-bg dark:bg-primary/60 dark:ring-gray-800 bg-slate-200  p-6 md:p-8 group rounded-xl flex flex-col justify-center items-center space-y-3 my-transition grayscale hover:grayscale-0 text-center ring-1 ring-ring-color overflow-hidden hover:scale-y-110 transition transform" >
                                <img className="size-[90px] my-transition group-hover:animate-bounce group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/n7KcsPK/github.png" alt="" />
                                <p className="text-2xl font-semi-bold text-[#076aa5]">62%</p>
                                <h1 className="text-xl font-semi-bold text-[#076aa5]">Github</h1>
                            </div>

                            <div className="bg-main-bg dark:bg-primary/60 dark:ring-gray-800 bg-slate-200  p-6 md:p-8 group rounded-xl flex flex-col justify-center items-center space-y-3 my-transition grayscale hover:grayscale-0 text-center ring-1 ring-ring-color overflow-hidden hover:scale-y-110 transition transform" >
                                <img className="size-[90px] my-transition group-hover:animate-bounce group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/gJNnM1S/git.png" alt="" />
                                <p className="text-2xl font-semi-bold text-[#076aa5]">40%</p>
                                <h1 className="text-xl font-semi-bold text-[#076aa5]">Git</h1>
                            </div>

                            <div className="bg-main-bg dark:bg-primary/60 dark:ring-gray-800 bg-slate-200  p-6 md:p-8 group rounded-xl flex flex-col justify-center items-center space-y-3 my-transition grayscale hover:grayscale-0 text-center ring-1 ring-ring-color overflow-hidden hover:scale-y-110 transition transform" >
                                <img className="size-[90px] my-transition group-hover:animate-bounce group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/Zd51cmf/npm.png" alt="" />
                                <p className="text-2xl font-semi-bold text-[#076aa5]">76%</p>
                                <h1 className="text-xl font-semi-bold text-[#076aa5]">npm</h1>
                            </div>

                            <div className="bg-main-bg dark:bg-primary/60 dark:ring-gray-800 bg-slate-200  p-6 md:p-8 group rounded-xl flex flex-col justify-center items-center space-y-3 my-transition grayscale hover:grayscale-0 text-center ring-1 ring-ring-color overflow-hidden hover:scale-y-110 transition transform" >
                                <img className="size-[90px] my-transition group-hover:animate-bounce group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/wpkXMh2/adobe-photoshop.png" alt="" />
                                <p className="text-2xl font-semi-bold text-[#076aa5]">70%</p>
                                <h1 className="text-xl font-semi-bold text-[#076aa5]">Adebe Photoshop</h1>
                            </div>

                            <div className="bg-main-bg dark:bg-primary/60 dark:ring-gray-800 bg-slate-200  p-6 md:p-8 group rounded-xl flex flex-col justify-center items-center space-y-3 my-transition grayscale hover:grayscale-0 text-center ring-1 ring-ring-color overflow-hidden hover:scale-y-110 transition transform" >
                                <img className="size-[90px] my-transition group-hover:animate-bounce group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/sQ6mHJw/figma.png" alt="" />
                                <p className="text-2xl font-semi-bold text-[#076aa5]">52%</p>
                                <h1 className="text-xl font-semi-bold text-[#076aa5]">Figma</h1>
                            </div>

                            <div className="bg-main-bg dark:bg-primary/60 dark:ring-gray-800 bg-slate-200  p-6 md:p-8 group rounded-xl flex flex-col justify-center items-center space-y-3 my-transition grayscale hover:grayscale-0 text-center ring-1 ring-ring-color overflow-hidden hover:scale-y-110 transition transform" >
                                <img className="size-[90px] my-transition group-hover:animate-bounce group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/mG9Psfn/pixso.png" alt="" />
                                <p className="text-2xl font-semi-bold text-[#076aa5]">87%</p>
                                <h1 className="text-xl font-semi-bold text-[#076aa5]">Pixco</h1>
                            </div>




                        </div>
                    </div>
                </div>


                <div id="about" className="bg-[#e7e7e7] rounded-lg z-20 bg-no-repeat bg-cover bg-fixed" style={{ backgroundImage: "url(https://library-2dd53.web.app/assets/img-pattern-BMHvzNkC.png)" }}>
                    {/* project card secton */}
                    <div id="title" className=" z-20 grid grid-cols-2 md:grid-cols-4 justify-evenly items-center mt-10 bg-[#e7e7e7] p-8 rounded-lg " >

                        <div className="flex flex-col jusitify-center items-center gap-2 ">
                            <TfiCup size={30}></TfiCup>
                            <h1 className="text-2xl font-bold text-black">36%</h1>
                            <h1 className="font-bold text-center text-black" >Job <span className="">Achivment</span></h1>
                        </div>
                        <div className="flex flex-col jusitify-center items-center gap-2 ">
                            <MdOutlineDateRange size={30}  ></MdOutlineDateRange>
                            <h1 className="text-2xl font-bold">01+</h1>
                            <h1 className="font-bold text-center" >Year of <span className="">Experience</span></h1>

                        </div>
                        <div className="flex flex-col jusitify-center items-center gap-2 ">
                            <BsEmojiHeartEyes size={30} ></BsEmojiHeartEyes>
                            <h1 className="text-2xl font-bold">05</h1>
                            <h1 className="font-bold text-center" >Happy <span className="">Clients</span></h1>
                        </div>
                        <div className="flex flex-col jusitify-center items-center gap-2 ">
                            <FaDropbox size={30} ></FaDropbox>
                            <h1 className="text-2xl font-bold">40+</h1>
                            <h1 id="title" className="font-bold text-center" >Total <span className="">Projects</span></h1>
                        </div>


                    </div>

                </div>
            </div>
        </div>



    );
};

export default Skills;