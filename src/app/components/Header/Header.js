"use client";
import React, { useEffect, useState } from "react";

export default function header() {
  const [selectedIndex1, setSelectedIdex1] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(isScrolled);

  return (
    <React.Fragment>
      <header
        className={`${
          isScrolled ? "headerShow" : ""
        } fixed top-0 z-50 transition-all duration-500`}
        style={{
          backgroundColor: isScrolled ? "#fff" : "transparent",
          boxShadow: isScrolled ? "#48AFDE -10px 25px 50px 10px" : "",
        }}
      >
        <nav className="invinsible xl:visible xl:max-w-4xl 2xl:max-w-7xl mx-auto ">
          <ul className="flex font-recoletaBlack flex-row items-center h-24">
            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex1 === 0 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-100 rotate-12 group-hover:-rotate:opacity-100"></span>
              )}
              <a
                className={`menu-item ${
                  selectedIndex1 === 0 ? "text-black" : ""
                } text-[#666D47] group-hover:text-black`}
                href="/#home"
                onClick={() => setSelectedIdex1(0)}
              >
                Home
              </a>
            </li>
            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex1 === 1 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-100 rotate-12 group-hover:-rotate:opacity-100"></span>
              )}
              <a
                className={`menu-item ${
                  selectedIndex1 === 0 ? "text-black" : ""
                } text-[#666D47] group-hover:text-black`}
                href="/#portfolio"
                onClick={() => setSelectedIdex1(1)}
              >
                Portfoilo
              </a>
            </li>
            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex1 === 2 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-100 rotate-12 group-hover:-rotate:opacity-100"></span>
              )}
              <a
                className={`menu-item ${
                  selectedIndex1 === 0 ? "text-black" : ""
                } text-[#666D47] group-hover:text-black`}
                href="/#about-me-components"
                onClick={() => setSelectedIdex1(2)}
              >
                About Me
              </a>
            </li>
            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex1 === 3 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-100 rotate-12 group-hover:-rotate:opacity-100"></span>
              )}
              <a
                className={`menu-item ${
                  selectedIndex1 === 0 ? "text-black" : ""
                } text-[#666d47] group-hover:text-black`}
                href="/#home"
                onClick={() => setSelectedIdex1(3)}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}
