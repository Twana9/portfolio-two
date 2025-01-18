import Profile from "../../public/logo.webp";
export default function Nav() {
  return (
    <div
      className="h-[70px] px-[30px] border border-red-700 
    flex justify-between items-center z-50 sticky"
    >
      <div className="flex justify-between items-center w-[220px]">
        <img
          src={Profile}
          alt=""
          className="h-[61px] w-[60px] 
        rounded-full shadow-slate-500 shadow-sm"
        />
        <p
          className="font-palanquin text-coral-red text-[35px]
        font-bold"
        >
          Twana99
        </p>
      </div>

      {/* ///////nav/////// */}
      <ul
        className="flex justify-center items-center gap-10 
      font-palanquin font-semibold text-lg text-slate-800 
       lg:gap-20"
      >
        <li className="hover:text-coral-red hover:cursor-pointer">Home</li>
        <li className="hover:text-coral-red hover:cursor-pointer">Stage 3</li>
        <li className="hover:text-coral-red hover:cursor-pointer">Skills</li>
        <li className="hover:text-coral-red hover:cursor-pointer">Projects</li>
        <li className="hover:text-coral-red hover:cursor-pointer">
          Certifications
        </li>
      </ul>
      <div>
        <button
          className="bg-coral-red px-8 py-3 text-white
         text-lg font-semibold rounded-lg active:translate-y-0.5
         hover:shadow-slate-300 hover:shadow-3xl"
        >
          LOGIN
        </button>
      </div>
    </div>
  );
}
