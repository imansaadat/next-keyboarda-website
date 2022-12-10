import Link from 'next/link'
import React,{useState} from 'react'
import Image from 'next/image'
import logo from '../../public/assets/images/base/index/header/logo.png'
import Button from '../Buttons/ModalBtn'
import NavLinks from './NavLinks'
import {FaTimes,FaBars} from 'react-icons/fa'
import ModalBtn from '../Buttons/ModalBtn'
const Navbar = ({setShowModal}) => {
 const [nav, setNav] = useState(false)

 const handleNav = () => {
  setNav(!nav)
}

  return (
    <header
      className="bg-light/80 backdrop-blur shadow-md fixed top-0 left-0 right-0 w-full z-10"
    >
      <div className="max-w-[1240px] mx-auto px-5">
        <nav className="flex justify-between items-center h-20">
          <div className="flex items-center justify-between">
            <Link href="/"
              >
                <a className='h-16 z-10'><Image
                src={logo}
                width="64"
                height="64"
                alt="keyboarda"
            /></a>
              </Link>
              <ul className='hidden md:flex items-center mr-7'>
                 <NavLinks myClass='hover:text-baseColor text-grey px-4'/>
              </ul>
          </div>
          <div id="bar" className="flex md:hidden z-10 text-3xl cursor-pointer">
            <i className="fas fa-bars"></i>
          </div>
          <ModalBtn myClass="btn hidden md:flex" text="درخواست مشاوره" modal={()=>setShowModal(true)} />
          {/* Mobile Menu */}
          <div
            id="menu"
            className={`flex flex-col justify-center items-center md:hidden w-full absolute top-0 duration-500 h-screen bg-light ${nav ? 'left-0' : 'left-[-100%]'}`}
          >
            <ul className="flex flex-col items-center justify-center h-full w-full">
              <NavLinks myClass='hover:text-baseColor text-grey py-3' handleNav={handleNav} />
            </ul>
          </div>
          <div className='flex md:hidden cursor-pointer z-10' onClick={handleNav}>
           {nav?  <FaTimes size={30}/> :  <FaBars size={30}/>}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar