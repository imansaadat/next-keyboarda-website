import React from 'react'
import Image from 'next/image'
import NavLinks from '../Navbar/NavLinks'
// logo
import logoFooter from '../../public/assets/images/base/index/footer/logo-footer.png'
// icons
import { AiOutlineInstagram, AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn, FaWhatsapp, FaTelegram } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <div className='bg-[#23283C] py-7'>
        <div className='max-w-[1240px] mx-auto px-5'>
          <div className='text-center'>
            <Image
              width="64"
              height="64"
              alt="keyboarda" src={logoFooter}
            />
            <ul className='flex items-center justify-center mt-5'>
              <NavLinks myClass='text-light hover:text-gray-300 text-sm mx-1 sm:mx-3' />
            </ul>
            {/* Social media */}
            <div className='flex items-center justify-center mt-5'>
              <a href="/" className='mx-2 text-light hover:text-gray-300'><AiFillGithub /></a>
              <a href="/" className='mx-2 text-light hover:text-gray-300'><AiOutlineInstagram /></a>
              <a href="/" className='mx-2 text-light hover:text-gray-300'><FaLinkedinIn /></a>
              <a href="/" className='mx-2 text-light hover:text-gray-300'><FaWhatsapp /></a>
              <a href="/" className='mx-2 text-light hover:text-gray-300'><FaTelegram /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#16182C] text-light text-center py-3 text-sm'>
        تمامی حقوق این وب سایت متعلق به کیبوردا می باشد.
      </div>
    </footer>
  )
}

export default Footer