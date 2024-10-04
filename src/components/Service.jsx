import React from 'react'
import serviceImg from '../assets/2.png'

const Service = () => {
  return (
    <>
    <div className="container">
        {/* header section */}
        <div className='py-12 flex justify-between items-center'>
            <h1 className='text-4xl xl:text-5xl font-bold max-w-[550px]'>
                Classes to Spark Your{" "} <span className='text-gray-400 underline'>Creativity</span>
            </h1>
            <p className='hidden md:block'>
                Notified to Spark Your <br /> <span className='text-gray-400 underline'>Balance</span>
            </p>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
                <img src={serviceImg} alt="" className='w-[300px] mx-auto sm:w-full' />
            </div>
            <div className='max-w-[300px] mx-auto space-y-4'>
                <img src={serviceImg} alt="" className='w-14' />
                <p className='uppercase font-semibold text-xl'>Learn By doing</p>
                <p className='text-gray-500 pl-6 border-l-2'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Placeat hic pariatur sit vel voluptatibus? Porro tempora in commodi quo id. 
                    Asperiores deleniti tempora fugiat impedit sit, 
                    quis porro eaque exercitationem corporis culpa dolorem quas dolore, in, illum ut delectus magni.
                </p>
            </div>
            <div className='max-w-[300px] mx-auto space-y-4'>
                <img src={serviceImg} alt="" className='w-14' />
                <p className='uppercase font-semibold text-xl'>Learn By doing</p>
                <p className='text-gray-500 pl-6 border-l-2'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Placeat hic pariatur sit vel voluptatibus? Porro tempora in commodi quo id. 
                    Asperiores deleniti tempora fugiat impedit sit, 
                    quis porro eaque exercitationem corporis culpa dolorem quas dolore, in, illum ut delectus magni.
                </p>
            </div>
            <div className='max-w-[300px] mx-auto space-y-4'>
                <img src={serviceImg} alt="" className='w-14' />
                <p className='uppercase font-semibold text-xl'>Learn By doing</p>
                <p className='text-gray-500 pl-6 border-l-2'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Placeat hic pariatur sit vel voluptatibus? Porro tempora in commodi quo id. 
                    Asperiores deleniti tempora fugiat impedit sit, 
                    quis porro eaque exercitationem corporis culpa dolorem quas dolore, in, illum ut delectus magni.
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Service