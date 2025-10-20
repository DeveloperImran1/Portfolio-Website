import Image from "next/image";

const DataNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Image
        height={1200}
        width={1200}
        className="h-[300px] w-[300px] "
        src="https://i.postimg.cc/PJX8X2QK/46524b382087d63a209441765be9eb5b-removebg-preview.png"
        alt="gift"
      />
      <h3 className="text-[20px] font-semibold text-gray-500 mt-5 ml-3">
        Another Blog is Not Available 🤔
      </h3>
    </div>
  );
};

export default DataNotFound;
