import { motion } from "framer-motion";
import Gym from "../assets/gym.png";
import Language from "../assets/translator.png";
import Psycho from "../assets/mind.png";
import Oil from "../assets/refinery.png";
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
        {/* ///psycho////////////////////////////////////////////////////////////////////// */}
        <motion.div
          initial={{ x: "200px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-white border-[0.1px] border-purple-300 h-[250px]
      w-[290px] rounded-xl border-b-4 flex flex-col shadow-lg cursor-pointer "
        >
          <div
            className="m-4 rounded-2xl bg-purple-100
           w-[60px] min-h-[60px] flex justify-center items-center"
          >
            <img src={Psycho} alt="" className="w-[40px]" />
          </div>
          <h3
            className="text-start ml-[5%] font-palanquin
           text-slate-700 mt-1 font-semibold"
          >
            Psychological analyzing
          </h3>
          <p className="text-gray-500  mx-[5%] text-sm mt-3 overflow-y-auto">
            I am not sure where or when I learned this, but I know how to read
            people and their behavior. People often say I’m really good at it. I
            never had the intention to learn it, but I think I picked it up from
            reading some books and following certain accounts on social media, I
            don't like this by the way
          </p>
        </motion.div>
        {/* ///bodybuilding/////////////////////////////////////////////////////////////////////////////*/}
        <motion.div
          initial={{ x: "200px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-white border-[0.1px] border-purple-300 h-[250px]
      w-[290px] rounded-xl border-b-4 flex flex-col shadow-lg cursor-pointer "
        >
          <div
            className="m-4 rounded-2xl bg-purple-100
           w-[60px] h-[60px] flex justify-center items-center"
          >
            <img src={Gym} alt="" className="w-[50px]" />
          </div>
          <h3
            className="text-start ml-[5%] font-palanquin
           text-slate-700 mt-1 font-semibold"
          >
            bodybuilding
          </h3>
          <p className="text-gray-500  mx-[5%] text-sm mt-3 ">
            basic understanding of metabolism and bodybuilding, i can write my
            own course, i did 3 years of training and 5 months of hard training
            before, so i learned something
          </p>
        </motion.div>
        {/* /////Language/////////////////////////////////////////////////////////////// */}
        <motion.div
          initial={{ x: "200px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-white border-[0.1px] border-purple-300 h-[250px]
      w-[290px] rounded-xl border-b-4 flex flex-col shadow-lg 
      cursor-pointer"
        >
          <div
            className="m-4 rounded-2xl bg-purple-100
           w-[60px] h-[60px] flex justify-center items-center"
          >
            <img src={Language} alt="ABC" className="w-[50px]" />
          </div>
          <h3
            className="text-start ml-[5%] font-palanquin
           text-slate-700 mt-1 font-semibold"
          >
            languages
          </h3>
          <p className="text-gray-500  mx-[5%] text-sm mt-3 ">
            medium to advanced in Arabic & English, i'm good at listening and
            writing , but i experience difficulty while speaking due to not
            using those languages in daily life.
          </p>
        </motion.div>
        {/* /////////Oil//////////////////////////////////////////////// */}
        <motion.div
          initial={{ x: "200px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-white border-[0.1px] border-purple-300 h-[250px]
      w-[290px] rounded-xl border-b-4 flex flex-col shadow-lg 
      cursor-pointer"
        >
          <div
            className="m-4 rounded-2xl bg-purple-100
           w-[60px] h-[60px] flex justify-center items-center"
          >
            <img src={Oil} alt="ABC" className="w-[50px]" />
          </div>
          <h3
            className="text-start ml-[5%] font-palanquin
           text-slate-700 mt-1 font-semibold"
          >
            Refinery Operating
          </h3>
          <p className="text-gray-500  mx-[5%] text-sm mt-3 overflow-y-scroll">
            In stage three, Refinery was a popular subject among students, so
            when the teachers taught it, I paid close attention. During my
            summer training, I learned a lot about the process, and my curiosity
            pushed me to gain even more knowledge by searching on the internet.
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
      </div>
    </>
  );
}
