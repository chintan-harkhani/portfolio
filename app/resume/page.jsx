"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaNodeJs, FaGit, FaDatabase } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di"
import { SiTailwindcss, SiNextdotjs, SiNestjs, SiMongodb } from "react-icons/si"
import axios from '../lib/axios'

const experienceData = {
  icon: '/assets/resume/badge.svg',
  title: "My experience",
  desc: " Worked as a Node.js developer at Ghanshyam Digital LLP for 9 months, where I built an e-commerce API using NestJS, worked on an admin panel, integrated Agora live streaming, and resolved project issues.Currently working on freelance projects focusing on NestJS API integration, Vonage live streaming, document verification, Socket.io, and AWS-based API deployment and management.",
}

const EducationData = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  desc: "Completed 10th and 12th standard with a strong academic foundation.Graduated with a Bachelor of Computer Applications (BCA), gaining essential IT and programming skills.",

}

const skillsData = {
  title: "My Skills",
  desc: "Skilled in frontend technologies like HTML, CSS, JavaScript, Bootstrap, React.js, Next.js, and Tailwind CSS.Experienced in backend with Node.js, NestJS, and databases like PostgreSQL and MongoDB, with version control using Git.",
  // skillsList: [
  //   {
  //     icon: <FaHtml5 />,
  //     name: "HTML 5"
  //   },
  //   {
  //     icon: <FaCss3 />,
  //     name: "CSS 3"
  //   },
  //   {
  //     icon: <FaBootstrap />,
  //     name: "Bootstrap"
  //   },
  //   {
  //     icon: <FaJs />,
  //     name: "Javascript"
  //   },
  //   {
  //     icon: <FaReact />,
  //     name: "React Js"
  //   }, {
  //     icon: <SiNextdotjs />,
  //     name: "Next Js"
  //   },
  //   {
  //     icon: <SiTailwindcss />,
  //     name: "Tailwind Css"
  //   },
  //   {
  //     icon: <FaNodeJs />,
  //     name: "Node Js"
  //   },
  //   {
  //     icon: <SiNestjs />,
  //     name: "Nest Js"
  //   },
  //   {
  //     icon: <FaDatabase />,
  //     name: "Database"
  //   },
  //   {
  //     icon: <DiPostgresql />,
  //     name: "Postgresql"
  //   },
  //   {
  //     icon: <SiMongodb />,
  //     name: "Mongodb"
  //   },
  //   {
  //     icon: <FaGit />,
  //     name: "GitHub"
  //   }

  // ]
}
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Resume = () => {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [about, setAbout] = useState([]);
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    axios.get('/education')
      .then(res => {
        console.log(res.data);
        setEducation(res.data);
      })
      .catch(err => console.error("API Error:", err));
  }, []);

  useEffect(() => {
    axios.get('/experince')
      .then(res => {
        console.log(res.data);
        setExperience(res.data);
      })
      .catch(err => console.error("API Error:", err));
  }, []);

  useEffect(() => {
    axios.get('/aboutinfo')
      .then(res => {
        console.log(res.data);
        setAbout(res.data);
      })
      .catch(err => console.error("API Error:", err));
  }, []);

  useEffect(() => {
    axios.get('/skills')
      .then(res => {
        console.log(res.data);
        setSkill(res.data);
      })
      .catch(err => console.error("API Error:", err));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex  items-center  justify-center py-12 xl:py-0"
    >
      <div className=" container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px]  mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[80vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-white text-center">{experienceData.title}</h3>
                <p className="max-w-[850px] text-white/60 mx-auto xl:mx-0">{experienceData.desc}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)).map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-white">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>

                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-white text-center">{EducationData.title}</h3>
                <p className="max-w-[850px] text-white/60 mx-auto xl:mx-0">{EducationData.desc}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-white">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>

                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col  gap-[30px]">
                <div className="flex  flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-white text-center">{skillsData.title}</h3>
                  <p className="max-w-[850px] text-white/60 mx-auto xl:mx-0 ">{skillsData.desc}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {
                    skill.map((skill, index) => {
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex  justify-center items-center group">
                              <div className=" text-white text-6xl group-hover:text-accent transition-all  duration-500"><img
                                src={skill.iconUrl}
                                alt={skill.skillName}
                                className="h-16 w-16 object-contain group-hover:scale-110 transition-all duration-500"
                              /></div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-black capitalize">{skill.skillName}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    })
                  }
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-white text-center">{about.title}</h3>
                <p className="max-w-[850px] text-white/60 mx-auto xl:mx-0">{about.desc}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {
                    Array.isArray(about?.info) &&
                    about.info.map((item, index) => {
                      return (
                        <li key={index} className="flex items-center  justify-center xl:justify-start gap-4">
                          <span className="text-white/60"> {item.fieldName}</span>
                          <span className="text-md text-white"> {item.fieldValue}</span>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume
