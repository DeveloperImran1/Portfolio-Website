import { FaHandshake } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Title from "../Shared/Title";
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast";
const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;
        const reqruiterData = { name, email, subject, message }
        console.log(reqruiterData)

        // Your email js Service Id, template ID, Publick key
        const surviceID = 'service_n06bewv';
        const templateId = 'template_h5k7zom';
        const publicKey = 'c9thbzAGsWYUJdLbZ';

        // Create new object that contain dynamic content
        const templateParams = {
            from_name: name,
            to_name: "Md Imran",
            email_id: email,
            message: `Subject: ${subject} And Message: ${message}`
        }

        if (!name || !email || !subject || !message) {
            return toast.error("Please, Fillup All Input Filled")
        }
        // send email using email js
        emailjs.send(surviceID, templateId, templateParams, publicKey)
            .then(responce => {
                console.log("Email sent successfully", responce)
                if (responce) {
                    e.target.reset()
                    return toast.success('Successfully Send Your Email')

                }
            })
            .catch((error) => {
                console.log(error)

            })
    }



    return (
        <div>
            <section id="contact" className="lg:py-6 px-2 md:px-0 mb-12 lg:mb-[96px] ">
                <div className="container  mx-auto">
                    <div className="text-center mb-6">


                        <Title title={"Get In Touch"} description={"Contact me to discuss your next project or collaboration. Let's create impactful web solutions together with my expertise in frontend development and commitment to quality and innovation."}></Title>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 " >
                        <div className="flex flex-col justify-center items-center lg:items-left w-full lg:w-[50%]">
                            <h1 className="text-xl font-bold ml-8">Let's Talk About Everything!</h1>
                            <p className="flex gap-1 items-center ml-8 mt-4" >Don't like form? Send me an email <FaHandshake size={18} className="text-yellow-800" ></FaHandshake> </p>

                            {/* <img className="h-[330px] w-[90%]" src="https://i.ibb.co/dW7Dsb2/noctidial-technical-support-online-assistant-user-help-frequently-asked-questions-call-center-worker.png" alt="" /> */}

                            <div className="flex mb-[40px] flex-col lg:flex-row justify-between items-center gap-6 lg:items-start" >
                                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center  w-full gap-4 mt-8  " >



                                    <div
                                        // onMouseEnter={() => setHover(true)}
                                        // onMouseLeave={() => setHover(false)}
                                        // style={style}

                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-delay="50"
                                        data-aos-duration="1000"
                                        className="border/10 mx-auto w-full lg:w-[200px] rounded-2xl group bg-white hover:bg-[#076aa5] hover:text-white p-5 shadow-lg  md:p-8 border duration-1000">
                                        <div className="flex flex-col items-center justify-center space-y-5">
                                            <MdEmail size={50} className="border-[1px] border-[#076aa5] group-hover:border-white border-dotted rounded-full p-2 text-[#076aa5] group-hover:text-white" />
                                            <h6 className="text-center font-semibold text-slate-700 text-2xl group-hover:text-white ">Email Me</h6>
                                            <h6 className="text-center font-medium text-[#5A5A5D] group-hover:text-white ">developerimran1122 <br></br>@gmail.com</h6>
                                        </div>
                                    </div>


                                    <div
                                        // onMouseEnter={() => setHover(true)}
                                        // onMouseLeave={() => setHover(false)}
                                        // style={style2}

                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-delay="50"
                                        data-aos-duration="1000"
                                        className="border/10 mx-auto w-full lg:w-[200px] rounded-2xl group bg-white hover:bg-[#076aa5] hover:text-white p-5 shadow-lg  md:p-8 border duration-1000">
                                        <div className="flex flex-col items-center justify-center space-y-5">
                                            <IoCall size={50} className="border-[1px] border-[#076aa5] group-hover:border-white border-dotted rounded-full p-2 text-[#076aa5] group-hover:text-white" />
                                            <h6 className="text-center font-semibold text-slate-700 text-2xl group-hover:text-white ">Call Me</h6>
                                            <h6 className="text-center font-medium text-[#5A5A5D] group-hover:text-white ">+8801311710894</h6>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className=" ">
                            <span className="flex ">
                                <input name="name" className="rounded-3xl w-full border bg-white px-4 py-2  focus:outline-none" type="text" placeholder="Your Name" />
                                <input name="email" className="rounded-3xl w-full border bg-white px-4 py-2  focus:outline-none" type="text" placeholder="Your Email" />
                            </span>
                            <input name="subject" className="rounded-3xl border w-full mt-14 bg-white px-4 py-2  focus:outline-none" type="text" placeholder="Insert Your Subject" />
                            <textarea name="message" className="rounded-3xl border h-[160px] w-full mt-8 bg-white px-4 py-2  focus:outline-none" type="text" placeholder="Write Your Message" />

                            <button className="animate-button rounded-3xl border-2 border-sky-500 px-1 md:px-3 py-1 lg:py-2 text-[12px] lg:text-[15px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white">Send Message</button>


                        </form>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default Contact;