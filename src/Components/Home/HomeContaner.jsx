import HomeBlogs from "../Blogs/HomeBlogs";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
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
            <Project></Project>
          {/*   <HomeBlogs></HomeBlogs>
            <Testimonials></Testimonials>
            <Education></Education>
            <Contact></Contact>  */}
            </div>
        </div>
    );
};

export default HomeContaner;