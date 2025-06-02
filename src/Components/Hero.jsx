import Profile from "../../public/profile.jpg";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div
      className="flex flex-col md:flex-row items-center lg:justify-between
     p-6 bg-gray-50 sm:min-h-screen gap-[150px] max-sm:gap-[100px]
     max-sm:h-[85vh]
     "
    >
      {/* Left Section */}
      <div
        className="md:w-1/2 text-center md:text-left lg:space-y-4
      space-y-8"
      >
        <motion.p
          initial={{ y: "-160px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="text-gray-600 text-lg max-sm:text-sm"
        >
          Hi, I'm Twana
        </motion.p>
        <motion.h1
          initial={{ y: "-140px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-3xl lg:text-4xl font-bold text-gray-800
        md:text-[38px] md:leading-10"
        >
          A{" "}
          <span className="bg-purple whitespace-nowrap">
            Chemical Engineering
          </span>{" "}
          Student
        </motion.h1>
        <motion.p
          initial={{ y: "-120px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-gray-600 text-base md:text-xl max-sm:text-sm
          "
        >
          Stage Four student at Koya University
        </motion.p>
      </div>

      {/* Right Section */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="mt-6 md:mt-0 md:w-1/2 flex justify-center"
      >
        <img
          src={Profile}
          alt="Profile"
          className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] 
          sm:w-[300px] sm:h-[300px]
          rounded-3xl object-cover shadow-lg"
        />
      </motion.div>
    </div>
  );
}
