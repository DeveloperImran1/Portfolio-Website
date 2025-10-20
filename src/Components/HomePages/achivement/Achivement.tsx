import Title from "@/components/Shared/Title";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

const Achivement = () => {
    return (
        <div>
            <div id="achived" className="bg-white  rounded-2xl " >
                <p className="pt-11">
                    <Title title={"Achievement"} description={""}></Title>
                </p>

                <div className="flex flex-col lg:flex-row justify-between gap-11 p-6 z-50 " >

                    <Link className=" w-full" target="_blank" href="https://drive.google.com/file/d/1mcKXMtNhughLytJ74A1uaFz7O3KsEtoU/view?usp=sharing">
                        <Image height="1200" width="1200"  className="h-full rounded-2xl w-full" src="https://res.cloudinary.com/dqdircc96/image/upload/v1736265442/Recomendation-Letter_huxfzh.png" alt="Recomendation letter" />
                    </Link>


                    <div className="relative lg:max-w-[37vw]" >

                        <h1 className="text-2xl font-semibold text-center" >Recommendation for Leadership Excellence</h1>
                        <p className="text-base my-3">Recognized for leadership excellence in Programming Heros Endgame Program, showcasing exceptional team management, organizational skills, and innovative problem-solving, awarded among 500 students.</p>
                        <h3 className="text-[17px] font-semibold mt-8 mb-3" >Features:</h3>
                        <ul>
                            <li className="flex justify-start items-start gap-2" >
                                <span>1. Awarded a Recommendation Letter from Programming Hero as a top-performing team leader among 4,800 students in the Endgame Program.</span>

                            </li>
                            <li className="flex justify-start items-start gap-2 my-2" >
                                <span>2. Guided a team of six, leading daily scrums and presenting tasks and progress effectively.</span>

                            </li>
                            <li className="flex justify-start items-start gap-2" >
                                <span>3. Showcased strong organizational skills through weekly feature presentations with detailed updates and solutions.</span>

                            </li>
                            <li className="flex justify-start items-start gap-2 my-2" >
                                <span>4. Demonstrated dedication, teamwork, and leadership under industry-standard challenges.</span>

                            </li>

                        </ul>

                        <div className="" >


                            <div data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom" className="mt-9 " >
                                <Link target="_blank" href="https://drive.google.com/file/d/1mcKXMtNhughLytJ74A1uaFz7O3KsEtoU/view?usp=sharing" >
                                    <button className="animate-button rounded-3xl border-2 border-sky-500 px-1 md:px-3 py-1 lg:py-2 text-[12px] lg:text-[15px] text-sky-500 duration-200 hover:bg-sky-500 hover:text-white flex gap-1 justify-center items-center"><FaLink size={18}></FaLink>Live Link</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Achivement;