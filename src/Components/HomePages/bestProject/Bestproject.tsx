
import Title from "@/components/Shared/Title";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

const BestProject = () => {
    return (
        <div>


            <div id="bestProject" className="bg-white mt-[50px] lg:mt-[70px] rounded-2xl " >
                <p className="pt-11">
                    <Title title={"Best Project With Team"} description={""}></Title>
                </p>

                <div className="flex flex-col-reverse  lg:flex-row justify-between gap-11 p-6 z-50 " >

                    <div className="relative lg:max-w-[37vw]" >

                        <h1 className="text-xl font-semibold text-start" >Revolutionizing Event Management with Smart Features</h1>
                        <p className="text-base my-1">September 2024 - November 2024</p>
                        <p className="text-base my-3">Led the development team as Team Leader to create EventSphere, a smart event management platform with AR tours, secure ticketing, and AI-powered recommendations.</p>

                        <h3 className="text-[17px] font-semibold mt-8 mb-3" >Key Features:</h3>
                        <ul>
                            <li className="flex justify-start items-start gap-2" >
                                <span><strong>1. Smart Event Management:</strong> Role-based access control for admins, organizers, and users, with secure payments and AI-based event recommendations.</span>

                            </li>
                            <li className="flex justify-start items-start gap-2 my-2" >
                                <span><strong>2. Innovative User Experience:</strong> AR venue tours, dynamic seat selection, and multilingual support for seamless global accessibility.</span>

                            </li>


                        </ul>

                        <div className="flex gap-3" >


                            <div data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom" className="mt-9 " >
                                <Link target="_blank" href="https://github.com/DeveloperImran1/EventSphere" >
                                    <button className="animate-button rounded-3xl border-2 border-sky-500 px-1 md:px-3 py-1 lg:py-2 text-[12px] lg:text-[15px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink className="hidden lg:block" size={18}></FaLink>Client Side</button>
                                </Link>
                            </div>
                            <div data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom" className="mt-9 " >
                                <Link target="_blank" href="https://github.com/DeveloperImran1/EventSphare-Server" >
                                    <button className="animate-button rounded-3xl border-2 border-sky-500 px-1 md:px-3 py-1 lg:py-2 text-[12px] lg:text-[15px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink className="hidden lg:block" size={18}></FaLink>Server Side</button>
                                </Link>
                            </div>
                            <div data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom" className="mt-9 " >
                                <Link target="_blank" href="https://event-sphere-bice.vercel.app/" >
                                    <button className="animate-button rounded-3xl border-2 border-sky-500 px-1 md:px-3 py-1 lg:py-2 text-[12px] lg:text-[15px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink className="hidden lg:block" size={18}></FaLink>Live Link</button>
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div
                        className="lg:w-[50%] aspect-w-16 aspect-h-9"
                        data-aos="zoom-in-up"
                    >
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/1yaHesugsFM?si=bwlypqwcE4upva8a"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default BestProject;