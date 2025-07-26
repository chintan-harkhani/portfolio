"use client";
import Photo from '@/components/Photo'
import Social from '@/components/Social'
import State from '@/components/State'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
import axios from './lib/axios'
import { useEffect, useState } from 'react'


const Home = () => {
  const [profile, setProfile] = useState({});


  useEffect(() => {
    axios.get('/profile')
      .then(res => {
        console.log(res.data.name);
        setProfile(res.data);
      })
      .catch(err => console.error("API Error:", err));
  }, {});


  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl text-white'>{profile.position}</span>
            <h1 className='h1 mb-6 text-white'>{`Hello I'm`}<br /> <span className='text-accent'>{profile.name}</span></h1>
            <p className='max-w-[530px] mb-9 text-white/80'>{profile.desc}</p>
            {/* btn */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <a href="/CHINTAN HARKHANI_2025.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className='text-xl' />
                </Button>
              </a>
              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles="flex gap-6"
                  iconStyles=" w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent 
                   text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "
                />
              </div>
            </div>
          </div>
          <div className='order-1 xl:order-none mb-8 xl:mb-0 '>
            <Photo />
          </div>
        </div>
      </div>
      <State />
    </section>
  )
}

export default Home
