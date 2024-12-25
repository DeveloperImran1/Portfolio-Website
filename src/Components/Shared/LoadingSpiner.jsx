import { RotateLoader, ScaleLoader } from "react-spinners";

const Loading = () => {
    return (
            <div className="flex justify-center items-center flex-col min-h-[calc(100vh-116px)] ">
                <ScaleLoader color='#00bffe'></ScaleLoader>
            </div>
    );
};

export default Loading;