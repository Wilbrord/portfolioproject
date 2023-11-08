import React from "react";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function HomeComponents() {
  return (
    <React.Fragment>
      <div
        id="home"
        style={{
          backgroundImage:
            "linear-gradient(62deg, #EEF7FB 0 50%, #48AFDE 0% 100%)",
          minHeight: "500px",
          maxHeight: "1200px",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="container m=-auto">
          <div className="grid grid-col-12">
            <div className="bg-white flex flex-row justify-center col-span-12 md:col-span-5 md:bg-transparent">
              <div className="container m-auto">
                <div className="lg:pl-16 sm:10 pl-0 py-20 md:py-0 md:text-start text-center">
                  <p
                    className={`text-[#47AEDE] text-3xl md:text-base lg:text-2xl ${hind.className}`}
                  >
                    Hi There
                  </p>
                  <h1 className="text-[#223740] font-recoletaBlack text-5xl  md:text-5xl ld:text-6xl xl:text-6xl mt-5 md:mt-3 ">
                    I'm Stan-Wilbrord
                  </h1>
                  <h2
                    className={`text-[#223740] py-2 font-bold uppercase md:text-xl ${hind.className}`}
                  >
                    CEO stan-wilbrord Digital &amp; a Front-end devrloper
                  </h2>
                  <a
                    href="/#portfolio"
                    className={`cursor-pointer inline-block bg-[#47AEDE] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 lg:px-8 md:text-xs lg-text-base md:mt-5 xl:mt-10 hover:bg-[#223740] hover:shadow-lg transfom hover:translate-y-1 ${hind.className}`}
                  >
                    Project
                  </a>
                  <a
                    href="Stan-Wilbrord.pdf"
                    download="Stan-Wilbrord #"
                    className={` ml-10 cursor-pointer inline-block bg-[#223740] transition-all duration-300 ease-in-out rounded-lg text-white py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 lg:px-8 md:text-xs lg-text-base md:mt-5 xl:mt-10 hover:bg-[#47AEDE] hover:shadow-lg transfom hover:translate-y-1 ${hind.className}`}
                  >
                    My Resume
                  </a>
                </div>
              </div>
              <div className="col-span-12 pt-50px md:pt-[130px] md:bg-transparent bg-[#d9eef7]  md:col-span-7 ">
                <div className="container m-auto">
                  <img
                    src="ehizeex.png"
                    decoding="async"
                    alt="profile pics"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
