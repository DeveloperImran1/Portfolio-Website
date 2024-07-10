
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { IoMdArrowRoundForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';


const BlogsCard = ({ blog }) => {
    const [bookMark, setBookmark] = useState(false);
    const [clients, setClients] = useState([])
    const [hoverd, setHoverd] = useState(false);


    const { _id, comments, content, date, image, title, userName, userProfileImage } = blog;

    const handleReact = ()=> {
        toast('', {
            icon: '❤️',
          });
    }

    return (


        <div className="mx-auto max-w-[350px] space-y-6 rounded-xl bg-white px-4 pb-8 pt-4 font-sans shadow-lg  dark:bg-[#18181B]">
            <Link to={`/blog/${_id}`} className="relative flex h-48 w-full justify-center lg:h-[280px] border-2">
                <Swiper
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}

                    modules={[Autoplay]}
                    className="mySwiper h-full"
                >
                    <SwiperSlide>
                        <div className="relative group">

                            <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                                {/* love  */}
                                <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">
                                    { formatDistanceToNow(new Date(date))} ago
                                </button>
                            </div>

                            <img width={300} height={300} className="h-[300px] w-full rounded-lg bg-black/40" src={image?.[0] || 'https://source.unsplash.com/300x300/?macbook'} alt="card navigate ui" />
                            <div className=" size-1 p-[3px]  flex justify-center items-center absolute top-3 right-1 group-hover:w-full group-hover:h-full group-hover:top-0 group-hover:right-0 group-hover:bg-blue-100/60 duration-500 transition-all">

                                <svg width={30} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#0095FF"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><title>male [#1364]</title> <desc>Created with Sketch.</desc> <defs> </defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-60.000000, -2079.000000)" fill="#0095FF"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M11,1937.005 C8.243,1937.005 6,1934.762 6,1932.005 C6,1929.248 8.243,1927.005 11,1927.005 C13.757,1927.005 16,1929.248 16,1932.005 C16,1934.762 13.757,1937.005 11,1937.005 L11,1937.005 Z M16,1919 L16,1921 L20.586,1921 L15.186,1926.402 C14.018,1925.527 12.572,1925.004 11,1925.004 C7.134,1925.004 4,1928.138 4,1932.004 C4,1935.87 7.134,1939.005 11,1939.005 C14.866,1939.005 18,1935.871 18,1932.005 C18,1930.433 17.475,1928.987 16.601,1927.818 L22,1922.419 L22,1927 L24,1927 L24,1919 L16,1919 Z" id="male-[#1364]"></path></g></g></g> </g></svg>

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative group">
                        
                        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                                {/* love  */}
                                <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">
                                    { formatDistanceToNow(new Date(date))} ago
                                </button>
                            </div>
                            <img width={300} height={300} className="h-[300px] w-full rounded-lg bg-black/40" src={image?.[1] || 'https://source.unsplash.com/300x300/?macbook'} alt="card navigate ui" />
                            <div className=" size-1 p-[3px]  flex justify-center items-center absolute top-3 right-1 group-hover:w-full group-hover:h-full group-hover:top-0 group-hover:right-0 group-hover:bg-blue-100/60 duration-500 transition-all">

                                <svg width={30} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#0095FF"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><title>male [#1364]</title> <desc>Created with Sketch.</desc> <defs> </defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-60.000000, -2079.000000)" fill="#0095FF"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M11,1937.005 C8.243,1937.005 6,1934.762 6,1932.005 C6,1929.248 8.243,1927.005 11,1927.005 C13.757,1927.005 16,1929.248 16,1932.005 C16,1934.762 13.757,1937.005 11,1937.005 L11,1937.005 Z M16,1919 L16,1921 L20.586,1921 L15.186,1926.402 C14.018,1925.527 12.572,1925.004 11,1925.004 C7.134,1925.004 4,1928.138 4,1932.004 C4,1935.87 7.134,1939.005 11,1939.005 C14.866,1939.005 18,1935.871 18,1932.005 C18,1930.433 17.475,1928.987 16.601,1927.818 L22,1922.419 L22,1927 L24,1927 L24,1919 L16,1919 Z" id="male-[#1364]"></path></g></g></g> </g></svg>

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative group">
                         
                        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                                {/* love  */}
                                <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">
                                    { formatDistanceToNow(new Date(date))} ago
                                </button>
                            </div>
                            <img width={300} height={300} className="h-[300px] w-full rounded-lg bg-black/40" src={image?.[2] || 'https://source.unsplash.com/300x300/?macbook'} alt="card navigate ui" />
                            <div className=" size-1 p-[3px]  flex justify-center items-center absolute top-3 right-1 group-hover:w-full group-hover:h-full group-hover:top-0 group-hover:right-0 group-hover:bg-blue-100/60 duration-500 transition-all">

                                <svg width={30} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#0095FF"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><title>male [#1364]</title> <desc>Created with Sketch.</desc> <defs> </defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-60.000000, -2079.000000)" fill="#0095FF"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M11,1937.005 C8.243,1937.005 6,1934.762 6,1932.005 C6,1929.248 8.243,1927.005 11,1927.005 C13.757,1927.005 16,1929.248 16,1932.005 C16,1934.762 13.757,1937.005 11,1937.005 L11,1937.005 Z M16,1919 L16,1921 L20.586,1921 L15.186,1926.402 C14.018,1925.527 12.572,1925.004 11,1925.004 C7.134,1925.004 4,1928.138 4,1932.004 C4,1935.87 7.134,1939.005 11,1939.005 C14.866,1939.005 18,1935.871 18,1932.005 C18,1930.433 17.475,1928.987 16.601,1927.818 L22,1922.419 L22,1927 L24,1927 L24,1919 L16,1919 Z" id="male-[#1364]"></path></g></g></g> </g></svg>

                            </div>
                        </div>

                    </SwiperSlide>




                </Swiper>


            </Link>
            <div className="mx-auto w-[90%] space-y-2  font-semibold">
                <div className="flex justify-between">
                    <h6 className="text-sm md:text-base text-gray-800 lg:text-lg">{title}</h6>
                    {/* <p className="px-3 h-6 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60">{`${Availability ? 'Available' : 'Unavailable'}`}</p> */}

                </div>
        
            </div>
            <div className="flex mx-auto flex-wrap w-[90%] items-center justify-between gap-6 text-sm md:text-base">
                <button onClick={handleReact} className={`flex items-center `}><svg onClick={() => setBookmark(!bookMark)} width={30} className={`fill-transparent stroke-gray-500 stroke-2  hover:fill-red-500 hover:stroke-red-500 ${bookMark && "stroke-red-500 fill-red-500"}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></g></svg></button>
                <Link  to={`/blog/${_id}`} onMouseEnter={() => setHoverd(true)} onMouseLeave={() => setHoverd(false)} className="border-2 icon-container rounded-full p-1 hover:bg-[#076aa5] border-[#076aa5] hover:text-white ease-in duration-300" >
                    {
                        hoverd ? <IoMdArrowRoundForward size={22} className="icon-hover ease-in duration-300" ></IoMdArrowRoundForward> : <MdArrowOutward size={22} className="icon-default ease-in duration-300" ></MdArrowOutward>
                    }
                </Link>
            </div>
        </div>
    );
};

export default BlogsCard;






