import { useEffect, useState } from "react";
import Profile from "../../public/logo.webp";
import { Link } from "react-router-dom";
import hamburger from "../assets/hamburger.svg";
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
      className="h-[70px] px-[30px]  
    flex justify-between items-center z-50 sticky
     shadow-nav
     shadow-black max-lg:px-[20px] max-lg:justify-between
      top-0 bg-white max-sm:px-[10px]"
    >
      <div
        onClick={() => top()}
        className="flex justify-between items-center w-[220px]
      max-md:gap-2 cursor-pointer max-xl:w-[150px] max-sm:w-[55px] max-sm:gap-0.5"
      >
        <Link
          to="/"
          className="max-lg:min-w-[65px] max-lg:min-h-[65px] h-[65px] w-[65px] "
        >
          <img
            src={Profile}
            alt=""
            className="h-[65px] w-[65px] 
        rounded-full 
        object-contain 
           max-lg:w-[65px] max-lg:h-[65px]
          mb-1"
          />
        </Link>
        <p
          className="font-palanquin pone text-[35px]
        font-bold max-xl:text-[27px] max-sm:text-[20px]
        "
        >
          Twana99
        </p>
      </div>

      {/* ///////nav/////// */}
      <ul
        className="flex justify-center items-center gap-20 
      font-palanquin font-semibold text-lg text-gray-700 
        max-xl:gap-14 max-lg:hidden
       "
      >
        <li className=" hover:cursor-pointer" onClick={() => top()}>
          <Link to="/">Home</Link>
        </li>
        <li className=" hover:cursor-pointer" onClick={() => top()}>
          <Link to="/Stage3">Stage 3</Link>
        </li>
        <li className=" hover:cursor-pointer">
          <a href="/#Skills">Skills</a>
        </li>
        <li className=" hover:cursor-pointer">
          <a href="/#Projects">Projects</a>
        </li>
        <li className=" hover:cursor-pointer">Certifications</li>
      </ul>
      <div>
        <button
          className="btnii px-8 py-3 text-white
         text-lg font-semibold rounded-lg active:translate-y-0.5
         hover:shadow-slate-300 hover:shadow-3xl max-lg:hidden"
        >
          LOGIN
        </button>
      </div>
      <div className="lg:hidden" onClick={handleClick}>
        <img
          src={hamburger}
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
            className=" hover:cursor-pointer li-small"
            onClick={(e) => {
              handleClose(e);
              scrollTo(0, 0);
            }}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={(e) => {
              handleClose(e);
              scrollTo(0, 0);
            }}
            className="li-small"
          >
            <Link to="/Stage3" className=" hover:cursor-pointer">
              Stage 3
            </Link>
          </li>
          <li
            onClick={(e) => {
              handleClose(e);
            }}
            className="li-small  hover:cursor-pointer"
          >
            <a href="/#Skills">Skills</a>
          </li>
          <li
            onClick={(e) => {
              handleClose(e);
            }}
            className="li-small  hover:cursor-pointer"
          >
            <a href="/#Projects">Projects</a>
          </li>
          <li
            onClick={(e) => {
              handleClose(e);
            }}
            className="li-small  hover:cursor-pointer"
          >
            Certifications
          </li>
          <li className="li-small  hover:cursor-pointer">
            <button
              className=" px-8 py-3 text-white
         text-lg font-semibold rounded-lg active:translate-y-0.5
         hover:shadow-slate-300 hover:shadow-3xl "
            >
              LOGIN
            </button>
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
