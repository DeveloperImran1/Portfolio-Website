import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (


        <footer className="bg-base-200  rounded bg-cover h-full w-full  text-white" style={{ backgroundImage: "url(https://library-2dd53.web.app/assets/footer-bg-DeOrrMU2.jpg)" }}>

            <div className="footer footer-center flex justify-evenly items-start  p-8" >
                <div className="flex flex-col items-center w-[300px] ">
                    <Link to="/" className="relative">
                        <img
                            className="h-[22px] w-[17px] animate-spin absolute top-[12px] left-[25px] mx-auto"
                            src="https://tech-apps-f8d51.web.app/assets/logo-BKgrWx8u.png"
                            alt=""
                        />
                        <img
                            className="h-[60px] w-[60px] mt-4"
                            src="https://i.ibb.co/S64gtJh/I-logo.png"
                            alt=""
                        />
                    </Link>

                    <p className="text-center mt-7">Hi, I am a Imran. As a Front-End Web Developer. I make Proffetional Eye catching Website. If you know more information, Please send me email. I wait for discuss with you.</p>
                </div>

                <div>
                    <h1 className=" footer-title text-start">Important Links</h1>
                    <nav className="flex items-start  gap-11 mt-5">
                        <div className="flex flex-col items-start gap-4">
                            <a href="#home" className="link link-hover scroll-smooth">About</a>
                            <a className="link link-hover">My Skills</a>
                            <a className="link link-hover">Projects</a>
                            <a className="link link-hover">Client Rivew</a>
                        </div>

                        <div className="flex flex-col items-start  gap-4">
                            <a className="link link-hover">Education</a>
                            <a className="link link-hover">Blogs</a>
                            <a href="/blogs" className="link link-hover">All Blogs</a>
                            <a className="link link-hover">Contact</a>
                        </div>

                    </nav>
                </div>
                <nav className="flex flex-col items-start">

                    <h6 className="footer-title">Newsletter</h6>
                    <div className=" -mt-3 mb-6">
                        <label className="label text-white">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="px-6 join-item" />
                            <button className="btn bg-[#076aa5] hover:bg-[#00b7e9] join-item">Subscribe</button>
                        </div>
                    </div>

                    <div className="grid grid-flow-col gap-4">
                        <Link to="https://www.facebook.com/DeveloperImran1" className="border  p-2 border-blue-500 rounded-full hover:bg-blue-500">
                            <FaFacebookF className=" text-blue-600 hover:text-white text-[16px]  "></FaFacebookF>
                        </Link>
                        <Link to="https://www.linkedin.com/in/developerimran1122/" className="border p-2 border-blue-500 rounded-full hover:bg-blue-500">
                            <FaLinkedin className=" text-blue-600 hover:text-white text-[16px]  "></FaLinkedin>
                        </Link>
                        <Link to="https://github.com/DeveloperImran1" className="border p-2 border-blue-500 rounded-full hover:bg-blue-500">
                            <FaGithub className=" text-blue-600 hover:text-white text-[16px]  "></FaGithub>
                        </Link>
                        {/* <a href="tel:+8801311710894" className="border p-2 border-blue-500  rounded-full hover:bg-blue-500">
                        <FaPhoneAlt  className=" text-blue-600  hover:text-white text-[16px]  "></FaPhoneAlt>
                    </a> */}

                    </div>
                </nav>
            </div>
            <aside className="text-center mt-9">
                <hr />
                <p className="mt-7 pb-[50px]">Copyright © {new Date().getFullYear()} - All right reserved by Md Imran</p>
            </aside>
        </footer>


    );
};

export default Footer;