import { FaDropbox } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { MdOutlineDateRange } from "react-icons/md";
import { BsEmojiHeartEyes } from "react-icons/bs";

export default function About() {

  return (
    <div id="about">
      {/* project card secton */}
      <div className="grid grid-cols-2 md:grid-cols-4 justify-evenly items-center mt-10 bg-slate-200 p-8 rounded-lg text-[#5992b8]" >

        <div className="flex flex-col jusitify-center items-center gap-2 ">
          <TfiCup size={30} ></TfiCup>
          <h1 className="text-2xl font-bold">36%</h1>
          <h1 className="font-bold" >Job <span className="text-[#338cc7]">Achivment</span></h1>
        </div>
        <div className="flex flex-col jusitify-center items-center gap-2 ">
          <MdOutlineDateRange size={30} ></MdOutlineDateRange>
          <h1 className="text-2xl font-bold">01+</h1>
          <h1 className="font-bold" >Year of <span className="text-[#338cc7]">Experience</span></h1>

        </div>
        <div className="flex flex-col jusitify-center items-center gap-2 ">
          <BsEmojiHeartEyes size={30} ></BsEmojiHeartEyes>
          <h1 className="text-2xl font-bold">05</h1>
          <h1 className="font-bold" >Happy <span className="text-[#338cc7]">Clients</span></h1>
        </div>
        <div className="flex flex-col jusitify-center items-center gap-2 ">
          <FaDropbox size={30} ></FaDropbox>
          <h1 className="text-2xl font-bold">40+</h1>
          <h1 className="font-bold" >Total <span className="text-[#338cc7]">Projects</span></h1>
        </div>


      </div>

    </div>
  )
}

