import Title from "../Shared/Title";
import Blogs from "./Blogs";

const HomeBlogs = () => {
    return (
        <div className="max-w-[100vw] md:max-w-[100vw-220px]">
            <div id="blogs" className="flex flex-col justify-start items-center gap-4 my-7 mt-[80px]" >
                <Title title={"My Blogs"} description={"Explore tech insights, tutorials, and updates on web development, software engineering, and emerging technologies—fueling curiosity and innovation in the digital realm."}></Title>
                {/* <h2 className="text-3xl font-bold " >Explore Our All Blogs</h2> */}
            </div>

            <Blogs></Blogs>
        </div>
    );
};

export default HomeBlogs;