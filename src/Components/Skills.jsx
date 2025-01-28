import { motion } from "framer-motion";
import Gym from "../assets/gym.png";
export default function Skills() {
  return (
    <>
      <h1
        id="Skills"
        className=" text-3xl font-palanquin text-slate-700
      font-semibold ml-10 max-sm:ml-7 my-10 scroll-m-20
      max-sm:text-2xl"
      >
        Skills
      </h1>
      <div
        className="grid p-5 justify-items-center
       place-items-center gap-16 overflow-hidden
     grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <motion.div
          initial={{ x: "200px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-white border-[0.1px] border-purple-300 h-[250px]
      w-[290px] rounded-xl border-b-4 flex flex-col shadow-lg "
        >
          <div
            className="m-4 rounded-2xl bg-purple-100
           w-[60px] h-[60px] flex justify-center items-center"
          >
            <img src={Gym} alt="" className="w-[50px]" />
          </div>
          <p className="text-gray-500  mx-[5%] text-sm mt-5 ">
            basic understanding of metabolism and bodybuilding, i can write my
            own course, i did 3 years of training and 5 months of hard training
            before, so learn somthing
          </p>
        </motion.div>
        <motion.div
          initial={{ x: "200px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-white border-[0.1px] border-purple-300 h-[250px]
      w-[290px] rounded-xl border-b-4 flex flex-col shadow-lg"
        ></motion.div>
        <motion.div
          initial={{ x: "200px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-white border-[0.1px] border-purple-300 h-[250px]
      w-[290px] rounded-xl border-b-4 flex flex-col shadow-lg"
        ></motion.div>
        <motion.div
          initial={{ x: "200px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-white border-[0.1px] border-purple-300 h-[250px]
      w-[290px] rounded-xl border-b-4 flex flex-col shadow-lg"
        ></motion.div>
        <motion.div
          initial={{ x: "200px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-white border-[0.1px] border-purple-300 h-[250px]
      w-[290px] rounded-xl border-b-4 flex flex-col shadow-lg"
        ></motion.div>
      </div>
    </>
  );
}
