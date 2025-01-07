import Achivement from "../Achivement/Achivement";
import BestProject from "../BestProject/BestProject";
import HomeBlogs from "../Blogs/HomeBlogs";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Project from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Testimonials from "../Testimonials/Testimonials";
import Home from "./Home";

const HomeContaner = () => {
    return (
        <div>
            <Home></Home>

            <div >
                <Skills></Skills>
                <BestProject></BestProject>
                <Project></Project>
                <Testimonials></Testimonials>
                <Achivement></Achivement>
                <Experience></Experience>
                <Education></Education>
                <HomeBlogs></HomeBlogs>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default HomeContaner;