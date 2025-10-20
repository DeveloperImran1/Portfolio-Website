import { motion } from "framer-motion";

const letterAnimation = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.2, 0, 0.1, 1], delay: i[0] },
  }),
};

const getLetter = (name) => {
  const letters = [];
  name.split("").forEach((letter, index) => {
    return letters.push(
      <motion.span
        variants={letterAnimation}
        initial="initial"
        whileInView="animate"
        custom={[index * 0.02, (name.length - index) * 0.01]}
        key={index}
      >
        {letter}
      </motion.span>
    );
  });
  return letters;
};

const Title = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center">
      {/* <div className={`${textStyles}`}>{getLetter(text)}</div>; */}
      <div
        id="title"
        className="text-3xl mb-5 w-full font-bold text-center mx-auto"
      >
        {getLetter(title)}
      </div>
      <p className="md:w-[60%] mx-auto text-center hidden md:block">
        {getLetter(description)}
      </p>
    </div>
  );
};

export default Title;
