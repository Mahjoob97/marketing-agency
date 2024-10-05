import React from 'react'
import BannerImg from '../assets/4.png'
import {motion} from 'framer-motion'
import { slideUp } from './utilites/animation'

const Banner2 = () => {
  return (
    <>
    <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
            {/* Banner image section */}
            <div className='flex justify-center items-center' >
                <motion.img initial={{opacity: 0, x:-100}} 
                    whileInView={{opacity: 1, x: 0}} 
                    transition={{duration: 0.5, delay: 0.5}} 
                    src={BannerImg} 
                    alt='image' 
                    className='w-[80%] md:w-[550px] xl:w-[600px] md:!scale-110' />
            </div>
            {/* text content section */}
            <div className='space-y-8 flex flex-col justify-center items-center md:items-start 
                text-center md:text-left py-20 px-10 md:pl-10 md:py-0 md:px-0 xl:max-w-[400px] mx-auto'>
                <motion.p className='uppercase'
                    variants={slideUp(0.2)} initial='initial' whileInView='animate'>
                    tech addicts
                </motion.p>
                <motion.h1 variants={slideUp(0.4)} initial='initial' whileInView='animate' className='text-4xl xl:text-5xl font-semibold text-black/80'>
                    They really understood your <br /> <span className='text-gray-400 underline'>Needs</span>
                </motion.h1>
                
                <motion.button variants={slideUp(0.6)} 
                    initial='initial' 
                    whileInView='animate' 
                    className='primary-btn text-black hover:bg-black hover:text-white duration-300'>
                        More News
                </motion.button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner2