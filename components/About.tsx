import React from "react";
const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[1200px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          Hi, I&#39;m Sethu Mettukulam Jagadeesan, a dedicated software engineer specializing in Software Engineering and Machine Learning.
           Currently pursuing my Master&#39;s degree in Computer Science at Central Michigan University.
        <br />
          <br />
          With a strong foundation in computer science and extensive hands-on
          experience, I am a passionate developer driven by innovation and
          efficiency. From creating streamlined object detection models to
          developing RESTful APIs, my journey spans cutting-edge research and
          practical software development, ensuring impactful solutions at every
          turn.
          <br />
          <br />
          With a knack for problem-solving and a commitment to excellence, I
          thrive in dynamic environments where creativity meets technical
          prowess. Whether it&#39;s optimizing edge computing models or architecting
          e-commerce applications, I continuously push boundaries to deliver
          robust, user-centric solutions that make a difference.
        </p>
      </div>
    </section>
  );
};

export default About;
