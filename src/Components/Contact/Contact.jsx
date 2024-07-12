import { FaHandshake } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const Contact = () => {
    const [hover, setHover] = useState(false);

    const style = {
        animation: hover && "customAni 4s ease 0s infinite normal none"
    }
    const style2 = {
        animation: !hover && "customAni 4s ease 0s infinite normal none"
    }
    return (
        <div>
            <section id="contact" className="py-6 mb-12 lg:mb-[96px] sm:py-12 max-w-[calc(100vw-220px)] ">
                <div className="container  mx-auto space-y-8">
                    <div className="space-y-2 text-center mb-6">
                        <h1
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            className="text-[40px] font-bold text-[#131313] text-center max-w-full ">Get In Touch</h1>
                        <p
                            data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            className=" text-[16px] text-[#131313CC] text-center mb-12 max-w-full lg:w-[80%] mx-auto ">At Haven House, our residents satisfaction is our top priority. Dont just take our word for it – hear what some of our happy residents have to say... </p>

                    </div>

                    <div className="flex justify-between items-start gap-8 " >
                        <div className="flex flex-col justify-center items-left  w-[50%]">
                            <h1 className="text-xl font-bold ml-8">Let's Talk About Everything!</h1>
                            <p className="flex gap-1 items-center ml-8 mt-4" >Don't like form? Send me an email <FaHandshake size={18} className="text-yellow-800" ></FaHandshake> </p>

                            {/* <img className="h-[330px] w-[90%]" src="https://i.ibb.co/dW7Dsb2/noctidial-technical-support-online-assistant-user-help-frequently-asked-questions-call-center-worker.png" alt="" /> */}

                            <div className="flex mb-[40px] flex-col lg:flex-row justify-between gap-6 items-start" >
                                <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center  w-full gap-4 mt-8  " >
                            

                                    {/* <div className="grid grid-cols-2" > */}
                                  
                                    <div
                                        onMouseEnter={()=>setHover(true)}
                                        onMouseLeave={()=>setHover(false)}
                                        style={style}
                                 
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-delay="50"
                                        data-aos-duration="1000"
                                        className="border/10 mx-auto w-full lg:w-[200px] rounded-2xl group bg-white hover:bg-[#076aa5] hover:text-white p-5 shadow-lg dark:bg-[#18181B] md:p-8 border">
                                        <div className="flex flex-col items-center justify-center space-y-5">
                                            <MdEmail size={50} className="border-[1px] border-[#076aa5] group-hover:border-white border-dotted rounded-full p-2 text-[#076aa5] group-hover:text-white" />
                                            <h6 className="text-center font-semibold text-slate-700 text-2xl group-hover:text-white dark:text-white/80">Email Me</h6>
                                            <h6 className="text-center font-medium text-[#5A5A5D] group-hover:text-white dark:text-white/80">developerimran1122 <br></br>@gmail.com</h6>
                                        </div>
                                    </div>


                                    <div
                                        onMouseEnter={()=>setHover(true)}
                                        onMouseLeave={()=>setHover(false)}
                                        style={style2}
                                 
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-delay="50"
                                        data-aos-duration="1000"
                                        className="border/10 mx-auto w-full lg:w-[200px] rounded-2xl group bg-white hover:bg-[#076aa5] hover:text-white p-5 shadow-lg dark:bg-[#18181B] md:p-8 border">
                                        <div className="flex flex-col items-center justify-center space-y-5">
                                            <IoCall size={50} className="border-[1px] border-[#076aa5] group-hover:border-white border-dotted rounded-full p-2 text-[#076aa5] group-hover:text-white" />
                                            <h6 className="text-center font-semibold text-slate-700 text-2xl group-hover:text-white dark:text-white/80">Call Me</h6>
                                            <h6 className="text-center font-medium text-[#5A5A5D] group-hover:text-white dark:text-white/80">+8801311710894</h6>
                                        </div>
                                    </div>

                                    </div>
                                </div>
                            </div>

                            <div className=" ">
                                <span className="flex ">
                                    <input className="rounded-3xl w-full border bg-white px-4 py-2  focus:outline-none" type="text" placeholder="Your Name" />
                                    <input className="rounded-3xl w-full border bg-white px-4 py-2  focus:outline-none" type="text" placeholder="Your Email" />
                                </span>
                                <input className="rounded-3xl border w-full mt-14 bg-white px-4 py-2  focus:outline-none" type="text" placeholder="Insert Your Subject" />
                                <textarea className="rounded-3xl border h-[160px] w-full mt-8 bg-white px-4 py-2  focus:outline-none" type="text" placeholder="Write Your Message" />
                             
                                <button className="animate-button rounded-3xl border-2 border-sky-500 px-1 md:px-3 py-1 lg:py-2 text-[12px] lg:text-[15px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white">Send Message</button>


                            </div>
                        </div>


                    </div>
            </section>
        </div>
    );
};

export default Contact;