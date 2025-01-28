import { hobbies } from "../Constants/hobby";
import { motion } from "framer-motion";
export default function Hobbies() {
  return (
    <>
      <h1
        className="text-3xl font-palanquin text-slate-700
      font-semibold ml-10 max-sm:ml-7 mt-10 scroll-m-16 max-sm:text-2xl"
      >
        Hobbies
      </h1>
      <div
        className="grid lg:p-20 p-6 justify-items-center
       place-items-center gap-12 max-sm:gap-6
     grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {hobbies.map((hobby) => (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ translateY: "-10px" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            key={hobby.id}
            className="flex justify-between items-center 
            border-[0.1px] border-purple-200 py-3 px-2.5 rounded-2xl
            w-[220px]  cursor-pointer
            max-sm:w-[170px] shadow-lg"
          >
            <img
              src={hobby.image}
              alt=""
              className="lg:h-[45px] md:h-[35px]
            h-[25px] object-contain"
            />
            <p className="text-lg font-palanquin max-sm:text-sm">
              {hobby.name}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
