import React from 'react'
import serviceImg from '../assets/2.png'
import {motion} from 'framer-motion'

const Service = () => {
  return (
    <>
    <div className="container py-12">
        {/* header section */}
        <motion.div initial={{opacity: 0}} 
            whileInView={{opacity: 1}}  className='py-12 flex justify-between items-center'>
            <h1 className='text-4xl xl:text-5xl font-bold max-w-[550px]'>
                Classes to Spark Your{" "} <span className='text-gray-400 underline'>Creativity</span>
            </h1>
            <p className='hidden md:block'>
                Notified to Spark Your <br /> <span className='text-gray-400 underline'>Balance</span>
            </p>
        </motion.div>
        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div initial={{opacity: 0, x: 100}}
            whileInView={{opacity: 1, x:0 }} 
            transition={{duration: 0.5, delay: 0.2}}>
                <img src={serviceImg} alt="" className='w-[300px] mx-auto sm:w-full' />
            </motion.div>
            <motion.div initial={{opacity: 0, x: 100}}
            whileInView={{opacity: 1, x:0 }} 
            transition={{duration: 0.5, delay: 0.4}} className='max-w-[300px] mx-auto space-y-4'>
                <img src={serviceImg} alt="" className='w-14' />
                <p className='uppercase font-semibold text-xl'>Learn By doing</p>
                <p className='text-gray-500 pl-6 border-l-2'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Placeat hic pariatur sit vel voluptatibus? Porro tempora in commodi quo id. 
                    Asperiores deleniti tempora fugiat impedit sit, 
                    quis porro eaque exercitationem corporis culpa dolorem quas dolore, in, illum ut delectus magni.
                </p>
            </motion.div>
            <motion.div initial={{opacity: 0, x: 100}}
            whileInView={{opacity: 1, x:0 }} 
            transition={{duration: 0.5, delay: 0.6}} className='max-w-[300px] mx-auto space-y-4'>
                <img src={serviceImg} alt="" className='w-14' />
                <p className='uppercase font-semibold text-xl'>Learn By doing</p>
                <p className='text-gray-500 pl-6 border-l-2'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Placeat hic pariatur sit vel voluptatibus? Porro tempora in commodi quo id. 
                    Asperiores deleniti tempora fugiat impedit sit, 
                    quis porro eaque exercitationem corporis culpa dolorem quas dolore, in, illum ut delectus magni.
                </p>
            </motion.div>
            <motion.div initial={{opacity: 0, x: 100}}
            whileInView={{opacity: 1, x:0 }} 
            transition={{duration: 0.5, delay: 0.8}} className='max-w-[300px] mx-auto space-y-4'>
                <img src={serviceImg} alt="" className='w-14' />
                <p className='uppercase font-semibold text-xl'>Learn By doing</p>
                <p className='text-gray-500 pl-6 border-l-2'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Placeat hic pariatur sit vel voluptatibus? Porro tempora in commodi quo id. 
                    Asperiores deleniti tempora fugiat impedit sit, 
                    quis porro eaque exercitationem corporis culpa dolorem quas dolore, in, illum ut delectus magni.
                </p>
            </motion.div>
        </div>
    </div>
    </>
  )
}

export default Service