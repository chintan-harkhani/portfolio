"use client";

import { Section } from "lucide-react";
import CountUp from "react-countup";
import axios from '../app/lib/axios'
import { useEffect, useState } from 'react'


const State = () => {
    const [stats, setStats] = useState({
        experience: 0,
        projects: 0,
        technologies: 0,
        commits: 0,
    });

    useEffect(() => {
        axios.get('/state')
            .then(res => {
                console.log(res.data);
                setStats(res.data);
            })
            .catch(err => console.error("API Error:", err));
    }, []);

    const state = [
        {
            num: stats.experience,
            text: "Years of experience",
        },
        {
            num: stats.projects,
            text: "Projet completed",
        },
        {
            num: stats.technologies,
            text: "Technologies mastered",
        },
        {
            num: stats.commits,
            text: "Code commits",
        },
    ]
    return <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 ">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {
                    state.map((item, index) => {
                        return (
                            <div key={index} className="flex-1 flex gap-4 items-center  text-white justify-center xl:justify-start">
                                <CountUp
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-semibold" />
                                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`} >{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>

}

export default State
