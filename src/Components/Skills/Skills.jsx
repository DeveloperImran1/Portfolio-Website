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
import { FiUsers } from 'react-icons/fi';



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
    const [isFlipped15, setIsFlipped15] = useState(false);
    const handleClick15 = (e) => {
        e.preventDefault();
        setIsFlipped15((prevIsFlipped) => !prevIsFlipped);
    };
    const [isFlipped16, setIsFlipped16] = useState(false);
    const handleClick16 = (e) => {
        e.preventDefault();
        setIsFlipped16((prevIsFlipped) => !prevIsFlipped);
    };
    const [isFlipped17, setIsFlipped17] = useState(false);
    const handleClick17 = (e) => {
        e.preventDefault();
        setIsFlipped17((prevIsFlipped) => !prevIsFlipped);
    };
    const [isFlipped18, setIsFlipped18] = useState(false);
    const handleClick18 = (e) => {
        e.preventDefault();
        setIsFlipped18((prevIsFlipped) => !prevIsFlipped);
    };
    
    const [isFlipped19, setIsFlipped19] = useState(false);
    const handleClick19 = (e) => {
        e.preventDefault();
        setIsFlipped19((prevIsFlipped) => !prevIsFlipped);
    };

    const [isFlipped20, setIsFlipped20] = useState(false);
    const handleClick20 = (e) => {
        e.preventDefault();
        setIsFlipped20((prevIsFlipped) => !prevIsFlipped);
    };






    return (

        <div id="skills" className="mt-[80px] " >


            <Title title={"My Skills"} description={"Here are some front-end, back-end, and other tools and technologies. This technologys know and I use in my professional projects."}></Title>
            <div className="relative mx-[10px] md:mx-0 -z-0">

                <div className="mb-[60px] relative z-20  " >
                    <h1 className="text-2xl my-3">Front-End Technology</h1>
                    <div style={{ willChange: 'transform', transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s', transform: 'perspective(600px) rotateX(0deg) scale3d(1, 1, 1)' }}>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5" >



                            <div onMouseEnter={handleClick1} onMouseLeave={handleClick1}>
                                <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">

                                    <div className="bg-white    p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-smoth-bounce  transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/Ns0mvQf/html5.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px]    text-white   group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                        <h1 className="text-xl font-semi-bold px-6 md:px-8">HTML5</h1>
                                        <p className="text-[16px]  ">Completed Project 40+</p>
                                    </div>
                                </ReactCardFlip>

                            </div>

                            <div onMouseEnter={handleClick2} onMouseLeave={handleClick2}>
                                <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">

                                    <div className="bg-white    p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-smoth-bounce transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/1GzSwm8/css3.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px]    text-white group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                        <h1 className="text-xl font-semi-bold px-6 md:px-8">CSS3</h1>
                                        <p className="text-[16px]  ">Completed Project 40+</p>
                                    </div>
                                </ReactCardFlip>

                            </div>

                            <div onMouseEnter={handleClick3} onMouseLeave={handleClick3}>
                                <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">

                                    <div className="bg-white    p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-smoth-bounce transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/2ZfCjX0/tailwindcss.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px]    text-white group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                   
                                        <h1 className="text-xl font-semi-bold px-6 md:px-8">Tailwind CSS</h1>
                                        <p className="text-[16px]  ">Completed Project 35+</p>
                                    </div>
                                </ReactCardFlip>

                            </div>

                            <div onMouseEnter={handleClick4} onMouseLeave={handleClick4}>
                                <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">

                                    <div className="bg-white    p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-smoth-bounce transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/VBJgmgv/javascript.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px]    text-white  group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                        <h1 className="text-xl font-semi-bold px-6 md:px-8">Javascript</h1>
                                        <p className="text-[16px]  ">Completed Project 32</p>
                                    </div>
                                </ReactCardFlip>

                            </div>


                            <div onMouseEnter={handleClick5} onMouseLeave={handleClick5}>
                                <ReactCardFlip isFlipped={isFlipped5} flipDirection="horizontal">

                                    <div className="bg-white    p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-smoth-bounce transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/sW5JBYT/reactjs.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px]    text-white group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                        <h1 className="text-xl font-semi-bold px-6 md:px-8">ReactJS</h1>
                                        <p className="text-[16px]  ">Completed Project 25</p>
                                    </div>
                                </ReactCardFlip>

                            </div>


                            <div onMouseEnter={handleClick16} onMouseLeave={handleClick16}>
                                <ReactCardFlip isFlipped={isFlipped16} flipDirection="horizontal">

                                    <div className="bg-white    p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-smoth-bounce transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.postimg.cc/yN5PwLjT/nextjs-icon-512x512-11yvtwzn.png" alt="" />
                                    </div>

                                    <div className="bg-[#007ec3] h-[150px]    text-white group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                        <h1 className="text-xl font-semi-bold px-6 md:px-8">Next JS</h1>
                                        <p className="text-[16px]  ">Completed Project 5</p>
                                    </div>
                                </ReactCardFlip>

                            </div>


                            <div onMouseEnter={handleClick17} onMouseLeave={handleClick17}>
                                <ReactCardFlip isFlipped={isFlipped17} flipDirection="horizontal">

                                    <div className="bg-white    p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-smoth-bounce transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co.com/vHMjW41/logo-sm.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px]    text-white group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                        <h1 className="text-xl font-semi-bold px-6 md:px-8">Next Auth</h1>
                                        <p className="text-[16px]  ">Completed Project 5</p>
                                    </div>
                                </ReactCardFlip>

                            </div>


                            <div onMouseEnter={handleClick18} onMouseLeave={handleClick18}>
                                <ReactCardFlip isFlipped={isFlipped18} flipDirection="horizontal">

                                    <div className="bg-white    p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-smoth-bounce transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co.com/D5fcb4M/Firebase-logo-02.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px]    text-white group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                        <h1 className="text-xl font-semi-bold px-6 md:px-8">Firebase</h1>
                                        <p className="text-[16px]  ">Completed Project 30+</p>
                                    </div>
                                </ReactCardFlip>

                            </div>


                            <div onMouseEnter={handleClick19} onMouseLeave={handleClick19}>
                                <ReactCardFlip isFlipped={isFlipped19} flipDirection="horizontal">

                                    <div className="bg-white    p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-smoth-bounce transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co.com/HDyTSmy/socket-io-logo-icon-144874.webp" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px]    text-white group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                        <h1 className="text-xl font-semi-bold px-6 md:px-8">Socket.io</h1>
                                        <p className="text-[16px]  ">Beginer</p>
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

                                    <div className="bg-white    p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-smoth-bounce transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/g6D3GsT/nodejs.png" alt="" />

                                    </div>
                                    <div className="bg-[#007ec3] h-[150px]    text-white group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                        <h1 className="text-xl font-semi-bold px-6 md:px-8">Node JS</h1>
                                        <p className="text-[16px]  ">Completed Project 18+</p>
                                    </div>
                                </ReactCardFlip>

                            </div>



                            <div onMouseEnter={handleClick7} onMouseLeave={handleClick7}>
                                <ReactCardFlip isFlipped={isFlipped7} flipDirection="horizontal">

                                    <div className="bg-white    p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-smoth-bounce transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/wJDDjpc/expressjs.png" alt="" />

                                    </div>
                                    <div className="bg-[#007ec3] h-[150px]    text-white group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                        <h1 className="text-xl font-semi-bold px-6 md:px-8">Express JS</h1>
                                        <p className="text-[16px]  ">Completed Project 17+</p>
                                    </div>
                                </ReactCardFlip>

                            </div>
                            <div onMouseEnter={handleClick8} onMouseLeave={handleClick8}>
                                <ReactCardFlip isFlipped={isFlipped8} flipDirection="horizontal">

                                    <div className="bg-white    p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-smoth-bounce transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/WGVjtbX/mongodb.png" alt="" />

                                    </div>
                                    <div className="bg-[#007ec3] h-[150px]    text-white group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                        <h1 className="text-xl font-semi-bold px-6 md:px-8">Mongo DB</h1>
                                        <p className="text-[16px]  ">Completed Project 17</p>
                                    </div>
                                </ReactCardFlip>

                            </div>

                            <div onMouseEnter={handleClick20} onMouseLeave={handleClick20}>
                                <ReactCardFlip isFlipped={isFlipped20} flipDirection="horizontal">

                                    <div className="bg-white    p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-smoth-bounce transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.postimg.cc/jdXhsxv2/bg-f8f8f8-flat-750x-075-f-pad-750x1000-f8f8f8.jpg" alt="" />

                                    </div>
                                    <div className="bg-[#007ec3] h-[150px]    text-white group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                        <h1 className="text-xl font-semi-bold px-6 md:px-8">Mongoose</h1>
                                        <p className="text-[16px]  ">Completed Project 5</p>
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

                                    <div className="bg-white    p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-smoth-bounce transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/n7KcsPK/github.png" alt="" />

                                    </div>
                                    <div className="bg-[#007ec3] h-[150px]    text-white group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                        <h1 className="text-xl font-semi-bold px-6 md:px-8">Github</h1>
                                        <p className="text-[16px]  ">Expert</p>
                                    </div>
                                </ReactCardFlip>

                            </div>

                            <div onMouseEnter={handleClick10} onMouseLeave={handleClick10}>
                                <ReactCardFlip isFlipped={isFlipped10} flipDirection="horizontal">

                                    <div className="bg-white    p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-smoth-bounce transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/gJNnM1S/git.png" alt="" />

                                    </div>
                                    <div className="bg-[#007ec3] h-[150px]    text-white group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                        <h1 className="text-xl font-semi-bold px-6 md:px-8">Github</h1>
                                        <p className="text-[16px]  ">Advanced</p>
                                    </div>

                                </ReactCardFlip>

                            </div>
                            <div onMouseEnter={handleClick11} onMouseLeave={handleClick11}>
                                <ReactCardFlip isFlipped={isFlipped11} flipDirection="horizontal">

                                    <div className="bg-white    p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-smoth-bounce transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/Zd51cmf/npm.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px]    text-white group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                        <h1 className="text-xl font-semi-bold px-6 md:px-8">npm</h1>
                                        <p className="text-[16px]  ">40+ npm package used</p>
                                    </div>
                                </ReactCardFlip>

                            </div>

                            <div onMouseEnter={handleClick12} onMouseLeave={handleClick12}>
                                <ReactCardFlip isFlipped={isFlipped12} flipDirection="horizontal">

                                    <div className="bg-white    p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-smoth-bounce transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/wpkXMh2/adobe-photoshop.png" alt="" />

                                    </div>
                                    <div className="bg-[#007ec3] h-[150px]    text-white group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                        <h1 className="text-xl font-semi-bold px-6 md:px-8">Adebe Photoshop</h1>
                                        <p className="text-[16px]  ">Intermediate</p>
                                    </div>
                                </ReactCardFlip>

                            </div>

                            <div onMouseEnter={handleClick13} onMouseLeave={handleClick13}>
                                <ReactCardFlip isFlipped={isFlipped13} flipDirection="horizontal">

                                    <div className="bg-white    p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-smoth-bounce transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/sQ6mHJw/figma.png" alt="" />

                                    </div>

                                    <div className="bg-[#007ec3] h-[150px]    text-white group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                        <h1 className="text-xl font-semi-bold px-6 md:px-8">Figma</h1>
                                        <p className="text-[16px]  ">Expert</p>
                                    </div>
                                </ReactCardFlip>

                            </div>

                            <div onMouseEnter={handleClick14} onMouseLeave={handleClick14}>
                                <ReactCardFlip isFlipped={isFlipped14} flipDirection="horizontal">

                                    <div className="bg-white    p-6 md:p-8 group  flex flex-col justify-center items-center space-y-3 my-transition h-[150px]  text-center ring-1 ring-ring-color overflow-hidden  rounded-br-3xl rounded-tl-3xl  transition-all duration-300 ease-in-out transform delay-200" >
                                        <img className="size-[90px] animate-smoth-bounce transition-all duration-300 ease-in-out transform delay-200   group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/mG9Psfn/pixso.png" alt="" />

                                    </div>
                                    <div className="bg-[#007ec3] h-[150px]    text-white group  flex flex-col justify-center items-center space-y-3 my-transition  text-center ring-1 ring-ring-color overflow-hidden  rounded-tr-3xl rounded-bl-3xl  transition-all duration-300 ease-in-out transform delay-200 hover:rotateY-(90)" >
                                        <h1 className="text-xl font-semi-bold px-6 md:px-8">Pixco</h1>
                                        <p className="text-[16px]  ">Expert</p>
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
                            <h1 className="font-bold text-center text-black" > <span className="">Top Performing <br></br> Team Leader</span></h1>
                        </div>
                        <div className="flex flex-col jusitify-center items-center gap-2 ">
                            <FiUsers size={30}  ></FiUsers>
                            <h1 className="text-2xl font-bold">08+</h1>
                            <h1 className="font-bold text-center" ><span className="">Team Project</span></h1>

                        </div>
                        <div className="flex flex-col jusitify-center items-center gap-2 ">
                            <BsEmojiHeartEyes size={30} ></BsEmojiHeartEyes>
                            <h1 className="text-2xl font-bold">02</h1>
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