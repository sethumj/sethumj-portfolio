"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
    <section id="banner">
      <div className="flex flex-row items-center justify-center px-20 mt-[150px] z-[20] ">
        <div className="flex flex-col  justify-center  text-center">
          <div className="justify-center flex ">
            <Image
              priority
              src="/sethu.png"
              height={300}
              width={300}
              alt="Sethu Mettukulam Jagadeesan"
            />
          </div>

          <div className="flex flex-col gap-6 mt-6 cursor-pointer animate-bounce tracking-tighter text-5xl font-semibold text-white max-w-[900px] w-auto h-auto">
            SETHU METTUKULAM JAGADEESAN!
          </div>
          <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[800px]">
            A Software Engineer &{" "}
            <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Machine Learning Enthusiast!
            </span>{" "}
          </p>
          <p className="text-md text-gray-200 my-5 max-w-[800px]">
            {/* Versatile software engineer proficient in Java, Python, and C#, adept at harnessing the 
        power of these languages to develop robust, scalable, and efficient solutions that address
         a wide range of project needs with precision and expertise. */}
          </p>
          <div className="text-md flex justify-center">
            <button
              onClick={() => window.open("mailto:mettu1s@cmich.edu")}
              className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent "
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
