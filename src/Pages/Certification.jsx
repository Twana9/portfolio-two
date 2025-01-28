import Cert from "../assets/certification.jpg";
export default function Certification() {
  return (
    <div
      className=" grid   xl:my-32 
                        lg:my-28
                        md:my-20
                        my-16
      justify-items-center
   place-items-center  gap-[20px] 
 grid-cols-1 md:grid-cols-2 xl:grid-cols-3
 xl:w-[1060px]  md:w-[700px]
 place-self-center"
    >
      <div
        className="w-[340px] h-[241px] border-[0.1px]
        rounded-md border-pink-400 shadow-md
      border-b-4 bg-white overflow-hidden"
      >
        <img src={Cert} alt="" className="" />
      </div>
      <div
        className="w-[340px] h-[241px] border-[0.1px]
        rounded-md border-pink-400 shadow-md
      border-b-4 bg-white overflow-hidden"
      >
        <img src={Cert} alt="" className="" />
      </div>
      <div
        className="w-[340px] h-[241px] border-[0.1px]
        rounded-md border-pink-400 shadow-md
      border-b-4 bg-white overflow-hidden"
      >
        <img src={Cert} alt="" className="" />
      </div>
    </div>
  );
}
