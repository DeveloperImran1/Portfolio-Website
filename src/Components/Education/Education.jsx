import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const Education = () => {
    return (
        <div>
            <div id="education" className="space-y-2 text-center mb-6 mt-[50px] md:mt-[80px] ">
                <h1
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="text-[40px] font-bold text-[#131313] text-center max-w-full ">Education & Courses</h1>


            </div>

            <div className="bg-[#bfdbfe] p-8 mx-auto rounded-2xl flex justify-between gap-[70px]">
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
                                <button className="rounded-3xl mt-2 border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={18}></FaLink>Certificate</button>
                            </Link>

                        </li>
                    </ol>
                </div>

            </div>



        </div>
    );
};

export default Education;