import { FaDropbox } from "react-icons/fa";
import 'animate.css';
import Title from "../Shared/Title";

const Skills = () => {
    return (
        <div id="skills" className="mt-[80px]" >
            

            <Title title={"My Skills"} description={"Here are some front-end, back-end, and other tools and technologies. This technologys know and I use in my professional projects."}></Title>
            <div className="mb-[60px]" >
                <h1 className="text-2xl my-3">Front-End Technology</h1>
                <div style={{ willChange: 'transform', transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s', transform: 'perspective(600px) rotateX(0deg) scale3d(1, 1, 1)' }}>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5" >
                        <div className="bg-main-bg dark:bg-primary/60 dark:ring-gray-800 bg-slate-200  p-6 md:p-8 group rounded-xl flex flex-col justify-center items-center space-y-3 my-transition grayscale hover:grayscale-0 text-center ring-1 ring-ring-color overflow-hidden hover:scale-y-110 transition transform" >
                            <img className="size-[90px] my-transition group-hover:animate-bounce group-hover:shadow-md p-2 rounded-xl object-cover overflow-hidden" src="https://i.ibb.co/Ns0mvQf/html5.png" alt="" />
                            <p className="text-2xl font-semi-bold text-[#076aa5]">92%</p>
                            <h1 className="text-xl font-semi-bold text-[#076aa5]">HTML5</h1>
                        </div>


                        <div className="bg-main-bg dark:bg-primary/60 dark:ring-gray-800 bg-slate-200  p-6 md:p-8 group rounded-xl flex flex-col justify-center items-center space-y-3 my-transition grayscale hover:grayscale-0 text-center ring-1 ring-ring-color overflow-hidden hover:scale-y-110 transition transform" >
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

            <div className="mb-[60px]" >
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

            <div className="mb-[60px]" >
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

        </div>
    );
};

export default Skills;