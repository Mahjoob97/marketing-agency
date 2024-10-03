import React from 'react'
import heroImage from '../assets/1.png'
import {motion} from 'framer-motion'
import { slideUp } from './utilites/animation'

const Hero = () => {
  return (
    <>
    <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
            {/* text content section */}
            <div className='space-y-5 flex flex-col justify-center items-center md:items-start 
                text-center md:text-left py-20 px-10 md:pr-24 md:py-0 md:px-0'>
                <motion.h1 variants={slideUp(0.2)} initial='initial' animate='animate' className='text-4xl xl:text-5xl font-bold'>
                    Unlock a Passion, Side Hustle, or New 
                    <span className='text-gray-400 underline'> Profession</span>
                </motion.h1>
                <motion.p variants={slideUp(0.4)} initial='initial' animate='animate'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aperiam, ipsam voluptatum incidunt repellat unde nam numquam expedita!
                </motion.p>
                <motion.button variants={slideUp(0.6)} initial='initial' animate='animate' className='primary-btn bg-gray-900 hover:bg-primary duration-300'>More News</motion.button>
            </div>
            {/* hero image section */}
            <div className='flex justify-center items-center' >
                <motion.img initial={{opacity: 0, x:100}} animate={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.5}} src={heroImage} alt='hero image' className='w-[80%] md:w-[550px] xl:w-[600px]' />
            </div>
        </div>
    </div>
    </>
  )
}
export default Hero