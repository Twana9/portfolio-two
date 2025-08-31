import Cert from "../assets/certification.jpg";
import One from "../assets/one--.jpg";
import Two from "../assets/two---.jpg";
import Three from "../assets/three---.jpg";
import Four from "../assets/four---.jpg";
import { motion } from "framer-motion";
export default function Certification() {
  return (
    <div
      className=" grid   xl:my-32 
                        lg:my-28
                        md:my-20
                        my-16
      justify-items-center
   place-items-center  gap-[20px] 
 grid-cols-1 md:grid-cols-2 xl:grid-cols-3
 xl:w-[1060px]  md:w-[700px]
 place-self-center"
    >
      <motion.div
        initial={{ scale: 0.7 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="w-[340px] h-[241px] border-[0.1px]
        rounded-md border-pink-400 shadow-md
      border-b-4 bg-white overflow-hidden"
      >
        <img src={One} alt="" className="" />
      </motion.div>
      <motion.div
        initial={{ scale: 0.7 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="w-[340px] h-[241px] border-[0.1px]
        rounded-md border-pink-400 shadow-md
      border-b-4 bg-white overflow-hidden"
      >
        <img src={Two} alt="" className="" />
      </motion.div>
      <motion.div
        initial={{ scale: 0.7 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="w-[340px] h-[241px] border-[0.1px]
        rounded-md border-pink-400 shadow-md
      border-b-4 bg-white overflow-hidden "
      >
        <img src={Three} alt="" className="h-[100%] justify-self-center" />
      </motion.div>
      <motion.div
        initial={{ scale: 0.7 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="w-[340px] h-[241px] border-[0.1px]
        rounded-md border-pink-400 shadow-md
      border-b-4 bg-white overflow-hidden"
      >
        <img src={Four} alt="" className="" />
      </motion.div>
    </div>
  );
}
