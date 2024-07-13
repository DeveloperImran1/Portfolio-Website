import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import Title from "../Shared/Title";

const Education = () => {
    return (
        <div>
            <div id="education" className="space-y-2 text-center mb-6 mt-[50px] md:mt-[80px] ">
            
                <Title title={"Education & Courses"} description={""}></Title>
            </div>

            <div className="bg-white p-8 mx-auto rounded-2xl flex flex-col md:flex-row  justify-between gap-[70px]">
                <div>
                    <h1 className="text-3xl font-semibold mb-9">Education</h1>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700">

                        <li className="ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                            <h3 className="text-[20px] font-semibold text-gray-900 dark:text-white">Higher School Certificate</h3>
                            <p className="text-[18px] font-normal mt-1 my-4 text-black dark:text-gray-400">TMSS Polytechnic Institute, Joypurhat.</p>
                            <time className=" my-4 text-sm font-normal leading-none text-black dark:text-gray-500">2021-2022</time>
                            <br />

                            <time className=" my-4 text-sm font-normal leading-none text-gray-600 dark:text-gray-500">GPA: 4.64</time>

                        </li>
                        <li className="ms-4 mt-14">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                            <h3 className="text-[20px] font-semibold text-gray-900 dark:text-white">Diploma in Engineering</h3>
                            <p className="text-[18px] font-normal mt-1 my-4 text-black dark:text-gray-400">Thakurjaon Polytechnic Institute, Thakurgaon.</p>
                            <time className=" my-4 text-sm font-normal leading-none text-black dark:text-gray-500">2022-2023</time>
                            <br />
                            <time className=" my-4 text-sm font-normal leading-none text-gray-600 dark:text-gray-500">GPA: 3.64</time>

                        </li>
                    </ol>
                </div>

                <div>
                    <h1 className="text-3xl font-semibold mb-9">Courses</h1>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700">
                        <li className="ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                            <h3 className="text-[20px] font-semibold text-gray-900 dark:text-white">Complete Web Development Course</h3>
                            <p className="text-[18px] font-normal mt-1 my-4 text-black dark:text-gray-400">Programing Hero.</p>
                            <time className=" my-4 text-sm font-normal leading-none text-black dark:text-gray-500">December 2023 - December 2024</time>
                            <Link to="https://room-intel.netlify.app/" >
                                <button className="animate-button rounded-3xl mt-2 border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={18}></FaLink>Certificate</button>
                            </Link>

                        </li>
                        <li className="ms-4 mt-14">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

                            <h3 className="text-[20px] font-semibold text-gray-900 dark:text-white">Communication Hacks</h3>
                            <p className="text-[18px] font-normal mt-1 my-4 text-black dark:text-gray-400">10 Minute School</p>
                            <time className=" my-4 text-sm font-normal leading-none text-black dark:text-gray-500">June 2024 - July 2024</time>
                            <Link to="https://10minuteschool.com/certificate/667834e30b629/" >
                                <button className="animate-button rounded-3xl mt-2 border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={18}></FaLink>Certificate</button>
                            </Link>
                            {/* <button className="animate-button rounded-3xl border-2 border-sky-500 px-1 md:px-3 py-1 lg:py-2 text-[12px] lg:text-[15px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white">Send Message</button> */}


                        </li>
                    </ol>
                </div>

            </div>



        </div>
    );
};

export default Education;