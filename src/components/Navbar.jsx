import React from 'react'
import logo from '../assets/1.png'
import {motion} from 'framer-motion'
import { slideBottom } from './utilites/animation'

const navbarLinks = [
{
    id: 1,
    title: "Home",
    link: '/'
},
{
    id: 2,
    title: 'Features',
    link: '#'
},
{
    id: 3,
    title: 'Shop',
    link: '#'
},
{
    id: 4,
    title: 'About',
    link: '#'
},
{
    id: 5,
    title: 'Contact',
    link: '#'
}
]
const Navbar = () => {
  return (
    <>
    <motion.div variants={slideBottom(0.2)} initial='initial' animate='animate' className="container py-4 flex justify-between items-center">
        {/* logo section */}
        <div className='flex items-center gap-1'>
            <img src={logo} alt="logo" className='w-[70px]' />
            <p className='font-bold tezt-2xl'>SIDE HUSTLE</p>
        </div>
        {/* links section */}
        <div className='hidden md:block'>
            <ul className='flex gap-3 xl:gap-7'>
                {navbarLinks.map((link) => {
                    return (
                        <li key={link.id}>
                            <a className='hover:text-primary uppercase text-sm xl:text-base' href={link.link}>{link.title}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
        {/* button section */}
        <button className='primary-btn'>Request a Quote</button>
    </motion.div>
    </>
  )
}

export default Navbar