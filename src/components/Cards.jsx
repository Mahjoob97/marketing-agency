import React from 'react'
import logoImg from '../assets/location-logo.png'
import logoImg2 from '../assets/message-logo.png'
import logoImg3 from '../assets/whatsapp-logo.png'
import { slideUp } from './utilites/animation'
import {motion} from 'framer-motion'

const Cards = () => {
  return (
    <>
    <div className='bg-gray-50'>
        <div className="container py-12">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                <motion.div variants={slideUp(0.2)} 
                    initial='initial' 
                    whileInView='animate' 
                    className='bg-white shadow-xl rounded-xl px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto'>
                    <img src={logoImg} alt="" className='w-14 h-14 rounded-full object-contain p-3 bg-black' />
                    <p className='text-xl font-semibold'>Our Location</p>
                    <p className='text-sm text-black/80 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolorem impedit 
                        adipisci nulla obcaecati eos eveniet esse. 
                        Commodi vero mollitia voluptates non eum, sequi deleniti.
                    </p>
                    <a href="#">Learn More</a>
                </motion.div>
                <motion.div variants={slideUp(0.4)} 
                    initial='initial' 
                    whileInView='animate' 
                    className='bg-white shadow-md px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto'>
                    <img src={logoImg2} alt="" className='w-14 h-14 rounded-full object-contain p-3 bg-black' />
                    <p className='text-xl font-semibold'>Contact</p>
                    <p className='text-sm text-black/80 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolorem impedit 
                        adipisci nulla obcaecati eos eveniet esse. 
                        Commodi vero mollitia voluptates non eum, sequi deleniti.
                    </p>
                    <a href="#">Learn More</a>
                </motion.div>
                <motion.div variants={slideUp(0.6)} 
                    initial='initial' 
                    whileInView='animate' 
                    className='bg-white shadow-md px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto'>
                    <img src={logoImg3} alt="" className='w-14 h-14 rounded-full object-contain p-3 bg-black' />
                    <p className='text-xl font-semibold'>Plugin</p>
                    <p className='text-sm text-black/80 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolorem impedit 
                        adipisci nulla obcaecati eos eveniet esse. 
                        Commodi vero mollitia voluptates non eum, sequi deleniti.
                    </p>
                    <a href="#">Learn More</a>
                </motion.div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cards