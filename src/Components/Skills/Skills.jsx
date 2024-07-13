import { FaDropbox } from "react-icons/fa";
import 'animate.css';
import Title from "../Shared/Title";
import { TfiCup } from "react-icons/tfi";
import { MdOutlineDateRange } from "react-icons/md";
import { BsEmojiHeartEyes } from "react-icons/bs";
import './ButtonStyle.css'
import ReactCardFlip from 'react-card-flip';
import YOUR_BACK_COMPONENT from 'react-card-flip';
import YOUR_FRONT_CCOMPONENT from 'react-card-flip';
import { useState } from "react";


const Skills = () => {
    const [isFlipped1, setIsFlipped1] = useState(false);
    const handleClick1 = (e) => {
        e.preventDefault();
        setIsFlipped1((prevIsFlipped) => !prevIsFlipped);
    };


    const [isFlipped2, setIsFlipped2] = useState(false);
    const handleClick2 = (e) => {
        e.preventDefault();
        setIsFlipped2((prevIsFlipped) => !prevIsFlipped);
    };


    const [isFlipped3, setIsFlipped3] = useState(false);
    const handleClick3 = (e) => {
        e.preventDefault();
        setIsFlipped3((prevIsFlipped) => !prevIsFlipped);
    };


    const [isFlipped4, setIsFlipped4] = useState(false);
    const handleClick4 = (e) => {
        e.preventDefault();
        setIsFlipped4((prevIsFlipped) => !prevIsFlipped);
    };


    const [isFlipped5, setIsFlipped5] = useState(false);
    const handleClick5 = (e) => {
        e.preventDefault();
        setIsFlipped5((prevIsFlipped) => !prevIsFlipped);
    };


    const [isFlipped6, setIsFlipped6] = useState(false);
    const handleClick6 = (e) => {
        e.preventDefault();
        setIsFlipped6((prevIsFlipped) => !prevIsFlipped);
    };


    const [isFlipped7, setIsFlipped7] = useState(false);
    const handleClick7 = (e) => {
        e.preventDefault();
        setIsFlipped7((prevIsFlipped) => !prevIsFlipped);
    };


    const [isFlipped8, setIsFlipped8] = useState(false);
    const handleClick8 = (e) => {
        e.preventDefault();
        setIsFlipped8((prevIsFlipped) => !prevIsFlipped);
    };


    const [isFlipped9, setIsFlipped9] = useState(false);
    const handleClick9 = (e) => {
        e.preventDefault();
        setIsFlipped9((prevIsFlipped) => !prevIsFlipped);
    };

    const [isFlipped10, setIsFlipped10] = useState(false);
    const handleClick10 = (e) => {
        e.preventDefault();
        setIsFlipped10((prevIsFlipped) => !prevIsFlipped);
    };

    const [isFlipped11, setIsFlipped11] = useState(false);
    const handleClick11 = (e) => {
        e.preventDefault();
        setIsFlipped11((prevIsFlipped) => !prevIsFlipped);
    };

    const [isFlipped12, setIsFlipped12] = useState(false);
    const handleClick12 = (e) => {
        e.preventDefault();
        setIsFlipped12((prevIsFlipped) => !prevIsFlipped);
    };

    const [isFlipped13, setIsFlipped13] = useState(false);
    const handleClick13 = (e) => {
        e.preventDefault();
        setIsFlipped13((prevIsFlipped) => !prevIsFlipped);
    };

    const [isFlipped14, setIsFlipped14] = useState(false);
    const handleClick14 = (e) => {
        e.preventDefault();
        setIsFlipped14((prevIsFlipped) => !prevIsFlipped);
    };






    return (

        <div id="skills" className="mt-[80px] " >

         
            <Title title={"My Skills"} description={"Here are some front-end, back-end, and other tools and technologies. This technologys know and I use in my professional projects."}></Title>
            <div className="relative -z-0">

                <div className="mb-[60px] relative z-20" >
                    <h1 className="text-2xl my-3">Front-End Technology</h1>
                    <div style={{ willChange: 'transform', transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s', transform: 'perspective(600px) rotateX(0deg) scale3d(1, 1, 1)' }}>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5" >

             

                            <div onMouseEnter={handleClick1} onMouseLeave={handleClick1}>
                                <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">

                                    <div className="bg-white dark:bg-primary/60 dark:ring-gray-800  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-bounce  transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/Ns0mvQf/html5.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px] dark:ring-gray-800 text-white  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                        <h1 className="text-xl font-semi-bold ">HTML5</h1>
                                        <p className="text-2xl font-semi-bold ">92%</p>
                                    </div>
                                </ReactCardFlip>

                            </div>

                            <div onMouseEnter={handleClick2} onMouseLeave={handleClick2}>
                                <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">

                                    <div className="bg-white dark:bg-primary/60 dark:ring-gray-800  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-bounce  transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/1GzSwm8/css3.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px] dark:ring-gray-800 text-white  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                    <h1 className="text-xl font-semi-bold">CSS3</h1>
                                    <p className="text-2xl font-semi-bold ">82%</p>
                                    </div>
                                </ReactCardFlip>

                            </div>

                            <div onMouseEnter={handleClick3} onMouseLeave={handleClick3}>
                                <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">

                                    <div className="bg-white dark:bg-primary/60 dark:ring-gray-800  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-bounce  transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/2ZfCjX0/tailwindcss.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px] dark:ring-gray-800 text-white  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                    <h1 className="text-xl font-semi-bold">Tailwind CSS</h1>
                                    <p className="text-2xl font-semi-bold ">90%</p>
                                    </div>
                                </ReactCardFlip>

                            </div>

                            <div onMouseEnter={handleClick4} onMouseLeave={handleClick4}>
                                <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">

                                    <div className="bg-white dark:bg-primary/60 dark:ring-gray-800  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-bounce  transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/VBJgmgv/javascript.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px] dark:ring-gray-800 text-white  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                    <h1 className="text-xl font-semi-bold">Javascript</h1>
                                    <p className="text-2xl font-semi-bold ">63%</p>
                                    </div>
                                </ReactCardFlip>

                            </div>


                            <div onMouseEnter={handleClick5} onMouseLeave={handleClick5}>
                                <ReactCardFlip isFlipped={isFlipped5} flipDirection="horizontal">

                                    <div className="bg-white dark:bg-primary/60 dark:ring-gray-800  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-bounce  transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/sW5JBYT/reactjs.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px] dark:ring-gray-800 text-white  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                    <h1 className="text-xl font-semi-bold">ReactJS</h1>
                                    <p className="text-2xl font-semi-bold ">68%</p>
                                    </div>
                                </ReactCardFlip>

                            </div>                      

                        </div>
                    </div>
                </div>

                <div className="mb-[60px] z-20" >
                    <h1 className="text-2xl my-3">Back-End Technology</h1>
                    <div style={{ willChange: 'transform', transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s', transform: 'perspective(600px) rotateX(0deg) scale3d(1, 1, 1)' }}>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5" >
                           

                            
                            <div onMouseEnter={handleClick6} onMouseLeave={handleClick6}>
                                <ReactCardFlip isFlipped={isFlipped6} flipDirection="horizontal">

                                    <div className="bg-white dark:bg-primary/60 dark:ring-gray-800  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-bounce  transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/g6D3GsT/nodejs.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px] dark:ring-gray-800 text-white  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                    <h1 className="text-xl font-semi-bold">Node JS</h1>
                                    <p className="text-2xl font-semi-bold ">73%</p>
                                    </div>
                                </ReactCardFlip>

                            </div>                      



                            <div onMouseEnter={handleClick7} onMouseLeave={handleClick7}>
                                <ReactCardFlip isFlipped={isFlipped7} flipDirection="horizontal">

                                    <div className="bg-white dark:bg-primary/60 dark:ring-gray-800  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-bounce  transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/wJDDjpc/expressjs.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px] dark:ring-gray-800 text-white  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                    <h1 className="text-xl font-semi-bold">Express JS</h1>
                                    <p className="text-2xl font-semi-bold ">68%</p>
                                    </div>
                                </ReactCardFlip>

                            </div>                      
                            <div onMouseEnter={handleClick8} onMouseLeave={handleClick8}>
                                <ReactCardFlip isFlipped={isFlipped8} flipDirection="horizontal">

                                    <div className="bg-white dark:bg-primary/60 dark:ring-gray-800  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-bounce  transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/WGVjtbX/mongodb.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px] dark:ring-gray-800 text-white  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                    <h1 className="text-xl font-semi-bold">Mongo DB</h1>
                                    <p className="text-2xl font-semi-bold ">52%</p>
                                    </div>
                                </ReactCardFlip>

                            </div>                      

                          



                        </div>
                    </div>
                </div>

                <div className="mb-[60px] z-20" >
                    <h1 className="text-2xl my-3">Others Technology</h1>
                    <div style={{ willChange: 'transform', transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s', transform: 'perspective(600px) rotateX(0deg) scale3d(1, 1, 1)' }}>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5" >
                         

                            <div onMouseEnter={handleClick9} onMouseLeave={handleClick9}>
                                <ReactCardFlip isFlipped={isFlipped9} flipDirection="horizontal">

                                    <div className="bg-white dark:bg-primary/60 dark:ring-gray-800  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-bounce  transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/n7KcsPK/github.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px] dark:ring-gray-800 text-white  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                    <h1 className="text-xl font-semi-bold">Github</h1>
                                    <p className="text-2xl font-semi-bold ">62%</p>
                                    </div>
                                </ReactCardFlip>

                            </div>                      

                            <div onMouseEnter={handleClick10} onMouseLeave={handleClick10}>
                                <ReactCardFlip isFlipped={isFlipped10} flipDirection="horizontal">

                                    <div className="bg-white dark:bg-primary/60 dark:ring-gray-800  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-bounce  transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/gJNnM1S/git.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px] dark:ring-gray-800 text-white  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                    <h1 className="text-xl font-semi-bold">Git</h1>
                                    <p className="text-2xl font-semi-bold ">52%</p>
                                    </div>
                                </ReactCardFlip>

                            </div>                      
                            <div onMouseEnter={handleClick11} onMouseLeave={handleClick11}>
                                <ReactCardFlip isFlipped={isFlipped11} flipDirection="horizontal">

                                    <div className="bg-white dark:bg-primary/60 dark:ring-gray-800  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-bounce  transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/Zd51cmf/npm.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px] dark:ring-gray-800 text-white  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                    <h1 className="text-xl font-semi-bold">npm</h1>
                                    <p className="text-2xl font-semi-bold ">76%</p>
                                    </div>
                                </ReactCardFlip>

                            </div>                      

                            <div onMouseEnter={handleClick12} onMouseLeave={handleClick12}>
                                <ReactCardFlip isFlipped={isFlipped12} flipDirection="horizontal">

                                    <div className="bg-white dark:bg-primary/60 dark:ring-gray-800  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-bounce  transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/wpkXMh2/adobe-photoshop.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px] dark:ring-gray-800 text-white  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                    <h1 className="text-xl font-semi-bold">Adebe Photoshop</h1>
                                    <p className="text-2xl font-semi-bold ">70%</p>
                                    </div>
                                </ReactCardFlip>

                            </div>                      

                            <div onMouseEnter={handleClick13} onMouseLeave={handleClick13}>
                                <ReactCardFlip isFlipped={isFlipped13} flipDirection="horizontal">

                                    <div className="bg-white dark:bg-primary/60 dark:ring-gray-800  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-bounce  transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/sQ6mHJw/figma.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px] dark:ring-gray-800 text-white  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                    <h1 className="text-xl font-semi-bold">Figma</h1>
                                    <p className="text-2xl font-semi-bold ">58%</p>
                                    </div>
                                </ReactCardFlip>

                            </div>                      

                            <div onMouseEnter={handleClick14} onMouseLeave={handleClick14}>
                                <ReactCardFlip isFlipped={isFlipped14} flipDirection="horizontal">

                                    <div className="bg-white dark:bg-primary/60 dark:ring-gray-800  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-bounce  transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/mG9Psfn/pixso.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px] dark:ring-gray-800 text-white  p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                    <h1 className="text-xl font-semi-bold">Pixco</h1>
                                    <p className="text-2xl font-semi-bold ">87%</p>
                                    </div>
                                </ReactCardFlip>

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