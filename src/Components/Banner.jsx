const Banner = () => {
  return (
    <div className="bg-blue-400 p-9" >
      <div className="flex w-full justify-between items-center border-2">
        <div className="w-[50%]">
          <h1 className="text-6xl font-bold">Hellow! I'am Imran. Front End-Developer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            modi enim fuga cumque dolor laudantium nam quaerat, obcaecati libero
            ullam?
          </p>
        </div>
        <div>
            {/* <motion.svg 
            // <motion.svg
            className="w-[309px] xl:w-[506px] h-[300px] xl:h-[506px]"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle
                cx="253"
                cy="253"
                r="2500"
                stroke="#00ff99"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{strokeDasharray: "24 10 0 0"}}
                animate={{
                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                    rotate:[120, 360]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }}
                >

                </motion.circle>
            </motion.svg> */}
          <img
            className="rounded-full w-[200px] h-[200px]"
            src="https://i.ibb.co/BKsFN43/20230317-180426.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Banner;
