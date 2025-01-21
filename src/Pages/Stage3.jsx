import Moon from "../../public/moon3.webp";
import "./stage3.css";
import { Absorption } from "../assets/semester5";
export default function Stage3() {
  return (
    <div className="flex flex-col overflow-hidden">
      <div
        className="h-screen flex justify-center items-center
      xl:gap-[90px] lg:gap-[30px] max-md:flex-col max-md:gap-[150px]"
      >
        <p
          className="font-bold text-gray-800 font-palanquin pl-8
        xl:text-3xl lg:text-2xl md:text-xl max-sm:text-center
        max-sm:pl-0"
        >
          An Important Collection for Stage Three students
        </p>
        <div className="mt-[-40px]">
          <img
            src={Moon}
            alt=""
            className="xl:h-[750px] lg:h-[500px] md:h-[450px]
          animate-spinSlow object-contain max-md:h-[450px]"
          />
        </div>
      </div>
      {/* ///////PDF///////// */}

      <div className="flex flex-col justify-center items-center p-9">
        <button
          class="flex justify-between items-center text-xl w-[50%] px-5 rounded-xl
         bg-purple-500 h-[60px] text-white font-bold"
        >
          <a href={Absorption} download={Absorption}>
            Absorbtion Sheet
          </a>
          <div className="flex flex-col justify-center items-center">
            <svg
              class="svgIcon"
              viewBox="0 0 384 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
            </svg>
            <span class="icon2"></span>
          </div>
        </button>
      </div>
    </div>
  );
}
