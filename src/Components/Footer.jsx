import { Link } from "react-router-dom";
import Profile from "../../public/logo.webp";
import { Facebook, Gmail, Telegram } from "../assets/icons";
export default function Footer() {
  return (
    <div
      className="flex justify-center items-center w-full flex-col
     bg-slate-50 gap-7 py-10"
    >
      <Link to="/">
        <img
          onClick={() => scrollTo(0, 0)}
          src={Profile}
          alt=""
          className="w-[100px] h-[100px] rounded-full mt-10
        cursor-pointer transform duration-200 hover:scale-110"
        />
      </Link>

      <hr className="h-[4px] w-[50%] bg-slate-300 rounded-full max-sm:w-[70%]" />
      <div
        className="flex justify-center items-center gap-16 w-[50%] 
      max-sm:gap-7 pb-6"
      >
        <img
          src={Facebook}
          alt=""
          className="w-[50px] h-[50px] transform duration-200 hover:scale-125   cursor-pointer"
        />
        <a href="mailto:twana.00569020@gmail.com">
          <img
            src={Gmail}
            alt=""
            className="w-[50px] h-[50px]  transform duration-200 hover:scale-125   cursor-pointer  rounded-full"
          />
        </a>
        <img
          src={Telegram}
          alt=""
          className="w-[50px] h-[50px] transform duration-200 hover:scale-125  cursor-pointer"
        />
      </div>
      <p className="text-xl font-sans pb-10"> Developed by Astepor Co. </p>
    </div>
  );
}
