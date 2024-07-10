import { FaDropbox } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { MdOutlineDateRange } from "react-icons/md";
import { BsEmojiHeartEyes } from "react-icons/bs";

export default function About() {

  return (
    <div id="about" className="bg-[#e7e7e7] rounded-lg">
      {/* project card secton */}
      <div id="title" className="grid grid-cols-2 md:grid-cols-4 justify-evenly items-center mt-10 bg-[#e7e7e7] p-8 rounded-lg " >

        <div className="flex flex-col jusitify-center items-center gap-2 ">
          <TfiCup size={30} className="text-[#fcc900]"></TfiCup>
          <h1 className="text-2xl font-bold">36%</h1>
          <h1 id="title" className="font-bold text-center" >Job <span className="">Achivment</span></h1>
        </div>
        <div className="flex flex-col jusitify-center items-center gap-2 ">
          <MdOutlineDateRange size={30} className="text-[#007be2]" ></MdOutlineDateRange>
          <h1 className="text-2xl font-bold">01+</h1>
          <h1 id="title" className="font-bold text-center" >Year of <span className="">Experience</span></h1>

        </div>
        <div className="flex flex-col jusitify-center items-center gap-2 ">
          <BsEmojiHeartEyes size={30} className="text-[#f6cc2a]"></BsEmojiHeartEyes>
          <h1 className="text-2xl font-bold">05</h1>
          <h1 id="title" className="font-bold text-center" >Happy <span className="">Clients</span></h1>
        </div>
        <div className="flex flex-col jusitify-center items-center gap-2 ">
          <FaDropbox size={30} className="text-[#007be2]"></FaDropbox>
          <h1 className="text-2xl font-bold">40+</h1>
          <h1 id="title" className="font-bold text-center" >Total <span className="">Projects</span></h1>
        </div>


      </div>

    </div>
  )
}

