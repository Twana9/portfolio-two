import Profile from "../../public/profile.jpg";
export default function Hero() {
  return (
    <div
      className="flex flex-col md:flex-row items-center lg:justify-between
     p-6 bg-gray-50 min-h-screen gap-[150px]
     
     "
    >
      {/* Left Section */}
      <div
        className="md:w-1/2 text-center md:text-left lg:space-y-4
      space-y-8"
      >
        <p className="text-gray-600 text-lg">Hi, I'm Twana</p>
        <h1
          className="text-3xl lg:text-4xl font-bold text-gray-800
        md:text-[38px]"
        >
          A Chemical Engineering Student
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Stage Three student at Koya University
        </p>
      </div>

      {/* Right Section */}
      <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={Profile}
          alt="Profile"
          className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] 
          sm:w-[300px] sm:h-[300px]
          rounded-3xl object-cover shadow-lg"
        />
      </div>
    </div>
  );
}
