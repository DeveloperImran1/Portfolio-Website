import { FaHandshake } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const Contact = () => {
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
                       
                            <img className="h-[330px] w-[90%]" src="https://i.ibb.co/dW7Dsb2/noctidial-technical-support-online-assistant-user-help-frequently-asked-questions-call-center-worker.png" alt="" />
                        </div>

                        <div className=" ">
                            <span className="flex gap-5">
                                <input className="rounded-3xl w-full border bg-white px-4 py-2  focus:outline-none" type="text" placeholder="Your Name" />
                                <input className="rounded-3xl w-full border bg-white px-4 py-2  focus:outline-none" type="text" placeholder="Your Email" />
                            </span>
                            <input className="rounded-3xl border w-full mt-5 bg-white px-4 py-2  focus:outline-none" type="text" placeholder="Insert Your Subject" />
                            <textarea className="rounded-3xl border h-[160px] w-full mt-5 bg-white px-4 py-2  focus:outline-none" type="text" placeholder="Write Your Message" />
                            <button className="rounded-2xl mt-6 border-2 border-sky-500 px-3 py-2 text-[16px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white">Send Message</button>

                        </div>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default Contact;