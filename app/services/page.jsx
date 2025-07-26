"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import axios from '../lib/axios'

// const services = [
//   {
//     num: "01",
//     title: "Backend Development",
//     desc: "Implement secure, scalable back-end architectures for optimized performance and data processing",
//     href: "",
//   },
//   {
//     num: "02",
//     title: "API Development",
//     desc: "Develop and integrate custom APIs for seamless connectivity and enhanced application functionality.",
//     href: "",
//   },
//   {
//     num: "03",
//     title: "Database desgin",
//     desc: "Design high-performance databases that support secure, scalable, and integrated full-stack solutions",
//     href: "",
//   },
//   {
//     num: "04",
//     title: "Frontend Development",
//     desc: "Design intuitive, responsive interfaces that deliver consistent, user experiences across all platforms.",
//     href: "",
//   },
//   // {
//   //   num: "05",
//   //   title: "Frontend Development",
//   //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facilis odit molestias corrupti",
//   //   href: "",
//   // },

// ]
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('/service')
      .then(res => {
        console.log(res.data);
        setServices(res.data);
      })
      .catch(err => console.error("API Error:", err));
  }, []);

  if (services.length === 0) {
    return (
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto text-white text-center">
          <p>No services found.</p>
        </div>
      </section>
    );
  }
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },

          }} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((services, index) => {
            return (
              <div key={index}
                className="flex-1 flex flex-col  justify-center gap-6  group ">
                <div className="w-full flex  justify-between  items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover  transition-all  duration-500">
                    {services.num}
                  </div>
                  <Link href={services.href} className="transition-all duration-500 flex  justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className=" text-white group-hover:text-accent transition-all duration-500" />
                  </Link>
                </div>
                <h2 className="text-white text-[42px]  font-bold leding-none group-hover:text-accent  transition-all  duration-500">{services.title}</h2>
                <p className="text-white/60">{services.desc}</p>
                <div className=" border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
};

export default Services
