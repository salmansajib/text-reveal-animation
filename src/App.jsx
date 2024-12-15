import splitString from "./utils/splitString";
import { motion } from "motion/react";

const heading = "Elegent Text Reveal";
const text =
  "🌏✨ Transform your web content using Framer Motion's UTF-16 powered text animations Each character, a vibrant performer, dances dynamically, weaving a captivating narrative, Elevate user engagement with the art of animated storytelling. 🚀🎉";

const charVariants = {
  hidden: {
    opacity: 0,
  },
  reveal: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function App() {
  const headingChars = splitString(heading);
  const textchars = splitString(text);

  return (
    <main className="bg-slate-950 text-gray-200 min-h-svh grid place-content-center p-4">
      <div className="max-w-[350px] mx-auto text-center space-y-10">
        <motion.h1
          initial="hidden"
          animate="reveal"
          transition={{
            staggerChildren: 0.09,
          }}
          className="text-5xl font-semibold leading-[55px]"
        >
          {headingChars.map((char) => (
            <motion.span key={char} variants={charVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="reveal"
          transition={{
            staggerChildren: 0.01,
          }}
        >
          {textchars.map((char) => (
            <motion.span key={char} variants={charVariants}>
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </main>
  );
}

export default App;
