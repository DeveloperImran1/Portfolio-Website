// import '../../index.css'
const Title = ({ title, description }) => {

    return (
        <div className="flex flex-col items-center">
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" id="title" className="text-3xl mb-5 w-full font-bold text-center mx-auto">{title}</div>
            <p data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className="md:w-[60%] mx-auto text-center hidden md:block" >{description}</p>


        </div>
    );
};

export default Title;