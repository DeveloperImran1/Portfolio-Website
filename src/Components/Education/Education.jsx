import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import Title from "../Shared/Title";

const Education = () => {
    return (
        <div className="bg-white rounded-2xl">
            <div id="education" className="space-y-2 text-center mb-6 mt-[50px] md:mt-[80px] pt-8 ">
            
                <Title title={"Education & Courses"} description={""}></Title>
            </div>

            <div className=" p-8 mx-auto  flex flex-col md:flex-row  justify-between gap-[70px]">
                <div>
                    <h1 className="text-3xl font-semibold mb-9">Education</h1>
                    <ol className="relative border-s border-gray-200 ">

                        <li className="ms-4 mt-14">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>

                            <h3 className="text-[20px] font-semibold text-gray-900 ">Diploma in Engineering</h3>
                            <p className="text-[18px] font-normal mt-1 my-4 text-black ">Thakurjaon Polytechnic Institute, Thakurgaon.</p>
                            <time className=" my-4 text-sm font-normal leading-none text-black ">2022-2023</time>
                            <br />
                            <time className=" my-4 text-sm font-normal leading-none text-gray-600 ">GPA: 3.64</time>

                        </li>
                        <li className="ms-4 mt-14">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>

                            <h3 className="text-[20px] font-semibold text-gray-900 ">Programing Club</h3>
                            <p className="text-[18px] font-normal mt-1 my-4 text-black ">Thakurgaon Polytechnic Institute Computer Programming Club (TPI CPC)</p>
                            <time className=" my-4 text-sm font-normal leading-none text-black ">2023-2024</time>
                            <br />
                            <time className=" my-4 text-sm font-normal leading-none text-gray-600 ">Team Work, Programming Contest, Technical Workshops</time>

                        </li>
                        
                        <li className="ms-4 mt-14">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>

                            <h3 className="text-[20px] font-semibold text-gray-900 ">Higher School Certificate</h3>
                            <p className="text-[18px] font-normal mt-1 my-4 text-black ">TMSS Polytechnic Institute, Joypurhat.</p>
                            <time className=" my-4 text-sm font-normal leading-none text-black ">2021-2022</time>
                            <br />

                            <time className=" my-4 text-sm font-normal leading-none text-gray-600 ">GPA: 4.64</time>

                        </li>
                    </ol>
                </div>

                <div>
                    <h1 className="text-3xl font-semibold mb-9">Courses</h1>
                    <ol className="relative border-s border-gray-200 ">
                        <li className="ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>

                            <h3 className="text-[20px] font-semibold text-gray-900 ">Complete Web Development Course</h3>
                            <p className="text-[18px] font-normal mt-1 my-4 text-black ">Programing Hero.</p>
                            <time className=" my-4 text-sm font-normal leading-none text-black ">December 2023 - December 2024</time>
                            <Link target="_blank" to="https://drive.google.com/file/d/1wflvCS6Mqr-9n3C3yQuVLWIkq9yH0O_3/view?usp=sharing" >
                                <button className="animate-button rounded-3xl mt-2 border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={18}></FaLink>Certificate</button>
                            </Link>

                        </li>
                        <li className="ms-4 mt-14">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>

                            <h3 className="text-[20px] font-semibold text-gray-900 ">Communication Hacks</h3>
                            <p className="text-[18px] font-normal mt-1 my-4 text-black ">10 Minute School</p>
                            <time className=" my-4 text-sm font-normal leading-none text-black ">June 2024 - July 2024</time>
                            <Link target="_blank" to="https://10minuteschool.com/certificate/667834e30b629/" >
                                <button className="animate-button rounded-3xl mt-2 border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={18}></FaLink>Certificate</button>
                            </Link>
                        </li>

                        <li className="ms-4 mt-14">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>

                            <h3 className="text-[20px] font-semibold text-gray-900 ">Email Writing</h3>
                            <p className="text-[18px] font-normal mt-1 my-4 text-black ">10 Minute School</p>
                            <time className=" my-4 text-sm font-normal leading-none text-black ">June 2024 - July 2024</time>
                            <Link target="_blank" to="https://10minuteschool.com/certificate/66885d30c8e72" >
                                <button className="animate-button rounded-3xl mt-2 border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={18}></FaLink>Certificate</button>
                            </Link>
                        </li>
                    </ol>
                </div>

            </div>



        </div>
    );
};

export default Education;