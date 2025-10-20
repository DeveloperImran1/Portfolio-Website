"use client";
import Loading from "@/components/shared/Loading";
import { useQuery } from "@tanstack/react-query";
import { format, formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

import useAxiosPublic from "@/hooks/useAxiosPublic";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogsCard from "../../components/Blogs/BlogsCard";

const Blogs = () => {
  const [page, setPage] = useState(1);

  const axiosPublic = useAxiosPublic();

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/blogs?page=${page}&limit=4`);
      return res?.data?.data;
    },
  });

  const totalPageArr = Array.from(
    { length: data?.meta?.totalPage },
    (_, i) => i + 1
  );

  console.log("data ", data);

  const handlePage = async (pageNumber) => {
    if (pageNumber < 1 || pageNumber > data?.meta?.totalPage) {
      return;
    }
    await setPage(pageNumber);
    refetch();
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div>
        <section className="">
          <div className="container lg:p-6 mx-auto space-y-6 sm:space-y-12">
            <a
              href={`/blogs/${data?.data?.[0]?._id}`}
              className="block max-w-sm gap-3 mx-auto sm:max-w-full  hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 "
            >
              <Link
                href={`/blogs/${data?.data?.[0]?._id}`}
                className="relative flex justify-center lg:h-[370px] border-2 object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 "
              >
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
                        {data?.data?.[0]?.createdAt && (
                          <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">
                            {formatDistanceToNow(
                              new Date(data?.data?.[0]?.createdAt)
                            )}{" "}
                            ago
                          </button>
                        )}
                      </div>

                      <Image
                        width={300}
                        height={370}
                        className="h-[370px] w-full rounded-lg bg-black/40"
                        src={
                          data?.data?.[0]?.thumbnail ||
                          "https://source.unsplash.com/300x300/?macbook"
                        }
                        alt="Blog Cover Image"
                      />
                      <div className=" size-1 p-[3px]  flex justify-center items-center absolute top-3 right-1 group-hover:w-full group-hover:h-full group-hover:top-0 group-hover:right-0 group-hover:bg-blue-100/60 duration-500 transition-all">
                        <svg
                          width={30}
                          viewBox="0 0 20 20"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          fill="#0095FF"
                        >
                          <g strokeWidth="0"></g>
                          <g strokeLinecap="round" strokeLinejoin="round"></g>
                          <g>
                            <title>male [#1364]</title>{" "}
                            <desc>Created with Sketch.</desc> <defs> </defs>
                            <g
                              id="Page-1"
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                transform="translate(-60.000000, -2079.000000)"
                                fill="#0095FF"
                              >
                                <g
                                  id="icons"
                                  transform="translate(56.000000, 160.000000)"
                                >
                                  <path
                                    d="M11,1937.005 C8.243,1937.005 6,1934.762 6,1932.005 C6,1929.248 8.243,1927.005 11,1927.005 C13.757,1927.005 16,1929.248 16,1932.005 C16,1934.762 13.757,1937.005 11,1937.005 L11,1937.005 Z M16,1919 L16,1921 L20.586,1921 L15.186,1926.402 C14.018,1925.527 12.572,1925.004 11,1925.004 C7.134,1925.004 4,1928.138 4,1932.004 C4,1935.87 7.134,1939.005 11,1939.005 C14.866,1939.005 18,1935.871 18,1932.005 C18,1930.433 17.475,1928.987 16.601,1927.818 L22,1922.419 L22,1927 L24,1927 L24,1919 L16,1919 Z"
                                    id="male-[#1364]"
                                  ></path>
                                </g>
                              </g>
                            </g>{" "}
                          </g>
                        </svg>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative group">
                      <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                        {data?.data?.[0]?.createdAt && (
                          <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">
                            {formatDistanceToNow(
                              new Date(data?.data?.[0]?.createdAt)
                            )}{" "}
                            ago
                          </button>
                        )}
                      </div>

                      <Image
                        width={300}
                        height={370}
                        className="h-[370px] w-full rounded-lg bg-black/40"
                        src={
                          "https://img.freepik.com/premium-photo/digital-trading-server-network-concept-vibrant-background-illustration-trading-dashboard-generative-ai_438099-21977.jpg?w=1060"
                        }
                        alt="Blog Cover Image"
                      />
                      <div className=" size-1 p-[3px]  flex justify-center items-center absolute top-3 right-1 group-hover:w-full group-hover:h-full group-hover:top-0 group-hover:right-0 group-hover:bg-blue-100/60 duration-500 transition-all">
                        <svg
                          width={30}
                          viewBox="0 0 20 20"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          fill="#0095FF"
                        >
                          <g strokeWidth="0"></g>
                          <g strokeLinecap="round" strokeLinejoin="round"></g>
                          <g>
                            <title>male [#1364]</title>{" "}
                            <desc>Created with Sketch.</desc> <defs> </defs>
                            <g
                              id="Page-1"
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                transform="translate(-60.000000, -2079.000000)"
                                fill="#0095FF"
                              >
                                <g
                                  id="icons"
                                  transform="translate(56.000000, 160.000000)"
                                >
                                  <path
                                    d="M11,1937.005 C8.243,1937.005 6,1934.762 6,1932.005 C6,1929.248 8.243,1927.005 11,1927.005 C13.757,1927.005 16,1929.248 16,1932.005 C16,1934.762 13.757,1937.005 11,1937.005 L11,1937.005 Z M16,1919 L16,1921 L20.586,1921 L15.186,1926.402 C14.018,1925.527 12.572,1925.004 11,1925.004 C7.134,1925.004 4,1928.138 4,1932.004 C4,1935.87 7.134,1939.005 11,1939.005 C14.866,1939.005 18,1935.871 18,1932.005 C18,1930.433 17.475,1928.987 16.601,1927.818 L22,1922.419 L22,1927 L24,1927 L24,1919 L16,1919 Z"
                                    id="male-[#1364]"
                                  ></path>
                                </g>
                              </g>
                            </g>{" "}
                          </g>
                        </svg>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="relative group">
                      <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                        {data?.data?.[0]?.createdAt && (
                          <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">
                            {formatDistanceToNow(
                              new Date(data?.data?.[0]?.createdAt)
                            )}{" "}
                            ago
                          </button>
                        )}
                      </div>

                      <Image
                        width={300}
                        height={370}
                        className="h-[370px] w-full rounded-lg bg-black/40"
                        src={
                          "https://img.freepik.com/free-vector/new-app-development-desktop_23-2148684987.jpg?t=st=1720286491~exp=1720290091~hmac=4a72ee4304a03867100b577b3a95b8bf40e4f0938d8b4729c74d7e8334d9f33e&w=740"
                        }
                        alt="Blog Cover Image"
                      />
                      <div className=" size-1 p-[3px]  flex justify-center items-center absolute top-3 right-1 group-hover:w-full group-hover:h-full group-hover:top-0 group-hover:right-0 group-hover:bg-blue-100/60 duration-500 transition-all">
                        <svg
                          width={30}
                          viewBox="0 0 20 20"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          fill="#0095FF"
                        >
                          <g strokeWidth="0"></g>
                          <g strokeLinecap="round" strokeLinejoin="round"></g>
                          <g>
                            <title>male [#1364]</title>{" "}
                            <desc>Created with Sketch.</desc> <defs> </defs>
                            <g
                              id="Page-1"
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                transform="translate(-60.000000, -2079.000000)"
                                fill="#0095FF"
                              >
                                <g
                                  id="icons"
                                  transform="translate(56.000000, 160.000000)"
                                >
                                  <path
                                    d="M11,1937.005 C8.243,1937.005 6,1934.762 6,1932.005 C6,1929.248 8.243,1927.005 11,1927.005 C13.757,1927.005 16,1929.248 16,1932.005 C16,1934.762 13.757,1937.005 11,1937.005 L11,1937.005 Z M16,1919 L16,1921 L20.586,1921 L15.186,1926.402 C14.018,1925.527 12.572,1925.004 11,1925.004 C7.134,1925.004 4,1928.138 4,1932.004 C4,1935.87 7.134,1939.005 11,1939.005 C14.866,1939.005 18,1935.871 18,1932.005 C18,1930.433 17.475,1928.987 16.601,1927.818 L22,1922.419 L22,1927 L24,1927 L24,1919 L16,1919 Z"
                                    id="male-[#1364]"
                                  ></path>
                                </g>
                              </g>
                            </g>{" "}
                          </g>
                        </svg>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <Image
                  height={1200}
                  width={1200}
                  className="w-[160px] h-[160px] absolute -right-11 -top-11  z-50"
                  src="https://i.ibb.co/5X056tj/best-seller-vectors-982952-8827-1-removebg-preview.png"
                  alt="Best Seller Logo"
                />
              </Link>

              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline mb-11">
                  This is Most Popular Blog!
                </h3>

                <h3 className="text-[16px]  font-[500px] sm:text-2xl group-hover:underline group-focus:underline">
                  {data?.data?.[0]?.title?.slice(0, 50)}
                </h3>
                <span className="text-xs ">
                  {data?.data?.[0]?.createdAt &&
                    format(new Date(data?.data?.[0]?.createdAt), "P")}
                </span>
                <p>{data?.data?.[0]?.content?.slice(0, 200)}.</p>
              </div>
            </a>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {isLoading ? (
          <Loading></Loading>
        ) : (
          data?.data?.map((blog) => (
            <BlogsCard
              key={blog?._id}
              blog={blog}
              // refetch={refetch}
            ></BlogsCard>
          ))
        )}
      </div>

      <div className="flex select-none justify-center items-center md:gap-5  mt-8 max-w-[100vw] md:max-w-[100vw-220px] mb-[70px] lg:mb-[80px]">
        {/* left arrow */}
        <div
          onClick={() => handlePage(page - 1)}
          className=" hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-sky-200 px-1 py-1 rounded-full"
        >
          <svg
            className="w-10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M15 7L10 12L15 17"
                stroke="#0284C7"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
            </g>
          </svg>
        </div>
        <div className="flex  justify-center items-center md:gap-2  ">
          {totalPageArr.map((item, ind) => (
            <div
              key={ind}
              onClick={() => handlePage(item)}
              className={`cursor-pointer hover:scale-110 scale-100 transition-all duration-200  px-5 md:px-5
            ${data?.meta?.page === item ? "bg-sky-500 text-white" : "bg-white"}
            border-sky-300  font-semibold text-gray-700   py-3 rounded-full
            `}
            >
              {item}
            </div>
          ))}
        </div>
        {/* right arrow */}

        <div
          onClick={() => handlePage(page + 1)}
          className=" hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-sky-200 px-2 py-2 rounded-full"
        >
          <IoIosArrowForward
            size={30}
            className="text-sky-500"
          ></IoIosArrowForward>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
