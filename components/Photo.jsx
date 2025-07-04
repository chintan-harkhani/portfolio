"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full  relative">
   <motion.div>
    <div className="w-[298px] h-[298px] xl:w-[420px] xl:h-[420px] mix-blend-lighten  absolute">
        <Image
         src="/assets/photo.png"
         priority
         quality={100}
         fill
         alt="photo"
         className="object-contain"
        />

    </div>
   </motion.div>

   <motion.svg
    className="w-[300px] xl:w-[420px] h-[300px] xl:h-[420px]"
    fill="transparent"
    viewBox="0 0 506 506"
    xmlns="http://www.w3.org/2000/svg"
   >
<motion.circle
 cx="253"
 cy="253"
 r="250"
 stroke="#00ff99"
strokeWidth="7"
    strokeLinejoin="round"
    strokeLinecap="round"
 initial={{strokeDasharray:"24 10 0 0"}}
 animate={{strokeDasharray:["15 120 25 25 ", "16 25 92 72" , "4 250 22 22"],
    rotate:[120 , 360]
 }} 
 transition={{
    duration:20,
    repeat:Infinity,
    repeatType:"reverse"
 }}
/>
   </motion.svg>
    </div>
  )
}

export default Photo
