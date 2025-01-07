import { FaFacebookF } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast";
const Footer = () => {
  const currentPage = useLocation();

    const handleSubmit = e => {
        e.preventDefault();
        const name = "Portfoloio Footer subscribe";
        const email = e.target.email.value;
        const subject = "Portfoloio Footer subscribe";
        const message = "Portfoloio Footer subscribe";

        // Your email js Service Id, template ID, Publick key
        const surviceID = 'service_n06bewv';
        const templateId= 'template_h5k7zom';
        const publicKey = 'c9thbzAGsWYUJdLbZ';

        // Create new object that contain dynamic content
        const templateParams = {
            from_name: name ,
            to_name: "Md Imran",
            email_id: email,
            message: `Subject: ${subject} And Message: ${message}` 
        }
     
        if(!name || !email || !subject || !message){
            return toast.error("Please, Provide Your Email")
        }
        // send email using email js
        emailjs.send(surviceID, templateId, templateParams, publicKey)
        .then(responce => {
            console.log("Email sent successfully", responce)
            if(responce){
                return toast.success('Successfully Send Your Email')

            }
        })
        .catch((error)=> {
            console.log(error)

        })
    }


    return (


        <footer className="bg-base-200 mb-[-26px] rounded bg-cover h-full w-full  text-white" style={{ backgroundImage: "url(https://library-2dd53.web.app/assets/footer-bg-DeOrrMU2.jpg)" }}>

            <div className="footer footer-center flex flex-col lg:flex-row justify-evenly items-center  p-8" >
                <div className="flex flex-col items-center w-[300px] ">
                    <Link to="/" className="relative">
                        <img
                            className="h-[22px] w-[17px] animate-spin absolute top-[12px] left-[25px] mx-auto"
                            src="https://tech-apps-f8d51.web.app/assets/logo-BKgrWx8u.png"
                            alt=""
                        />
                        <img
                            className="h-[60px] w-[60px] mt-4"
                            src="https://i.postimg.cc/sXPt2qT3/Imran-Portfolio-Logo.png"
                            alt=""
                        />
                    </Link>

                    <p className="text-center mt-7">Hi, I am a Imran. As a Front-End Web Developer. I make Proffetional Eye catching Website. If you know more information, Please send me email. I wait for discuss with you.</p>
                </div>

                <div className="flex flex-col justify-center items-center  max-w-full lg:max-w-full ">
                    <h1 className=" footer-title text-start">Important Links</h1>
                    <nav className="flex items-start  gap-11 mt-5">
                        <div className="flex flex-col items-start gap-4">
                            <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#home'}`} className="link link-hover scroll-smooth">About</a>
                            <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#skills'}`}  className="link link-hover">My Skills</a>
                            <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#projects'}`} className="link link-hover">Projects</a>
                            <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#review'}`}  className="link link-hover">Client Rivew</a>
                        </div>

                        <div className="flex flex-col items-start  gap-4">
                            <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#education'}`} className="link link-hover">Education</a>
                            <a  href={`${currentPage.pathname.includes('blogs') ? '/' : '#blogs'}`} className="link link-hover">Blogs</a>
                            <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#achived'}`} className="link link-hover">Achived</a>
                            <a href={`${currentPage.pathname.includes('blogs') ? '/' : '#achived'}`} className="link link-hover">Contact</a>
                        </div>

                    </nav>
                </div>
                <nav className="flex flex-col items-start">

                    <h6 className="footer-title">Newsletter</h6>
                    <div className=" -mt-3 mb-6">
                        <label className="label text-white">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <form onSubmit={handleSubmit} className="join">
                            <input name="email" type="text" placeholder="username@site.com" className="px-6 join-item  w-[140px] md:w-[180px] lg:w-[200px] text-black" />
                            <button className="btn bg-[#076aa5] hover:bg-[#00b7e9] join-item">Subscribe</button>
                        </form>
                    </div>

                    <div className="grid grid-flow-col gap-4">
                        <Link target="_blank" to="https://www.facebook.com/imran9066588" className="hover:text-[#076aa5] hover:bg-white rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">
                            <FaFacebookF className="text-white hover:text-[#076aa5] text-[16px]" />
                        </Link>
                        <Link target="_blank" to="https://www.linkedin.com/in/developerimran1122/" className="hover:text-[#076aa5] hover:bg-white rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">
                            <FaLinkedin className="text-white hover:text-[#076aa5] text-[16px]" />
                        </Link>
                        <Link target="_blank" to="https://github.com/DeveloperImran1" className="hover:text-[#076aa5] rounded-full hover:bg-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">
                            <FaGithub className="text-white hover:text-[#076aa5] text-[16px]" />
                        </Link>
                     

                    </div>
                </nav>
            </div>
            <aside className="text-center mt-9 ">
                <hr className="lg:w-[calc(100vw-120px)] lg:ml-[100px] " />
                <p className="mt-7 pb-[50px]">Copyright © {new Date().getFullYear()} - All right reserved by Md Imran</p>
            </aside>
        </footer>


    );
};

export default Footer;

