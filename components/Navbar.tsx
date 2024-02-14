"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC<{}> = () => {
const [mobileMenu,setMobileMenu]=useState(false);
let routes=[{name:"Home",ref:"banner"},{name:"About Me",ref:"about"},{name:"Skills",ref:"skills"},{name:"Experience",ref:"experience"},{name:"Projects",ref:"projects"},{name:"Email Me",ref:"mail"}];
const menuHandler=()=>{
  setMobileMenu(pre=>(!pre))
}
const scrollHandler = (key:string) => {
  setMobileMenu(false);
  if(key!="mail"){
  const aboutSection = document.getElementById(`${key}`);
  if (aboutSection) {
    const yOffset =aboutSection.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: yOffset, behavior: "smooth" });
  }
}else{
  window.open("mailto:mettu1s@cmich.edu");
}
};

  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row flex-wrap items-center justify-between m-auto px-[10px]">
        <a
          href="/"
          className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white "
        >
          {/* <Image
            src="/Logo.svg"
            alt="logo"
            width={100}
            height={100}
            sizes="100vw"
            className="w-full h-auto"
          /> */}
          <p className="text-transparent font bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text">
            {" "}
            Visitors Count{" "}
          </p>
          <p>
            <Image
              className="rounded-lg hover:border-1 border-sky-500 hover:scale-105 "
              src="https://profile-counter.glitch.me/{sethumj}/count.svg"
              height={100}
              width={100}
              alt="WebHR Project"
            />
          </p>
        </a>

        <div className="max-[700px]:hidden flex flex-row gap-10">
          {routes&&routes.length>0&&routes.map((data)=>
          <div
            onClick={()=>scrollHandler(data.ref)}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white"
          >
            {data.name}
          </div>)}
          <div className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  ">
            <Link
              href="https://www.linkedin.com/in/sethu-mj/"
              rel="noopener noreferrer"
              target="_blank"
              className="z-[1]"
            >
              Contact
            </Link>{" "}
          </div>
        </div>
       <div>
  <div className="min-[700px]:hidden ">
  <div className="pl-10">
  <button type="button" className="inline-flex items-center text-white-900 gap-x-1 font-semibold leading-6 " aria-expanded="false" onClick={menuHandler}>
  <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" stroke="#fff" stroke-width="2" stroke-linecap="round" >
  <rect x="3" y="3" width="18" height="2"></rect>
  <rect x="3" y="9" width="18" height="2"></rect>
  <rect x="3" y="15" width="18" height="2"></rect>
</svg>
  </button>
  </div>
  <div className={`absolute z-4 mt-2 ${!mobileMenu&&"hidden"}`}>
  <div className="bg-[aqua] rounded-md">
  {routes&&routes.length>0&&routes.map((data)=>
  <div className="md:flex p-3 border-b border-blue-300 focus:bg-red-200" onClick={()=>scrollHandler(data.ref)}>
    {data.name}
  </div>)}
  <div className="md:flex p-3 border-b border-blue-300 focus:bg-red-200" >
  <Link
              href="https://www.linkedin.com/in/sethu-mj/"
              rel="noopener noreferrer"
              target="_blank"
              className="z-[1]"
            >
              Contact
            </Link>
  </div>
</div>
  </div>
</div>
       </div>
      </div>
      
    </div>
  );
};

export default Navbar;
