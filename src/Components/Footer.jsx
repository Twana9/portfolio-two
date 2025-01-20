import Profile from "../../public/logo.webp";
import { Facebook, Gmail, Telegram } from "../assets/icons";
export default function Footer() {
  return (
    <div className="flex justify-center items-center w-full flex-col bg-slate-50 gap-20">
      <img src={Profile} alt="" className="w-[100px] h-[100px] rounded-full" />

      <hr className="h-[3px] w-[50%] bg-slate-gray" />
      <div className="flex justify-center items-center gap-10 w-[50%]">
        <img src={Facebook} alt="" className="w-[50px] h-[50px]" />
        <img src={Gmail} alt="" className="w-[50px] h-[50px] rounded-full" />
        <img src={Telegram} alt="" className="w-[50px] h-[50px]" />
      </div>
    </div>
  );
}
