import { hobbies } from "../Constants/hobby";
export default function Hobbies() {
  return (
    <>
      <h1
        className="text-3xl font-palanquin text-slate-700
      font-semibold ml-10 mt-10 scroll-m-16"
      >
        Hobbies
      </h1>
      <div
        className="grid p-5 justify-items-center
       place-items-center gap-16
     grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {hobbies.map((hobby) => (
          <div id={hobby.id} className="flex justify-between items-center">
            <img src={hobby.image} alt="" />
            <p>{hobby.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
