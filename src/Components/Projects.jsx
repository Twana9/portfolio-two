import { motion } from "framer-motion";
export default function Projects() {
  return (
    <>
      <h1
        id="Projects"
        className=" text-3xl font-palanquin text-slate-700
  font-semibold ml-10 mt-10 scroll-m-16"
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
          className="bg-red-50 border border-red-300 h-[250px]
  w-[290px] rounded-xl border-b-4"
        ></motion.div>
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-red-50 border border-red-300 h-[250px]
  w-[290px] rounded-xl border-b-4"
        ></motion.div>
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-red-50 border border-red-300 h-[250px]
  w-[290px] rounded-xl border-b-4"
        ></motion.div>
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-red-50 border border-red-300 h-[250px]
  w-[290px] rounded-xl border-b-4"
        ></motion.div>
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-red-50 border border-red-300 h-[250px]
  w-[290px] rounded-xl border-b-4"
        ></motion.div>
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-red-50 border border-red-300 h-[250px]
  w-[290px] rounded-xl border-b-4"
        ></motion.div>
      </div>
    </>
  );
}
