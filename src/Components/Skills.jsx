import { motion } from "framer-motion";
export default function Skills() {
  return (
    <>
      <h1
        id="Skills"
        className=" text-3xl font-palanquin text-slate-700
      font-semibold ml-10 mt-10 scroll-m-16"
      >
        Skills
      </h1>
      <div
        className="grid p-5 justify-items-center
       place-items-center gap-16
     grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <motion.div
          initial={{ x: "200px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-green-50 border border-green-200 h-[250px]
      w-[290px] rounded-xl border-b-4"
        ></motion.div>
        <motion.div
          initial={{ x: "200px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-green-50 border border-green-200 h-[250px]
      w-[290px] rounded-xl border-b-4"
        ></motion.div>
        <motion.div
          initial={{ x: "200px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-green-50 border border-green-200 h-[250px]
      w-[290px] rounded-xl border-b-4"
        ></motion.div>
        <div
          className="bg-green-50 border border-green-200 h-[250px]
      w-[290px] rounded-xl border-b-4"
        ></div>
        <motion.div
          initial={{ x: "200px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ durx: "200px", ease: "easeInOut" }}
          className="bg-green-50 border border-green-200 h-[250px]
      w-[290px] rounded-xl border-b-4"
        ></motion.div>
        <motion.div
          initial={{ x: "200px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-green-50 border border-green-200 h-[250px]
      w-[290px] rounded-xl border-b-4"
        ></motion.div>
      </div>
    </>
  );
}
