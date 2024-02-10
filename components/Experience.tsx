import React from "react";

const Experience: React.FC<{}> = () => {

  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold  text-transparent font-semibold text-xl  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400" >Central Michigan University </span>/ Graduate Research Assistant
          </p>
          <p className="text-gray-300">JAN 2022 - PRESENT, MICHIGAN</p>
        </div>
        <div>
          <ul className="text-gray-300 pt-5 list-disc">
            <li>Created a streamlined object detection model using TensorFlow and Keras, optimized for edge computing (TPU).</li>
            <li>Investigated YOLOv3, YOLOv5, YOLOv8 and EfficientDet-Lite models to determine the best fit for edge device performance.</li>
            <li>Reduced memory and CPU/GPU usage by 30% through quantization, ensuring models are suitable for edge deployment.</li>
            <li>Containerized models using Docker for enhanced deployment efficiency and scalability.</li>
            <li>Assisted CPS580: Supervised Machine Learning to graduate students, facilitating their understanding of ML concepts.</li>
            <li>Assisting CPS691: Research Design and Professional Practice, aiding students in conducting and writing research papers.</li>
          </ul>
        {/* <p className="text-gray-300 pt-5">
              As a dedicated research assistant, I've spearheaded the development of cutting-edge
          object detection models optimized for edge computing environments. Leveraging the power of TensorFlow and Keras, 
          I meticulously evaluated a range of models,including YOLOv3, YOLOv5, YOLOv8, and EfficientDet-Lite, to 
          identify the optimal solution for real-world deployment on TPUs. Through rigorous optimization
          techniques such as quantization, I successfully achieved a remarkable 30% reduction in memory and CPU/GPU usage, 
          ensuring our models are not only high-performing but also perfectly suited for edge deployment scenarios
          <br />
          <br />
          Furthermore, I've played a pivotal role in enhancing the efficiency and scalability of our deployment
           processes by containerizing models using Docker. This streamlined approach not only ensures seamless
            deployment but also facilitates scalability, allowing for effortless integration into diverse edge
             computing environments. Beyond my technical contributions, I've also been passionately involved in
              nurturing the next generation of machine learning enthusiasts. As an instructor for CPS580: 
              Supervised Machine Learning and CPS691: Research Design and Professional Practice, I've had the 
              privilege of guiding graduate students through complex ML concepts and research methodologies, 
              empowering them to excel in both academia and industry.
        </p> */}
        <div className="flex flex-wrap sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Supervised Machine Learning 
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            AI
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Python
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Docker
          </div>
        </div>
      </div>
      </div> 
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold text-transparent font-semibold text-xl  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">Zoho Corporation </span>/ Software Developer 
          </p>
          <p className="text-gray-300">JUNE 2021 - DEC 2022, CHENNAI</p>
        </div>
        <ul className="text-gray-300 pt-5 list-disc">
          <li>Developed RESTful APIs for Zoho CRM using Spring Boot and validated through Junit testing.</li>
          <li>Utilized Zoho WorkDrive, Docker, Kubernetes, and Jenkins for efficient microservice deployment and management.</li>
          <li>Implemented JWT token-based authorization scheme using spring security to secure REST APIs.</li>
          <li>Refactored Java code to Java 11 version and implemented Java 11 latest features like Lambda, filters, and predicates for adding functionality processing capability and Stream API.</li>
          <li>Acquired expertise in software design principles, enabling the development of real-time applications.</li>
          <li>Developed business logic for an e-commerce application using Java and Oracle DB. Deployed using Apache Tomcat.</li>
        </ul>
        {/* <p className="text-gray-300 pt-5">
        In my role as a software developer within the Zoho CRM team, I've been deeply involved
         in the advancement of our systems through innovative solutions and meticulous attention
          to detail. One of my key contributions has been the development of RESTful APIs using 
          Spring Boot, ensuring seamless integration and efficient data management within the Zoho
           CRM ecosystem. Through rigorous validation via JUnit testing, I've consistently upheld
            the reliability and robustness of our APIs, laying a solid foundation for the smooth
            operation of our CRM platform.
          <br />
          <br />
          My expertise extends beyond API development to the optimization of our microservice architecture
           for enhanced scalability and performance. By harnessing AWS services, Docker, Kubernetes, and
           Jenkins, I've established a streamlined deployment pipeline, empowering our team to deliver and
            manage microservices with unparalleled agility and efficiency. Additionally, my focus on security 
            has led to the implementation of a JWT token-based authorization scheme using Spring Security
            , bolstering the protection of our REST APIs against unauthorized access and potential data breaches
            . I've remained at the forefront of technological advancements by embracing Java 11's latest features,
             such as Lambda expressions, filters, and predicates, to elevate the functionality and processing
              capabilities of our systems. My commitment to excellence and proficiency in software design principles
               has been instrumental in developing real-time applications that not only meet but exceed the evolving
                needs of our users, further solidifying Zoho CRM's reputation as a leader in customer relationship
                 management solutions.
        </p> */}
        <div className="flex flex-wrap sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Spring Boot
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Spring Security
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Java
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            C#
          </div>
        </div>
      </div>
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold text-transparent font-semibold text-xl  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">Anna University </span>/ Web development Intern
          </p>
          <p className="text-gray-300">MAY 2020 - MAR 2021, CHENNAI</p>
        </div>
        <ul className="text-gray-300 pt-5 list-disc">
          <li>Designed Front-end using HTML5, CSS, JavaScript, and Bootstrapping.</li>
          <li>Back-end with PHP and MySQL. Experience with Git & Gitlab for Version Control.</li>
          <li>Modelled User Interface (UI) design for Checkout page and blog posts.</li>
        </ul>
        {/* <p className="text-gray-300 pt-5">
          
During my internship at Anna University, I honed my web development skills
 by designing sleek front-end interfaces with HTML5, CSS, JavaScript, and Bootstrap. 
 I also delved into back-end development using PHP and MySQL, ensuring robust server-side 
 functionality. 
          <br />
          <br />
          With Git and GitLab, I maintained version control integrity, while my focus 
 on UI modeling for key sections like the Checkout page showcased my dedication to enhancing 
 user experiences. This experience was pivotal in solidifying my expertise in web development 
 and fueling my passion for creating impactful digital solutions.
        </p> */}
        <div className="flex flex-wrap sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            HTML
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            CSS
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Git
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
