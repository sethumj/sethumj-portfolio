"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar: React.FC<{}> = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const yOffset =
        aboutSection.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };
  const scrollToHome = () => {
    const aboutSection = document.getElementById("banner");
    if (aboutSection) {
      const yOffset =
        aboutSection.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };
  const scrollToProject = () => {
    const aboutSection = document.getElementById("projects");
    if (aboutSection) {
      const yOffset =
        aboutSection.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };
  const scrollToExperience = () => {
    const aboutSection = document.getElementById("experience");
    if (aboutSection) {
      const yOffset =
        aboutSection.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };
  const scrollToSkills = () => {
    const aboutSection = document.getElementById("skills");
    if (aboutSection) {
      const yOffset =
        aboutSection.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
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

        <div className="flex flex-row gap-5">
          <div
            onClick={scrollToHome}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white"
          >
            Home
          </div>
          <div
            onClick={scrollToAbout}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white"
          >
            About Me
          </div>
          <div
            onClick={scrollToSkills}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white"
          >
            Skills
          </div>
          <div
            onClick={scrollToExperience}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white"
          >
            Experience
          </div>
          <div
            onClick={scrollToProject}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white"
          >
            Projects
          </div>
          <div
            onClick={() => window.open("mailto:mettu1s@cmich.edu")}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  "
          >
            Email Me
          </div>
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
      </div>
    </div>
  );
};

export default Navbar;
