"use client";

import { delay, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import axios from '../lib/axios'

// const projects = [
//   {
//     num: "01",
//     category: "Buson Website",
//     title: "project 1",
//     desc: " Proficient in front-end development, skilled in creating userfriendly Buson website using HTML, CSS, and Sass.Excited to build engaging web projects that enhance userexperiences.",
//     stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Sass" }],
//     image: "/assets/work/work1.png",
//     live: "",
//     github: ""
//   },
//   {
//     num: "02",
//     category: "Atrix Website",
//     title: "project 2",
//     desc: " Proficient in front-end development, skilled in creating userfriendly Atrix Website using HTML, CSS, Bootstrap and JQuery.Excited to build engaging web projects that enhance userexperiences.",
//     stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Bootstrap" }, { name: "JQuery" }],
//     image: "/assets/work/work2.png",
//     live: "",
//     github: ""
//   },
//   {
//     num: "03",
//     category: "Admin Panel",
//     title: "project 3",
//     desc: " Proficient in front-end development, skilled in creating userfriendly Admin panels using HTML, CSS,Sass,Bootstrap,JQuery and JavaScript.Excited to build engaging web projects that enhance userexperiences.",
//     stack: [{ name: "Html" }, { name: "Css" }, { name: "Sass" }, { name: "Bootstrap" }, { name: "Javascript" }, { name: "JQuery" }],
//     image: "/assets/work/work3.png",
//     live: "",
//     github: "https://github.com/chintan-harkhani/Project_11"
//   },
//   {
//     num: "04",
//     category: "Multi Shop",
//     title: "project 4",
//     desc: " Proficient in front-end development, skilled in creating userfriendly Multi shop website using HTML, CSS,Bootstrap and JavaScript.Excited to build engaging web projects that enhance userexperiences.",
//     stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Bootstrap" }, { name: "Javascript" }],
//     image: "/assets/work/work4.png",
//     live: "",
//     github: "https://github.com/chintan-harkhani/Project_12"
//   },
//   {
//     num: "05",
//     category: "E-Election Backend ",
//     title: "project 5",
//     desc: "Developed a secure online voting system using Node.js, Express, and MongoDB, allowing users to register, vote, and view live results.Implemented vote authentication, real-time updates with Socket.IO, and admin controls for managing polls.",
//     stack: [{ name: "nodeJs" }, { name: "Javascript" }, { name: "ExpressJs" }, { name: "Mongodb" }],
//     image: "/assets/work/work5.png",
//     live: "",
//     github: "https://github.com/chintan-harkhani/E-election_back-end",
//   },
//   {
//     num: "06",
//     category: "Zomato-API Backend ",
//     title: "project 6",
//     desc: " Zomato :-Develop a Zomato🚀 backend API using Node.js and Express.js. Implement restaurant data, 👤 user authentication, review submissions ,and product add. Utilize a database system like MongoDB to store restaurant and user information",
//     stack: [{ name: "nodeJs" }, { name: "Javascript" }, { name: "ExpressJs" }, { name: "Mongodb" }],
//     image: "/assets/work/work6.png",
//     live: "",
//     github: "https://github.com/chintan-harkhani/ZOMATO-PROJECT/tree/development/ZOMATO-APPLICATION",
//   },
//   {
//     num: "07",
//     category: "Gains App API",
//     title: "project 7",
//     desc: " Created a RESTful API for a fitness tracking app using NestJS, supporting user registration, workout logging, and goal tracking. Integrated JWT-based authentication, role-based access control, and PostgreSQL with Prisma for data management.",
//     stack: [{ name: "Nestjs" }, { name: "PostgresSQL" }],
//     image: "/assets/work/work7.png",
//     live: "",
//     github: "https://github.com/chintan-harkhani/GainsAppBackend",
//   },

// ];
const Work = () => {

  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(projects[0]);

  useEffect(() => {
    axios.get('/work')
      .then(res => {
        console.log(res.data);
         const sorted = [...res.data].sort((a, b) => a.num - b.num);
        setProjects(sorted)
         setProject(sorted[0]); 
      })
      .catch(err => console.error("API Error:", err));
  }, []);


  const handleSlideChnage = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  // ✅ Avoid rendering until data is ready
  if (!project) {
    return (
      <div className="text-white text-center py-20 text-2xl">
        Loading Projects...
      </div>
    );
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-semibold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold text-white leading-[50px] group-hover:text-accent transition-all duration-500  capitalize">{project.category}</h2>
              <p className="text-white/60">{project.desc}</p>
              <ul className="flex flex-wrap gap-2 text-xl text-accent">
                {project.stack?.map((item, index) => (
                  <li key={index} className="flex items-center">
                    {item}
                    {index < project.stack.length - 1 && <span className="ml-1">,</span>}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live || '#'}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex  justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github || '#'}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex  justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>github Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>

          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChnage}
            >
              {
                projects.map((project, index) => {
                  return <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px]  relative group flex  justify-center items-center bg-pink-50/20">
                      <div className=" absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
{/*  */}
                        {/* <Image src={project.image} layout="fill" objectFit="cover" alt="Project Image" /> */}
                        <img
                        className="w-full h-full object-cover"
                         src={project.image}
                          alt="Project Image"
                          // style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />

                      </div>
                    </div>
                  </SwiperSlide>
                })
              }
              <WorkSliderBtns
                containerStyles="flex gap-6 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
