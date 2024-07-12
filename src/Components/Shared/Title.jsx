// import '../../index.css'
const Title = ({title, description}) => {

    return (
        <div>
            <h1 id="title" className="text-3xl mb-5 font-bold text-center mx-auto">{title}</h1>
            <p className="md:w-[60%] mx-auto text-center hidden md:block" >{description}</p>


        </div>
    );
};

export default Title;