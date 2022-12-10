import React from 'react'
import Image from 'next/image'
// Images
import aboutOne from '../../public/assets/images/base/about-us/about-1.svg'
import aboutTwo from '../../public/assets/images/base/about-us/about-2.svg'
const About = () => {
  return (
    <section className="relative py-10">
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
        <h2
          className="mx-4 text-2xl font-bold text-black"
        >
          درباره کیبوردا
        </h2>
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
      <div className="text-center md:w-2/3 mx-auto mb-10">
        <p
          className="text-base md:text-lg text-dark md:leading-8 text-justify md:text-center"
        >
          تیم برنامه نویسی کیبوردا در پاییز سال 1399 تشکیل شد و فلسفه تشکیل
          این تیم، بی عدالتی بود که درون شرکت های برنامه نویسی اتفاق می
          افتاد و حقوق مادی و معنوی برنامه نویس ها رعایت نمیشد و ما بر آن
          شدیم تا با همکاری با هم در مسیر رشد قرار بگیریم و بتوانیم افراد
          خلاق، متعهد و متخصص را دور هم جمع کنیم تا بدون دغدغه و بر اساس
          شرایط و معیارهای امروز به تولید محصولات کاربردی بپردازیم.
        </p>
      </div>
      <div className="flex justify-center gap-20">
        <div>
          <Image
            height={450}
            width={450}
            src={aboutOne}
            alt=""
          />
        </div>
        <div>
          <Image
            height={450}
            width={450}
            src={aboutTwo}
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default About