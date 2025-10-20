
import Title from "@/components/Shared/Title";
import Lottie from "lottie-react";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import ExperienceAnimation from "../../../../public/ExperienceAnimation.json";

const Experience = () => {
    return (
        <div>
            <div id="experience" className="bg-white mt-[50px] lg:mt-[70px] rounded-2xl " >
                <p className="pt-11">
                    <Title title={"Professional Experience"} description={""}></Title>
                </p>

                <div className="flex flex-col-reverse  lg:flex-row justify-between gap-11 p-6 z-50 " >

                    <div className="relative lg:max-w-[37vw]" >

                        <h1 className="text-xl font-semibold text-start" >Front-End Web Developer (Part-Time) | Book Vila</h1>
                        <p className="text-base my-1">November 2024 - Present</p>
                        <p className="text-base my-3">Contributed to the development and maintenance of Book Vila, an e-commerce platform for online book sales, ensuring responsive design, dynamic features, and optimal user experience.</p>

                        <h3 className="text-[17px] font-semibold mt-8 mb-3" >Key Responsibilities and Achievements:</h3>
                        <ul>
                            <li className="flex justify-start items-start gap-2" >
                                <span>1. Designed and developed the Book Vila website using React.js with a responsive, user-focused approach.</span>

                            </li>
                            <li className="flex justify-start items-start gap-2 my-2" >
                                <span>2. Implemented dynamic features to enhance engagement and streamline the purchasing experience.</span>

                            </li>
                            <li className="flex justify-start items-start gap-2" >
                                <span>3. Maintained and updated the platform with new features, ensuring seamless functionality.</span>

                            </li>


                        </ul>

                        <div className="" >


                            <div data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom" className="mt-9 " >
                                <Link target="_blank" href="https://www.facebook.com/bookvilabd" >
                                    <button className="animate-button rounded-3xl border-2 border-sky-500 px-1 md:px-3 py-1 lg:py-2 text-[12px] lg:text-[15px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={18}></FaLink>Book Vila</button>
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className="lg:w-[50%]" data-aos="zoom-in-up" >
                            <Lottie animationData={ExperienceAnimation} />
                        </div>
                </div>

            </div>


        </div>
    );
};

export default Experience;



