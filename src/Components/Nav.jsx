import { useEffect, useState } from "react";
import Profile from "../../public/logo.webp";
import { Link } from "react-router-dom";
import Hamburger from "../assets/hamburger.svg";
import "./Nav.css";
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
    setIsMenuOpen(true);
  }
  function handleClose(e) {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  }
  function top() {
    window.scrollTo(0, 0);
  }
  ///////////////////////////////////////////////////
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) setIsMenuOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);
  ///////////////////////////////////////////////////
  useEffect(() => {
    if (isMenuOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);
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
      <div className="lg:hidden" onClick={handleClick}>
        <img
          src={Hamburger}
          alt="nav"
          height={45}
          width={45}
          className="object-contain max-md:h-[33px] max-md:w-[33px]
            max-lg:w-[40px] max-lg:h-[40px] cursor-pointer"
        />

        <Hamburger isMenuOpen={isMenuOpen} handleClose={handleClose} />
      </div>
    </div>
  );
}
function Hamburger({ isMenuOpen, handleClose }) {
  return (
    <div
      className={`fixed  inset-0 transform lg:hidden
      transition-transform duration-400 z-50 
      ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div
        className="absolute top-0 right-0 w-[80%] h-full
       bg-white z-40 p-4"
      >
        <ul
          className="flex flex-col items-start gap-10
        font-medium text-lg text-slate-700
        font-monserat p-16 "
        >
          <li
            onClick={(e) => {
              handleClose(e);
            }}
            className="li-small"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={(e) => {
              handleClose(e);
            }}
            className="li-small"
          >
            Men
          </li>
          <li
            onClick={(e) => {
              handleClose(e);
            }}
            className="li-small"
          >
            Women
          </li>
        </ul>
      </div>
      <div
        onClick={handleClose}
        className={`fixed top-0  right-0 h-full w-full
         bg-black  opacity-40 `}
      ></div>
    </div>
  );
}
