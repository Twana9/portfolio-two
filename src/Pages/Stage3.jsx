import Moon from "../../public/moon3.webp";
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
    </div>
  );
}
