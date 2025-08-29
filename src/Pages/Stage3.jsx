import {
  unit,
  reactor,
  lab3a,
  industry,
  heat,
  model,
  eco,
  plant,
  lab3b,
} from "../Constants/semester5";
import { motion } from "framer-motion";
import Moon from "../../public/moon3.webp";
import "./stage3.css";
import { Heat2025Q } from "../assets/semester5";
export default function Stage3() {
  return (
    <div className="flex flex-col overflow-hidden">
      <div
        className="h-screen flex justify-center items-center
      xl:gap-[90px] lg:gap-[30px] max-md:flex-col max-md:gap-[150px]"
      >
        <motion.p
          initial={{ y: "-100px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="font-bold text-gray-800 font-palanquin pl-8
        xl:text-3xl lg:text-2xl md:text-xl max-sm:text-center
        max-sm:pl-0"
        >
          An Important Collection for Stage Three students
        </motion.p>
        <motion.div
          initial={{ scale: 0.05, opacity: 0.3 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeIn" }}
          className="mt-[-40px]"
        >
          <img
            src={Moon}
            alt=""
            className="xl:h-[700px] lg:h-[480px] md:h-[450px]
          animate-spinSlow object-contain max-md:h-[450px]"
          />
        </motion.div>
      </div>
      ///////PDF/////////
      <motion.h1
        initial={{ x: "200px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-2xl font-palanquin text-slate-700 md:text-3xl mb-6
      font-semibold  mt-10 scroll-m-16 w-full text-center"
      >
        Unit Operation
      </motion.h1>
      <motion.div
        initial={{ x: "200px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col justify-center items-center p-9 w-full gap-5"
      >
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a
            href={unit.Absorption}
            className="flex justify-between items-center"
          >
            Absorption Sheet
            <div>
              <a
                className="flex flex-col justify-center items-center"
                href={unit.Absorption}
                download={unit.Absorption}
              >
                <svg
                  className="svgIcon"
                  viewBox="0 0 384 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                </svg>
                <span className="icon2"></span>
              </a>
            </div>
          </a>
        </button>
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a
            href={unit.Diffusion}
            className="flex justify-between items-center"
          >
            Diffusion Sheet
            <div>
              <a
                className="flex flex-col justify-center items-center"
                href={unit.Diffusion}
                download={unit.Diffusion}
              >
                <svg
                  className="svgIcon"
                  viewBox="0 0 384 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                </svg>
                <span className="icon2"></span>
              </a>
            </div>
          </a>
        </button>
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a href={unit.Liquid} className="flex justify-between items-center">
            Extraction Sheet
            <div>
              <a
                className="flex flex-col justify-center items-center"
                href={unit.Liquid}
                download={unit.Liquid}
              >
                <svg
                  className="svgIcon"
                  viewBox="0 0 384 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                </svg>
                <span className="icon2"></span>
              </a>
            </div>
          </a>
        </button>
        <button
          className=" text-xl w-[50%] max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold "
        >
          <a href={unit.Report} className="flex justify-between items-center">
            The Report which got the best mark 6/6.5
            <div>
              <a
                className="flex flex-col justify-center items-center"
                href={unit.Report}
                download={unit.Report}
              >
                <svg
                  className="svgIcon"
                  viewBox="0 0 384 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                </svg>
                <span className="icon2"></span>
              </a>
            </div>
          </a>
        </button>
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a
            href={unit.UnitQuestions}
            className="flex justify-between items-center"
          >
            Final & Midterm Questions
            <div>
              <a
                className="flex flex-col justify-center items-center"
                href={unit.UnitQuestions}
                download={unit.UnitQuestions}
              >
                <svg
                  className="svgIcon"
                  viewBox="0 0 384 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                </svg>
                <span className="icon2"></span>
              </a>
            </div>
          </a>
        </button>
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a href={unit.Sa7dan} className="flex justify-between items-center">
            Politics of Sa7dan
            <div>
              <a
                className="flex flex-col justify-center items-center"
                href={unit.Sa7dan}
                download={unit.Sa7dan}
              >
                <svg
                  className="svgIcon"
                  viewBox="0 0 384 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                </svg>
                <span className="icon2"></span>
              </a>
            </div>
          </a>
        </button>
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a
            href={unit.UnitXuli2}
            className="flex justify-between items-center"
          >
            Final xuli 2 (2024 - 2025)
            <div>
              <a
                className="flex flex-col justify-center items-center"
                href={unit.UnitXuli2}
                download={unit.UnitXuli2}
              >
                <svg
                  className="svgIcon"
                  viewBox="0 0 384 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                </svg>
                <span className="icon2"></span>
              </a>
            </div>
          </a>
        </button>
      </motion.div>
      {/* /////////reactor////////////// */}
      <motion.h1
        initial={{ x: "200px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-2xl font-palanquin text-slate-700 md:text-3xl mb-6
      font-semibold  mt-10 scroll-m-16 w-full text-center"
      >
        Reactor Design
      </motion.h1>
      <motion.div
        initial={{ x: "200px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col justify-center items-center p-9 w-full gap-5"
      >
        <button
          className=" text-xl w-[50%]  px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a
            href={reactor.Sheet1}
            className="flex justify-between items-center"
          >
            Sheet-1 answers
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>
        <button
          className=" text-xl w-[50%]  px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a
            href={reactor.Sheet2}
            className="flex justify-between items-center"
          >
            Sheet-2 answers
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>
        <button
          className=" text-xl w-[50%]  px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a
            href={reactor.Sheet3}
            className="flex justify-between items-center"
          >
            Sheet-3 answers
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a
            href={reactor.Sheet4}
            className="flex justify-between items-center"
          >
            Sheet-4 answers
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a
            href={reactor.ReactorQuestions}
            className="flex justify-between items-center"
          >
            Final & Midterm Questions + Sa7dan
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>
      </motion.div>
      {/* ////////////Lab-3//////////// */}
      <motion.h1
        initial={{ x: "200px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-2xl font-palanquin text-slate-700 md:text-3xl mb-6
      font-semibold  mt-10 scroll-m-16 w-full text-center"
      >
        Lab-3
      </motion.h1>
      <motion.div
        initial={{ x: "200px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col justify-center items-center p-9 w-full gap-5"
      >
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a href={lab3a.Heat1} className="flex justify-between items-center">
            Double Pipe Heat exchanger
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a href={lab3a.Service} className="flex justify-between items-center">
            Service unit & Control interface
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a
            href={lab3a.Solutions}
            className="flex justify-between items-center"
          >
            Preparing of Solutions
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a
            href={lab3a.BatchReactor}
            className="flex justify-between items-center"
          >
            Batch Reactor
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>
      </motion.div>
      {/* ////////////industry///////////// */}
      <motion.h1
        initial={{ x: "200px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-2xl font-palanquin text-slate-700 md:text-3xl mb-6
      font-semibold  mt-10 scroll-m-16 w-full text-center"
      >
        Chemical Industries
      </motion.h1>
      <motion.div
        initial={{ x: "200px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col justify-center items-center p-9 w-full gap-5"
      >
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a
            href={industry.IndustryQuestions}
            className="flex justify-between items-center"
          >
            Final & Midterm Questions
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>
      </motion.div>
      {/* /////////////Heat//////////////////////////// */}
      <motion.h1
        initial={{ x: "200px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-2xl font-palanquin text-slate-700 md:text-3xl mb-6
      font-semibold  mt-10 scroll-m-16 w-full text-center"
      >
        Heat Transfer
      </motion.h1>
      <motion.div
        initial={{ x: "200px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col justify-center items-center p-9 w-full gap-5"
      >
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a
            href={heat.HeatSa7dan}
            className="flex justify-between items-center"
          >
            Sa7dan
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>

        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a
            href={heat.Heat2025Q}
            className="flex justify-between items-center"
          >
            Midterm + Final-Xuli1 2025
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>
      </motion.div>
      {/* ///////////////Modelling///////////////////////////////////////////////////////////////////////////////////// */}
      <motion.h1
        initial={{ x: "200px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-2xl font-palanquin text-slate-700 md:text-3xl mb-6
      font-semibold  mt-10 scroll-m-16 w-full text-center"
      >
        Mathmatical Modelling
      </motion.h1>
      <motion.div
        initial={{ x: "200px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col justify-center items-center p-9 w-full gap-5"
      >
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a href={model.ModelL1} className="flex justify-between items-center">
            Lecture 1 answers
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a href={model.ModelL2} className="flex justify-between items-center">
            Lecture 2 answers
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a href={model.ModelL3} className="flex justify-between items-center">
            Lecture 3 answers
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a href={model.ModelL4} className="flex justify-between items-center">
            Lecture 4 answers
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a
            href={model.ModelOldQ}
            className="flex justify-between items-center"
          >
            Midterms & Finals of last years
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a
            href={model.Model2025Q}
            className="flex justify-between items-center"
          >
            Midterm & Final_xuli_1 of 2025
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a
            href={model.ModelSa7dan}
            className="flex justify-between items-center"
          >
            Politics of Sa7dan (very good)
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>
      </motion.div>
      {/* //////////////////Economic//////////////////////////////////////////////////////////////////////////// */}
      <motion.h1
        initial={{ x: "200px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-2xl font-palanquin text-slate-700 md:text-3xl mb-6
      font-semibold  mt-10 scroll-m-16 w-full text-center"
      >
        Economic & Statistics
      </motion.h1>
      <motion.div
        initial={{ x: "200px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col justify-center items-center p-9 w-full gap-5"
      >
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a href={eco.EcoOldQ} className="flex justify-between items-center">
            Final & Midterm of the last years
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a href={eco.Eco2025Q} className="flex justify-between items-center">
            Final-Xuli1 & Midterm of 2025
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>
      </motion.div>
      {/* /////////////////////////////Plant ///////////////////////////////////////////////////////////////// */}
      <motion.h1
        initial={{ x: "200px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-2xl font-palanquin text-slate-700 md:text-3xl mb-6
      font-semibold  mt-10 scroll-m-16 w-full text-center"
      >
        Plant Design
      </motion.h1>
      <motion.div
        initial={{ x: "200px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col justify-center items-center p-9 w-full gap-5"
      >
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a
            href={plant.Plant2025Q}
            className="flex justify-between items-center"
          >
            Final-xuli1 & Midterm Of 2025
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>
      </motion.div>
      {/* /////////////////////////Lab3-II///////////////////////////////////////////////////////// */}
      <motion.h1
        initial={{ x: "200px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-2xl font-palanquin text-slate-700 md:text-3xl mb-6
      font-semibold  mt-10 scroll-m-16 w-full text-center"
      >
        Lab 3-II
      </motion.h1>
      <motion.div
        initial={{ x: "200px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col justify-center items-center p-9 w-full gap-5"
      >
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a href={lab3b.Shell} className="flex justify-between items-center">
            Shell & Tube Heat Exchanger
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a href={lab3b.LT} className="flex justify-between items-center">
            Linear Heat Transfer
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>{" "}
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a href={lab3b.LD} className="flex justify-between items-center">
            Linear Heat Transfer Different Area
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>{" "}
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a href={lab3b.Tubular} className="flex justify-between items-center">
            Tubular Flow Reactor
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>{" "}
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a
            href={lab3b.SingleCSTR}
            className="flex justify-between items-center"
          >
            Single CSTR Reactor
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>{" "}
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a
            href={lab3b.CSTRSeries}
            className="flex justify-between items-center"
          >
            CSTR In Series
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>{" "}
        <button
          className=" text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold 
         max-lg:w-[70%] max-md:w-[88%] max-sm:text-sm max-sm:w-[100%]"
        >
          <a href={lab3b.Laminar} className="flex justify-between items-center">
            Laminar Flow Reactor
            <div className="flex flex-col justify-center items-center">
              <svg
                className="svgIcon"
                viewBox="0 0 384 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="icon2"></span>
            </div>
          </a>
        </button>{" "}
      </motion.div>
    </div>
  );
}
