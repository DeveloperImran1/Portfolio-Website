import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a href="#home" className="link link-hover scroll-smooth">About</a>
                <a className="link link-hover">My Skills</a>
                <a className="link link-hover">Projects</a>
                <a className="link link-hover">Client Rivew</a>
                <a className="link link-hover">Education</a>
                <a className="link link-hover">Blogs</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link to="https://www.facebook.com/DeveloperImran1" className="border  p-2 border-blue-500 rounded-full hover:bg-blue-500">
                        <FaFacebookF  className=" text-blue-600 hover:text-white text-[16px]  "></FaFacebookF>
                    </Link>
                    <Link to="https://www.linkedin.com/in/developerimran1122/" className="border p-2 border-blue-500 rounded-full hover:bg-blue-500">
                        <FaLinkedin  className=" text-blue-600 hover:text-white text-[16px]  "></FaLinkedin>
                    </Link>
                    <Link to="https://github.com/DeveloperImran1" className="border p-2 border-blue-500 rounded-full hover:bg-blue-500">
                        <FaGithub  className=" text-blue-600 hover:text-white text-[16px]  "></FaGithub>
                    </Link>
                    {/* <a href="tel:+8801311710894" className="border p-2 border-blue-500  rounded-full hover:bg-blue-500">
                        <FaPhoneAlt  className=" text-blue-600  hover:text-white text-[16px]  "></FaPhoneAlt>
                    </a> */}

                </div>
            </nav>
            <aside>
                <p>Copyright © ${new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;