import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://www.ieee.org/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-wrap justify-center flex mb-5">
              <Image
                className="rounded-lg hover:border-1 border-sky-500 hover:scale-105"
                src="/OzFish.gif"
                height={150}
                width={250}
                alt="Fish detection gif"
              />
              <div className="p-3">
                <p className="text-white text-center font-semibold text-xl">
                  Publication
                </p>
                <p className="text-gray-300 text-[12px]">
                  &#34;Evaluating the effectiveness of a pipeline to support
                  surveillance of unintended passage&#34;. I engineered an
                  object detection model for the Fish Pass project, exploring
                  models such as YOLOv3, YOLOv5, YOLOv8, and EfficientDet-Lite.
                  Utilizing Keras implementation of YOLOv3 with DarkNet-53, I
                  achieved a significant 40% performance enhancement over
                  existing models in the Boardman River environment. For edge
                  deployment, I optimized the model using EfficientDet-Lite,
                  reducing memory and CPU/GPU usage by 30% through quantization
                  techniques. Containerizing the models using Docker enhanced
                  deployment efficiency and scalability.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://github.com/sethumj/review-analysis"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-wrap justify-center flex mb-5">
              <Image
                className="rounded-lg hover:border-1 border-sky-500 hover:scale-105"
                src="/reviewgif.gif"
                height={220}
                width={250}
                alt="Review_Gif"
              />
              <div className="p-3">
                <p className="text-white text-center font-semibold text-xl">
                  Review Analysis
                </p>
                <p className="text-gray-300 text-[12px]">
                  I engineered an end-to-end pipeline that seamlessly integrates
                  ETL processes, web scraping for data retrieval from app
                  stores, and meticulous preprocessing. Utilizing NLTK,
                  scikit-learn, and transformer models, I efficiently labeled
                  raw data from both the Play Store and App Store, optimizing
                  efficiency and accuracy. This streamlined approach enabled
                  seamless integration into the pipeline, contributing to
                  achieving a notable 77% accuracy in bug detection employing
                  KNN and Decision Trees.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://github.com/sethumj/web-scraping"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-wrap justify-center flex mb-5">
              <Image
                className="rounded-lg hover:border-1 border-sky-500 hover:scale-105"
                src="/webscrape.gif"
                height={150}
                width={250}
                alt="webscrape gif"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-center text-xl">
                  Web-Scraping
                </p>
                <p className="text-gray-300 text-[12px]">
                  I led the extraction of data from the top 100 apps across all
                  genres from the App Store and Google Play Store, totaling 6000
                  apps. Utilizing Python with Beautiful Soup for extraction, I
                  meticulously cleaned and compared the data to ensure its
                  quality. Through exploratory data analysis (EDA), valuable
                  insights were uncovered, laying a solid foundation for
                  informed decision-making in app development.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://github.com/sethumj/Z-Food"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-wrap justify-center  flex mb-5">
              <Image
                className="rounded-lg hover:border-1 border-sky-500 hover:scale-105 "
                src="/securitygif.gif"
                height={150}
                width={250}
                alt="security gif"
              />
              <div className=" p-3 ">
                <p className="text-white text-center font-semibold text-xl">
                  JWT
                </p>
                <p className="text-gray-300 text-[12px] flex md:inline-flex delay-150 ">
                I&#39;ve developed a JWT token generator using Spring
                  Security, enhancing authentication and authorization
                  mechanisms within applications. This implementation ensures
                  secure data transmission and validates user access, bolstering
                  overall system security and integrity.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://github.com/sethumj/Z-Food"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-wrap justify-center  flex mb-5">
              <Image
                className="rounded-lg hover:border-1 border-sky-500 hover:scale-105 "
                src="/ecommerce.gif"
                height={150}
                width={250}
                alt="ecommerce gif"
              />
              <div className=" p-3 ">
                <p className="text-white text-center font-semibold text-xl">
                  E-commerce
                </p>
                <p className="text-gray-300 text-[12px] flex md:inline-flex delay-150 ">
                  I developed a Java-based e-commerce application with an 80%
                  adherence to industry-leading design principles, ensuring
                  intuitive user experiences. Additionally, I crafted a
                  C#-powered food delivery application that achieved an
                  impressive 83% compliance with design best practices. Through
                  meticulous coding and optimization efforts, both projects
                  boasted an outstanding 86% overall code quality, showcasing my
                  proficiency in delivering robust and user-friendly solutions.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
