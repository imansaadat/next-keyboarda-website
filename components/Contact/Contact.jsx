import React from 'react'
import Image from 'next/image'
// Icons
import {AiFillPhone} from 'react-icons/ai'
import {FaEnvelope} from 'react-icons/fa'
// Images
import contactImg from '../../public/assets/images/base/contact-us/Contact-us.svg'
const Contact = () => {
  return (
    <section className="py-10">
      <div className="max-w-[1240px] mx-auto px-5">
        <div className="flex justify-center items-center text-center mb-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49.945"
              height="9.357"
            >
              <path
                data-name="Path 7"
                d="M2.828 2.825l4.429 4.528 4.43-4.529m0 0l4.428 4.528 4.429-4.527m0 0l4.428 4.528 4.433-4.528m0 0l4.428 4.528 4.427-4.528m0 0l4.429 4.528 4.428-4.528"
                fill="none"
                stroke="#324b6b"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              />
            </svg>
          </div>
          <h2 className="mx-4 text-2xl font-bold text-black">تماس با ما</h2>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49.945"
              height="9.357"
            >
              <path
                data-name="Path 7"
                d="M2.828 2.825l4.429 4.528 4.43-4.529m0 0l4.428 4.528 4.429-4.527m0 0l4.428 4.528 4.433-4.528m0 0l4.428 4.528 4.427-4.528m0 0l4.429 4.528 4.428-4.528"
                fill="none"
                stroke="#324b6b"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              />
            </svg>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Forms  */}
          <div className="col-span-1">
            <p className="text-base md:text-lg text-dark md:leading-8 text-justify mb-8">شما از طریق این صفحه می‌توانید با ما در ارتباط باشید. همچنین می‌توانید انتقادات و پیشنهادات خود را از طریق این بخش به ما منتقل کنید.</p>
            <form>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="md:col-span-1 mb-2">
                  <label className="block mb-1 text-dark">نام و نام خانوادگی <span className="text-red-600">*</span></label>
                  <input type="text" id="fullname" className="w-full border border-gray-200 py-3 px-4 outline-none rounded-3xl focus:border-baseColor" name="fullname" placeholder="نام کامل خود را وارد نمایید" />
                </div>
                <div className="md:col-span-1 mb-2">
                  <label className="block mb-1 text-dark">موبایل <span className="text-red-600">*</span></label>
                  <input type="tel" id="phone" className="w-full border border-gray-200 py-3 px-4 outline-none rounded-3xl focus:border-baseColor" name="phone" placeholder="شماره تماس خود را وارد نمایید" />
                </div>
                <div className="md:col-span-1 mb-2">
                  <label className="block mb-1 text-dark">ایمیل</label>
                  <input type="email" id="email" className="w-full border border-gray-200 py-3 px-4 outline-none rounded-3xl focus:border-baseColor" name="email" placeholder="ایمیل خود را وارد نمایید" />
                </div>
                <div className="md:col-span-1 mb-2">
                  <label className="block mb-1 text-dark">موضوع پیام <span className="text-red-600">*</span></label>
                  <input type="text" id="subject" className="w-full border border-gray-200 py-3 px-4 outline-none rounded-3xl focus:border-baseColor" name="subject" placeholder="موضوع پیام خود را وارد نمایید" />
                </div>
                <div className="md:col-span-2 mb-2">
                  <label className="block mb-2 text-dark">متن پیام</label>
                  <textarea
                    name="text"
                    id="text"
                    cols="30"
                    rows="10"
                    className="w-full resize-none border border-gray-200 py-3 px-4 outline-none rounded-3xl focus:border-baseColor"
                    placeholder="متن پیام را وارد نمایید"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <input type="submit" className="btn w-full" value="ارسال پیام" />
                </div>
              </div>
            </form>
          </div>
          <div className="col-span-1">
            <Image
              src={contactImg}
              width={580}
              height={580}
              layout="responsive"
              alt="تیم طراحی و برنامه نویسی کیبوردا"
            />
            <div className="md:flex md:justify-between items-center text-center mt-3">
              <a href="tel:09129323358" className='flex items-center justify-center'>
               <AiFillPhone size={30} style={{color:'#324b6b'}}/>
                <span className="text-black mr-2 align-middle">09129323358</span>
              </a>
              <div className='flex items-center justify-center'>
                <FaEnvelope size={30} style={{color:'#324b6b'}}/>
                <span className="text-black align-middle mr-2">support@keyboarda.ir</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact