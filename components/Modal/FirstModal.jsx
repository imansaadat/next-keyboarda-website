import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {FaTimes} from 'react-icons/fa'
// Images
import consultation from '../../public/assets/images/base/modal/consultation-form.svg'
import security from '../../public/assets/images/base/modal/security-code.svg'
import Button from '../Buttons/Button';
const FirstModal = ({showModal,setShowModal}) => {
  const closeModal = () => {
    setShowModal(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('overlay')) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOverlayClick);

    return () => {
      document.removeEventListener('mousedown', handleOverlayClick);
    };
  }, []);
  
  return (
    <>
     {
      showModal ? (
        <div>
        {/* Overlay  */}
       <div className="overlay w-full h-full bg-gray-900/90 fixed left-0 right-0 top-0 z-20 flex justify-center items-center backdrop-blur">
          {/* Content  */}
         <div className="w-4/5 bg-white grid md:grid-cols-2 items-center p-4 md:p-10 rounded-lg duration-500 animate-fadeIn">
           <div id="close" className="absolute top-4 right-4 text-4xl hover:text-grey cursor-pointer text-light" onClick={()=>setShowModal(false)}>
             <FaTimes />
           </div>
           <div className="md:col-span-1">
             <p className="mb-5">اطلاعات تماس خود را وارد نمایید تا تیم مشاوره کیبوردا با شما تماس بگیرند.</p>
             {/* Forms  */}
             <div className="mb-5">
               <label className="block mb-1 text-dark">نام و نام خانوادگی</label>
               <input
                 type="text"
                 id="fullname"
                 name="fullname"
                 className="w-full border border-gray-200 py-3 px-4 outline-none rounded-3xl focus:border-baseColor"
                 placeholder="نام و نام خانوادگی خود را وارد نمایید"
               />
             </div>
             <div className="mb-5">
               <label className="block mb-1 text-dark">شماره تماس</label>
               <input
                 type="tel"
                 id="phone"
                 name="phone"
                 className="w-full border border-gray-200 py-3 px-4 outline-none rounded-3xl focus:border-baseColor"
                 placeholder="شماره تماس خود را وارد نمایید"
               />
             </div>
             <div className="mb-10 relative">
               <label className="block mb-1 text-dark">کد امنیتی</label>
               <input
                 type="text"
                 id="security"
                 name="security"
                 maxLength="6"
                 className="w-full border border-gray-200 py-3 px-4 outline-none rounded-3xl focus:border-baseColor"
                 placeholder="کد امنیتی"
               />
               <button className="flex items-center absolute top-[34px] left-2 bg-light px-2 group">
                 <span className="text-dark group-hover:text-baseColor ml-2">دریافت کد</span>
                 <Image src={security} alt="کد امنیتی"/>
               </button>
             </div>
             <div>
               <input type="submit" id="submit" className="btn w-full" value="ثبت درخواست"/>
             </div>
           </div>
           <div className="hidden md:block md:col-span-1">
             <Image src={consultation} width={500} height={400}  layout="responsive" />
           </div>
         </div>
       </div>
     </div>
      ): null
    }
    </>
   
 
  )
}

export default FirstModal