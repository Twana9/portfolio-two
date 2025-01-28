import { motion } from "framer-motion";
import Refinery from "../assets/refinery.webp";
export default function Projects() {
  return (
    <>
      <h1
        id="Projects"
        className=" text-3xl font-palanquin text-slate-700
  font-semibold ml-10 mt-16  mb-10 max-sm:ml-7 scroll-m-20
  max-sm:text-2xl"
      >
        Projects
      </h1>
      <div
        className="skills grid p-5 justify-items-center
   place-items-center gap-16 
 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-white border-[0.1px] border-purple-300 h-[290px]
  w-[290px] rounded-xl border-b-4 shadow-lg
  flex flex-col overflow-hidden cursor-pointer
  "
        >
          <div
            className="overflow-hidden w-[93%] h-[59%] mt-[3%]
          rounded-xl place-self-center"
          >
            <img
              src={Refinery}
              alt=""
              className="w-[100%] h-[100%] 
          rounded-xl place-self-center transform hover:scale-[1.5]
           transition-transform duration-300 overflow-hidden
          "
            />
          </div>
          <h3
            className="text-start ml-[5%] font-palanquin
           text-slate-700 mt-4 font-semibold"
          >
            Refinery plant
          </h3>
          <p className="text-gray-500  ml-[5%] text-sm mt-3">
            a fake example of a project
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-white border-[0.1px] border-purple-300 h-[290px]
  w-[290px] rounded-xl border-b-4 shadow-lg
  flex flex-col overflow-hidden cursor-pointer"
        ></motion.div>
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-white border-[0.1px] border-purple-300 h-[290px]
  w-[290px] rounded-xl border-b-4 shadow-lg
  flex flex-col overflow-hidden cursor-pointer"
        ></motion.div>
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-white border-[0.1px] border-purple-300 h-[290px]
  w-[290px] rounded-xl border-b-4 shadow-lg
  flex flex-col overflow-hidden cursor-pointer"
        ></motion.div>
      </div>
    </>
  );
}
