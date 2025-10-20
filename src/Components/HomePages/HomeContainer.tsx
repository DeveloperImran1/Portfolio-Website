"use client";
import Achivement from "./achivement/Achivement";
import BestProject from "./bestProject/Bestproject";
import Contact from "./contact/Contact";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import HeroSection from "./heroSection/HeroSection";
import Project from "./projects/Projects";
import Skills from "./skills/Skills";
import Testimonials from "./testimonial/Testimonial";

const HomeContaner = () => {
  return (
    <div>
      <HeroSection></HeroSection>

      <Skills></Skills>
      <BestProject></BestProject>
      <Project></Project>
      <Testimonials></Testimonials>
      <Achivement></Achivement>
      <Experience></Experience>
      <Education></Education>
      <Contact></Contact>
    </div>
  );
};

export default HomeContaner;
