import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import footerImg from '../assets/5.png'
import {motion} from 'framer-motion'

const Footer = () => {
    const bgStyle = {
        backgroundImage: `url(${footerImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center'
    }
  return (
    <div style={bgStyle}>
        <motion.div  initial={{opacity: 0, scale: 0.5}} 
            whileInView={{opacity: 1, scale: 1}}  className="container text-center space-y-10 py-10">
            <div className='space-y-4'>
                <p className='text-3xl md:text-4xl font-bold'>Join Our E-mail</p>
                <p>Get 20% off per order</p>
            </div>
            <div className='space-y-5'>
                <button className='primary-btn text-black'>
                    Subscribe
                </button>
                <div className='flex flez-row justify-center gap-3'>
                    <FaFacebook/>
                    <FaTwitter/>
                    <FaInstagram/>
                    <FaLinkedin/>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Footer