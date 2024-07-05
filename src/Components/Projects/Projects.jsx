import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project = () => {
    return (
        <div id="projects">
            <h1 className="text-3xl mb-5 mt-[80px] font-bold text-center">Recent Projects</h1>


            <div className="bg-blue-200 px-14 py-9 rounded-2xl mb-14" >
                <div className="flex justify-between gap-11" >
                    <iframe className="h-[550px] min-w-[50%] rounded-lg" src="https://touristbook.netlify.app/" frameborder="0"></iframe>
                    <div className="relative" >
                        <h1 className="text-3xl font-semibold text-blue-900 text-center mb-[50px]" >TouristBook</h1>

                        <h1 className="text-xl font-semibold text-blue-900" >Dynamic Room Booking with Interactive Features and Secure User Management</h1>
                        <p className="text-base my-3">Browse tourist spots with detailed info and images, enjoy interactive features, secure booking, and user-friendly management. Access services through multiple routes for a seamless and engaging travel experience.</p>
                        <h3 className="text-[17px] font-semibold mt-8 mb-3" >Features:</h3>
                        <ul>
                            <li className="flex justify-start items-start gap-2" >
                                <svg className="fill-[#0386FF] dark:fill-[#289DFF] mt-1" width={20} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="navigateui" strokeLinecap="round" strokeLinejoin="round"></g><g id="navigateui"><g id="tick"><g id="tick_2"><path id="navigateui" fillRule="evenodd" clipRule="evenodd" d="M43.8679 21.6919C44.6935 28.8058 41.6741 35.704 36.0728 39.952C35.6328 40.2857 35.0055 40.1995 34.6718 39.7595C34.338 39.3194 34.4242 38.6921 34.8643 38.3584C39.9074 34.5338 42.6244 28.3263 41.8812 21.9225C41.671 20.1113 41.1986 18.3944 40.5065 16.8051L26.1673 31.1443C25.5822 31.7294 24.7948 32.0363 23.9994 32.0271C23.1815 32.0363 22.3941 31.7294 21.809 31.1443L14.359 23.6943C13.9685 23.3038 13.9685 22.6706 14.359 22.2801C14.7496 21.8896 15.3827 21.8896 15.7733 22.2801L23.2233 29.7301C23.4197 29.9265 23.6865 30.0305 23.9994 30.0273C24.2898 30.0305 24.5566 29.9265 24.753 29.7301L39.5542 14.9289C36.0589 8.94407 29.2496 5.2706 21.924 6.12251C12.0492 7.27066 4.97548 16.2058 6.12186 26.0817C7.06163 34.1648 13.2925 40.5543 21.232 41.7937C21.4211 41.8262 21.7587 41.8766 22.187 41.9273C22.5257 41.9674 22.8658 42.0003 23.1985 42.0236C23.7495 42.0623 24.1647 42.5402 24.1261 43.0912C24.0875 43.6421 23.6095 44.0574 23.0586 44.0187C22.6921 43.993 22.3207 43.9571 21.9519 43.9134C21.4857 43.8582 21.1145 43.8028 20.9083 43.7672C12.1017 42.3926 5.17946 35.2942 4.13522 26.3125C2.86149 15.3394 10.7211 5.4116 21.693 4.13589C29.6475 3.21084 37.0542 7.08801 41.0117 13.4715L42.279 12.2041C42.6696 11.8136 43.3027 11.8136 43.6933 12.2041C44.0838 12.5946 44.0838 13.2278 43.6933 13.6183L42.0149 15.2967C42.9621 17.2572 43.6027 19.4071 43.8679 21.6919Z"></path></g></g></g></svg>
                                <span>Detailed info and price filters.</span>

                            </li>
                            <li className="flex justify-start items-start gap-2" >
                                <svg className="fill-[#0386FF] dark:fill-[#289DFF] mt-1" width={20} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="navigateui" strokeLinecap="round" strokeLinejoin="round"></g><g id="navigateui"><g id="tick"><g id="tick_2"><path id="navigateui" fillRule="evenodd" clipRule="evenodd" d="M43.8679 21.6919C44.6935 28.8058 41.6741 35.704 36.0728 39.952C35.6328 40.2857 35.0055 40.1995 34.6718 39.7595C34.338 39.3194 34.4242 38.6921 34.8643 38.3584C39.9074 34.5338 42.6244 28.3263 41.8812 21.9225C41.671 20.1113 41.1986 18.3944 40.5065 16.8051L26.1673 31.1443C25.5822 31.7294 24.7948 32.0363 23.9994 32.0271C23.1815 32.0363 22.3941 31.7294 21.809 31.1443L14.359 23.6943C13.9685 23.3038 13.9685 22.6706 14.359 22.2801C14.7496 21.8896 15.3827 21.8896 15.7733 22.2801L23.2233 29.7301C23.4197 29.9265 23.6865 30.0305 23.9994 30.0273C24.2898 30.0305 24.5566 29.9265 24.753 29.7301L39.5542 14.9289C36.0589 8.94407 29.2496 5.2706 21.924 6.12251C12.0492 7.27066 4.97548 16.2058 6.12186 26.0817C7.06163 34.1648 13.2925 40.5543 21.232 41.7937C21.4211 41.8262 21.7587 41.8766 22.187 41.9273C22.5257 41.9674 22.8658 42.0003 23.1985 42.0236C23.7495 42.0623 24.1647 42.5402 24.1261 43.0912C24.0875 43.6421 23.6095 44.0574 23.0586 44.0187C22.6921 43.993 22.3207 43.9571 21.9519 43.9134C21.4857 43.8582 21.1145 43.8028 20.9083 43.7672C12.1017 42.3926 5.17946 35.2942 4.13522 26.3125C2.86149 15.3394 10.7211 5.4116 21.693 4.13589C29.6475 3.21084 37.0542 7.08801 41.0117 13.4715L42.279 12.2041C42.6696 11.8136 43.3027 11.8136 43.6933 12.2041C44.0838 12.5946 44.0838 13.2278 43.6933 13.6183L42.0149 15.2967C42.9621 17.2572 43.6027 19.4071 43.8679 21.6919Z"></path></g></g></g></svg>
                                <span>Room previews and property details.</span>

                            </li>
                            <li className="flex justify-start items-start gap-2" >
                                <svg className="fill-[#0386FF] dark:fill-[#289DFF] mt-1" width={20} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="navigateui" strokeLinecap="round" strokeLinejoin="round"></g><g id="navigateui"><g id="tick"><g id="tick_2"><path id="navigateui" fillRule="evenodd" clipRule="evenodd" d="M43.8679 21.6919C44.6935 28.8058 41.6741 35.704 36.0728 39.952C35.6328 40.2857 35.0055 40.1995 34.6718 39.7595C34.338 39.3194 34.4242 38.6921 34.8643 38.3584C39.9074 34.5338 42.6244 28.3263 41.8812 21.9225C41.671 20.1113 41.1986 18.3944 40.5065 16.8051L26.1673 31.1443C25.5822 31.7294 24.7948 32.0363 23.9994 32.0271C23.1815 32.0363 22.3941 31.7294 21.809 31.1443L14.359 23.6943C13.9685 23.3038 13.9685 22.6706 14.359 22.2801C14.7496 21.8896 15.3827 21.8896 15.7733 22.2801L23.2233 29.7301C23.4197 29.9265 23.6865 30.0305 23.9994 30.0273C24.2898 30.0305 24.5566 29.9265 24.753 29.7301L39.5542 14.9289C36.0589 8.94407 29.2496 5.2706 21.924 6.12251C12.0492 7.27066 4.97548 16.2058 6.12186 26.0817C7.06163 34.1648 13.2925 40.5543 21.232 41.7937C21.4211 41.8262 21.7587 41.8766 22.187 41.9273C22.5257 41.9674 22.8658 42.0003 23.1985 42.0236C23.7495 42.0623 24.1647 42.5402 24.1261 43.0912C24.0875 43.6421 23.6095 44.0574 23.0586 44.0187C22.6921 43.993 22.3207 43.9571 21.9519 43.9134C21.4857 43.8582 21.1145 43.8028 20.9083 43.7672C12.1017 42.3926 5.17946 35.2942 4.13522 26.3125C2.86149 15.3394 10.7211 5.4116 21.693 4.13589C29.6475 3.21084 37.0542 7.08801 41.0117 13.4715L42.279 12.2041C42.6696 11.8136 43.3027 11.8136 43.6933 12.2041C44.0838 12.5946 44.0838 13.2278 43.6933 13.6183L42.0149 15.2967C42.9621 17.2572 43.6027 19.4071 43.8679 21.6919Z"></path></g></g></g></svg>
                                <span>Booking, profiles, secure login/logout.</span>

                            </li>

                        </ul>

                        <div className="" >
                            <div className="mt-6 flex gap-3" >
                                <button className="rounded-3xl border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white">React JS</button>
                                <button className="rounded-3xl border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white">Express JS</button>
                                <button className="rounded-3xl border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white">Mongo DB</button>
                                <button className="rounded-3xl border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white">Firebase</button>
                            </div>

                            <div className="mt-6 flex gap-3" >
                                <Link to="https://touristbook.netlify.app/" >
                                    <button className="rounded-3xl border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={18}></FaLink>Live Link</button>
                                </Link>
                                <Link to="https://github.com/programming-hero-web-course1/b9a12-client-side-DeveloperImran1" >
                                    <button className="rounded-3xl border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={18}></FaLink>Client Side</button>
                                </Link>
                                <Link to="https://github.com/programming-hero-web-course1/b9a12-client-side-DeveloperImran1" >
                                    <button className="rounded-3xl border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={18}></FaLink>Server Side</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            {/* roomIntel website  */}
            <div className="bg-blue-200 px-14 py-9 rounded-2xl mb-14" >
                <div className="flex justify-between gap-11" >
                    <iframe className="h-[550px] min-w-[50%] rounded-lg" src="https://room-intel.netlify.app/" frameborder="0"></iframe>
                    <div className="relative" >
                        <h1 className="text-3xl font-semibold text-blue-900 text-center mb-[50px]" >RoomIntel</h1>

                        <h1 className="text-xl font-semibold text-blue-900" >RoomIntel is a room booking Website</h1>
                        <p className="text-base my-3">Easily select and book rooms with detailed information and price filters. Enjoy interactive sliders, secure login, comprehensive user management, and smooth navigation across multiple routes for a seamless booking experience.</p>
                        <h3 className="text-[17px] font-semibold mt-8 mb-3" >Features:</h3>
                        <ul>
                            <li className="flex justify-start items-start gap-2" >
                                <svg className="fill-[#0386FF] dark:fill-[#289DFF] mt-1" width={20} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="navigateui" strokeLinecap="round" strokeLinejoin="round"></g><g id="navigateui"><g id="tick"><g id="tick_2"><path id="navigateui" fillRule="evenodd" clipRule="evenodd" d="M43.8679 21.6919C44.6935 28.8058 41.6741 35.704 36.0728 39.952C35.6328 40.2857 35.0055 40.1995 34.6718 39.7595C34.338 39.3194 34.4242 38.6921 34.8643 38.3584C39.9074 34.5338 42.6244 28.3263 41.8812 21.9225C41.671 20.1113 41.1986 18.3944 40.5065 16.8051L26.1673 31.1443C25.5822 31.7294 24.7948 32.0363 23.9994 32.0271C23.1815 32.0363 22.3941 31.7294 21.809 31.1443L14.359 23.6943C13.9685 23.3038 13.9685 22.6706 14.359 22.2801C14.7496 21.8896 15.3827 21.8896 15.7733 22.2801L23.2233 29.7301C23.4197 29.9265 23.6865 30.0305 23.9994 30.0273C24.2898 30.0305 24.5566 29.9265 24.753 29.7301L39.5542 14.9289C36.0589 8.94407 29.2496 5.2706 21.924 6.12251C12.0492 7.27066 4.97548 16.2058 6.12186 26.0817C7.06163 34.1648 13.2925 40.5543 21.232 41.7937C21.4211 41.8262 21.7587 41.8766 22.187 41.9273C22.5257 41.9674 22.8658 42.0003 23.1985 42.0236C23.7495 42.0623 24.1647 42.5402 24.1261 43.0912C24.0875 43.6421 23.6095 44.0574 23.0586 44.0187C22.6921 43.993 22.3207 43.9571 21.9519 43.9134C21.4857 43.8582 21.1145 43.8028 20.9083 43.7672C12.1017 42.3926 5.17946 35.2942 4.13522 26.3125C2.86149 15.3394 10.7211 5.4116 21.693 4.13589C29.6475 3.21084 37.0542 7.08801 41.0117 13.4715L42.279 12.2041C42.6696 11.8136 43.3027 11.8136 43.6933 12.2041C44.0838 12.5946 44.0838 13.2278 43.6933 13.6183L42.0149 15.2967C42.9621 17.2572 43.6027 19.4071 43.8679 21.6919Z"></path></g></g></g></svg>
                                <span>Choose rooms based on detailed information and price ranges, ensuring availability.</span>

                            </li>
                            <li className="flex justify-start items-start gap-2" >
                                <svg className="fill-[#0386FF] dark:fill-[#289DFF] mt-1" width={20} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="navigateui" strokeLinecap="round" strokeLinejoin="round"></g><g id="navigateui"><g id="tick"><g id="tick_2"><path id="navigateui" fillRule="evenodd" clipRule="evenodd" d="M43.8679 21.6919C44.6935 28.8058 41.6741 35.704 36.0728 39.952C35.6328 40.2857 35.0055 40.1995 34.6718 39.7595C34.338 39.3194 34.4242 38.6921 34.8643 38.3584C39.9074 34.5338 42.6244 28.3263 41.8812 21.9225C41.671 20.1113 41.1986 18.3944 40.5065 16.8051L26.1673 31.1443C25.5822 31.7294 24.7948 32.0363 23.9994 32.0271C23.1815 32.0363 22.3941 31.7294 21.809 31.1443L14.359 23.6943C13.9685 23.3038 13.9685 22.6706 14.359 22.2801C14.7496 21.8896 15.3827 21.8896 15.7733 22.2801L23.2233 29.7301C23.4197 29.9265 23.6865 30.0305 23.9994 30.0273C24.2898 30.0305 24.5566 29.9265 24.753 29.7301L39.5542 14.9289C36.0589 8.94407 29.2496 5.2706 21.924 6.12251C12.0492 7.27066 4.97548 16.2058 6.12186 26.0817C7.06163 34.1648 13.2925 40.5543 21.232 41.7937C21.4211 41.8262 21.7587 41.8766 22.187 41.9273C22.5257 41.9674 22.8658 42.0003 23.1985 42.0236C23.7495 42.0623 24.1647 42.5402 24.1261 43.0912C24.0875 43.6421 23.6095 44.0574 23.0586 44.0187C22.6921 43.993 22.3207 43.9571 21.9519 43.9134C21.4857 43.8582 21.1145 43.8028 20.9083 43.7672C12.1017 42.3926 5.17946 35.2942 4.13522 26.3125C2.86149 15.3394 10.7211 5.4116 21.693 4.13589C29.6475 3.21084 37.0542 7.08801 41.0117 13.4715L42.279 12.2041C42.6696 11.8136 43.3027 11.8136 43.6933 12.2041C44.0838 12.5946 44.0838 13.2278 43.6933 13.6183L42.0149 15.2967C42.9621 17.2572 43.6027 19.4071 43.8679 21.6919Z"></path></g></g></g></svg>
                                <span>Engage with sliders for room previews and featured property details.</span>

                            </li>
                            <li className="flex justify-start items-start gap-2" >
                                <svg className="fill-[#0386FF] dark:fill-[#289DFF] mt-1" width={20} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="navigateui" strokeLinecap="round" strokeLinejoin="round"></g><g id="navigateui"><g id="tick"><g id="tick_2"><path id="navigateui" fillRule="evenodd" clipRule="evenodd" d="M43.8679 21.6919C44.6935 28.8058 41.6741 35.704 36.0728 39.952C35.6328 40.2857 35.0055 40.1995 34.6718 39.7595C34.338 39.3194 34.4242 38.6921 34.8643 38.3584C39.9074 34.5338 42.6244 28.3263 41.8812 21.9225C41.671 20.1113 41.1986 18.3944 40.5065 16.8051L26.1673 31.1443C25.5822 31.7294 24.7948 32.0363 23.9994 32.0271C23.1815 32.0363 22.3941 31.7294 21.809 31.1443L14.359 23.6943C13.9685 23.3038 13.9685 22.6706 14.359 22.2801C14.7496 21.8896 15.3827 21.8896 15.7733 22.2801L23.2233 29.7301C23.4197 29.9265 23.6865 30.0305 23.9994 30.0273C24.2898 30.0305 24.5566 29.9265 24.753 29.7301L39.5542 14.9289C36.0589 8.94407 29.2496 5.2706 21.924 6.12251C12.0492 7.27066 4.97548 16.2058 6.12186 26.0817C7.06163 34.1648 13.2925 40.5543 21.232 41.7937C21.4211 41.8262 21.7587 41.8766 22.187 41.9273C22.5257 41.9674 22.8658 42.0003 23.1985 42.0236C23.7495 42.0623 24.1647 42.5402 24.1261 43.0912C24.0875 43.6421 23.6095 44.0574 23.0586 44.0187C22.6921 43.993 22.3207 43.9571 21.9519 43.9134C21.4857 43.8582 21.1145 43.8028 20.9083 43.7672C12.1017 42.3926 5.17946 35.2942 4.13522 26.3125C2.86149 15.3394 10.7211 5.4116 21.693 4.13589C29.6475 3.21084 37.0542 7.08801 41.0117 13.4715L42.279 12.2041C42.6696 11.8136 43.3027 11.8136 43.6933 12.2041C44.0838 12.5946 44.0838 13.2278 43.6933 13.6183L42.0149 15.2967C42.9621 17.2572 43.6027 19.4071 43.8679 21.6919Z"></path></g></g></g></svg>
                                <span>Access routes for booking, profile management, and user-friendly CRUD operations with secure authentication functionalities.</span>

                            </li>

                        </ul>

                        <div className="" >
                            <div className="mt-6 flex gap-3" >
                                <button className="rounded-3xl border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white">React JS</button>
                                <button className="rounded-3xl border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white">Express JS</button>
                                <button className="rounded-3xl border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white">Mongo DB</button>
                                <button className="rounded-3xl border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white">Firebase</button>
                            </div>

                            <div className="mt-6 flex gap-3" >
                                <Link to="https://room-intel.netlify.app/" >
                                    <button className="rounded-3xl border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={18}></FaLink>Live Link</button>
                                </Link>
                                <Link to="https://github.com/Porgramming-Hero-web-course/b9a11-client-side-DeveloperImran1" >
                                    <button className="rounded-3xl border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={18}></FaLink>Client Side</button>
                                </Link>
                                <Link to="https://github.com/Porgramming-Hero-web-course/b9a11-server-side-DeveloperImran1" >
                                    <button className="rounded-3xl border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={18}></FaLink>Server Side</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            {/* roomIntel website  */}
            <div className="bg-blue-200 px-14 py-9 rounded-2xl mb-14" >
                <div className="flex justify-between gap-11" >
                    <iframe className="h-[550px] min-w-[50%] rounded-lg" src="https://assignment-10-10bbc.web.app/" frameborder="0"></iframe>
                    <div className="relative" >
                        <h1 className="text-3xl font-semibold text-blue-900 text-center mb-[50px]" >TravelsBook</h1>

                        <h1 className="text-xl font-semibold text-blue-900" >Explore and Book Tourist Spots with Ease</h1>
                        <p className="text-base my-3">Discover and book tourist spots through seven routes, interactive sliders, and detailed spot cards. Secure login and registration, profile management, and user-friendly navigation ensure a seamless and engaging experience. </p>
                        <h3 className="text-[17px] font-semibold mt-8 mb-3" >Features:</h3>
                        <ul>
                            <li className="flex justify-start items-start gap-2" >
                                <svg className="fill-[#0386FF] dark:fill-[#289DFF] mt-1" width={20} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="navigateui" strokeLinecap="round" strokeLinejoin="round"></g><g id="navigateui"><g id="tick"><g id="tick_2"><path id="navigateui" fillRule="evenodd" clipRule="evenodd" d="M43.8679 21.6919C44.6935 28.8058 41.6741 35.704 36.0728 39.952C35.6328 40.2857 35.0055 40.1995 34.6718 39.7595C34.338 39.3194 34.4242 38.6921 34.8643 38.3584C39.9074 34.5338 42.6244 28.3263 41.8812 21.9225C41.671 20.1113 41.1986 18.3944 40.5065 16.8051L26.1673 31.1443C25.5822 31.7294 24.7948 32.0363 23.9994 32.0271C23.1815 32.0363 22.3941 31.7294 21.809 31.1443L14.359 23.6943C13.9685 23.3038 13.9685 22.6706 14.359 22.2801C14.7496 21.8896 15.3827 21.8896 15.7733 22.2801L23.2233 29.7301C23.4197 29.9265 23.6865 30.0305 23.9994 30.0273C24.2898 30.0305 24.5566 29.9265 24.753 29.7301L39.5542 14.9289C36.0589 8.94407 29.2496 5.2706 21.924 6.12251C12.0492 7.27066 4.97548 16.2058 6.12186 26.0817C7.06163 34.1648 13.2925 40.5543 21.232 41.7937C21.4211 41.8262 21.7587 41.8766 22.187 41.9273C22.5257 41.9674 22.8658 42.0003 23.1985 42.0236C23.7495 42.0623 24.1647 42.5402 24.1261 43.0912C24.0875 43.6421 23.6095 44.0574 23.0586 44.0187C22.6921 43.993 22.3207 43.9571 21.9519 43.9134C21.4857 43.8582 21.1145 43.8028 20.9083 43.7672C12.1017 42.3926 5.17946 35.2942 4.13522 26.3125C2.86149 15.3394 10.7211 5.4116 21.693 4.13589C29.6475 3.21084 37.0542 7.08801 41.0117 13.4715L42.279 12.2041C42.6696 11.8136 43.3027 11.8136 43.6933 12.2041C44.0838 12.5946 44.0838 13.2278 43.6933 13.6183L42.0149 15.2967C42.9621 17.2572 43.6027 19.4071 43.8679 21.6919Z"></path></g></g></g></svg>
                                <span>Access services from any available route.</span>

                            </li>
                            <li className="flex justify-start items-start gap-2" >
                                <svg className="fill-[#0386FF] dark:fill-[#289DFF] mt-1" width={20} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="navigateui" strokeLinecap="round" strokeLinejoin="round"></g><g id="navigateui"><g id="tick"><g id="tick_2"><path id="navigateui" fillRule="evenodd" clipRule="evenodd" d="M43.8679 21.6919C44.6935 28.8058 41.6741 35.704 36.0728 39.952C35.6328 40.2857 35.0055 40.1995 34.6718 39.7595C34.338 39.3194 34.4242 38.6921 34.8643 38.3584C39.9074 34.5338 42.6244 28.3263 41.8812 21.9225C41.671 20.1113 41.1986 18.3944 40.5065 16.8051L26.1673 31.1443C25.5822 31.7294 24.7948 32.0363 23.9994 32.0271C23.1815 32.0363 22.3941 31.7294 21.809 31.1443L14.359 23.6943C13.9685 23.3038 13.9685 22.6706 14.359 22.2801C14.7496 21.8896 15.3827 21.8896 15.7733 22.2801L23.2233 29.7301C23.4197 29.9265 23.6865 30.0305 23.9994 30.0273C24.2898 30.0305 24.5566 29.9265 24.753 29.7301L39.5542 14.9289C36.0589 8.94407 29.2496 5.2706 21.924 6.12251C12.0492 7.27066 4.97548 16.2058 6.12186 26.0817C7.06163 34.1648 13.2925 40.5543 21.232 41.7937C21.4211 41.8262 21.7587 41.8766 22.187 41.9273C22.5257 41.9674 22.8658 42.0003 23.1985 42.0236C23.7495 42.0623 24.1647 42.5402 24.1261 43.0912C24.0875 43.6421 23.6095 44.0574 23.0586 44.0187C22.6921 43.993 22.3207 43.9571 21.9519 43.9134C21.4857 43.8582 21.1145 43.8028 20.9083 43.7672C12.1017 42.3926 5.17946 35.2942 4.13522 26.3125C2.86149 15.3394 10.7211 5.4116 21.693 4.13589C29.6475 3.21084 37.0542 7.08801 41.0117 13.4715L42.279 12.2041C42.6696 11.8136 43.3027 11.8136 43.6933 12.2041C44.0838 12.5946 44.0838 13.2278 43.6933 13.6183L42.0149 15.2967C42.9621 17.2572 43.6027 19.4071 43.8679 21.6919Z"></path></g></g></g></svg>
                                <span>View images with left/right navigation buttons!</span>

                            </li>
                            <li className="flex justify-start items-start gap-2" >
                                <svg className="fill-[#0386FF] dark:fill-[#289DFF] mt-1" width={20} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="navigateui" strokeLinecap="round" strokeLinejoin="round"></g><g id="navigateui"><g id="tick"><g id="tick_2"><path id="navigateui" fillRule="evenodd" clipRule="evenodd" d="M43.8679 21.6919C44.6935 28.8058 41.6741 35.704 36.0728 39.952C35.6328 40.2857 35.0055 40.1995 34.6718 39.7595C34.338 39.3194 34.4242 38.6921 34.8643 38.3584C39.9074 34.5338 42.6244 28.3263 41.8812 21.9225C41.671 20.1113 41.1986 18.3944 40.5065 16.8051L26.1673 31.1443C25.5822 31.7294 24.7948 32.0363 23.9994 32.0271C23.1815 32.0363 22.3941 31.7294 21.809 31.1443L14.359 23.6943C13.9685 23.3038 13.9685 22.6706 14.359 22.2801C14.7496 21.8896 15.3827 21.8896 15.7733 22.2801L23.2233 29.7301C23.4197 29.9265 23.6865 30.0305 23.9994 30.0273C24.2898 30.0305 24.5566 29.9265 24.753 29.7301L39.5542 14.9289C36.0589 8.94407 29.2496 5.2706 21.924 6.12251C12.0492 7.27066 4.97548 16.2058 6.12186 26.0817C7.06163 34.1648 13.2925 40.5543 21.232 41.7937C21.4211 41.8262 21.7587 41.8766 22.187 41.9273C22.5257 41.9674 22.8658 42.0003 23.1985 42.0236C23.7495 42.0623 24.1647 42.5402 24.1261 43.0912C24.0875 43.6421 23.6095 44.0574 23.0586 44.0187C22.6921 43.993 22.3207 43.9571 21.9519 43.9134C21.4857 43.8582 21.1145 43.8028 20.9083 43.7672C12.1017 42.3926 5.17946 35.2942 4.13522 26.3125C2.86149 15.3394 10.7211 5.4116 21.693 4.13589C29.6475 3.21084 37.0542 7.08801 41.0117 13.4715L42.279 12.2041C42.6696 11.8136 43.3027 11.8136 43.6933 12.2041C44.0838 12.5946 44.0838 13.2278 43.6933 13.6183L42.0149 15.2967C42.9621 17.2572 43.6027 19.4071 43.8679 21.6919Z"></path></g></g></g></svg>
                                <span>Spot cards with details button for information</span>

                            </li>

                        </ul>

                        <div className="" >
                            <div className="mt-6 flex gap-3" >
                                <button className="rounded-3xl border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white">React JS</button>
                                <button className="rounded-3xl border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white">Express JS</button>
                                <button className="rounded-3xl border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white">Mongo DB</button>
                                <button className="rounded-3xl border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white">Firebase</button>
                            </div>

                            <div className="mt-6 flex gap-3" >
                                <Link to="https://assignment-10-10bbc.web.app/" >
                                    <button className="rounded-3xl border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={18}></FaLink>Live Link</button>
                                </Link>
                                <Link to="https://room-intel.netlify.app/" >
                                    <button className="rounded-3xl border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={18}></FaLink>Client Side</button>
                                </Link>
                                <Link to="https://room-intel.netlify.app/" >
                                    <button className="rounded-3xl border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={18}></FaLink>Server Side</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Project;