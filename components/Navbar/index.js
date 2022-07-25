import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Navbar() {
  const router = useRouter();
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 50) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <nav
      className={`py-4 bg-white sticky top-0 left-0 px-6 flex items-center justify-between border-b transition-all duration-300 z-10 ${
        colorChange ? "shadow-2xl shadow-slate-500/20" : "shadow-none"
      } `}
    >
      <i className="bi bi-list text-2xl"></i>
      <div className="flex items-center">
        <img src="/logoDark.png" className="h-7" alt="" />
        <p className="text-xl font-bold text-slate-900 ml-3">Peticious.</p>
      </div>
      <div className="flex items-center ">
        <div className="px-6 py-4 grid grid-cols-3 fixed bottom-0 left-0 w-full border-t bg-white  shadow-3xl">
          <Link href={`/`}>
            <a
              className={`flex ${
                router.pathname == "/" && " text-red-500"
              } items-center w-full justify-center`}
            >
              <i
                className={`bi ${
                  router.pathname == "/" ? "bi-house-fill" : "bi-house"
                }`}
              ></i>
              <span className="text-sm ml-2">Home</span>
            </a>
          </Link>
          <Link href={`/discuss`}>
            <a
              className={`flex ${
                router.pathname == "/discuss" && " text-red-500"
              } items-center w-full justify-center`}
            >
              <i
                className={`bi ${
                  router.pathname == "/discuss"
                    ? "bi-lightbulb-fill"
                    : "bi-lightbulb"
                }`}
              ></i>
              <span className="text-sm ml-2">Discuss</span>
            </a>
          </Link>
          <a
            className={`flex ${
              router.pathname == "/profile" && " text-red-500"
            } items-center w-full justify-center`}
          >
            <i className="bi bi-person"></i>
            <span className="text-sm ml-2">Profile</span>
          </a>
        </div>
        <i className="bi bi-search text-lg"></i>
      </div>
    </nav>
  );
}

export default Navbar;
