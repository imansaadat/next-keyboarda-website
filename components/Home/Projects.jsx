import React from 'react'
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Scrollbar,Autoplay,EffectCoverflow} from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
SwiperCore.use([EffectCoverflow]);
// images
import sitechin from '../../public/assets/images/base/index/projects-section/sitechin.jpg'
import landing from '../../public/assets/images/base/index/projects-section/landing-sitechin.jpg'
import ressis from '../../public/assets/images/base/index/projects-section/ressis.png'

const Projects = () => {

  const projects = [
    {
      id: 1,
      img: sitechin,
      name: " سایت ساز سایتچین"
    },
    {
      id: 2,
      img: landing,
      name: "لندینگ سایتچین"
    },
    {
      id: 3,
      img: ressis,
      name: " تجهیزات رسیس"
    }
  ]

  return (
    <section className="mb-10">
      <div className="flex justify-center items-center text-center mb-8">
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
        <h2 className="mx-4 text-2xl font-bold text-black">آخرین پروژه ها</h2>
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
      {/* Swiper */}
      <div className='px-20 bg-gradient-to-r from-blue via-darkBlue to-lightBlue'>
      <Swiper
       className='w-full overflow-hidden'
       modules={[Autoplay]}
        effect={"coverflow"}
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }} 
        autoplay ={{delay:9000}}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          }
       }}  
      >

        {
          projects.map(({ id, img, name }) => (
            <SwiperSlide key={id}>
                <div
                  className="text-center p-5 shadow-md rounded-md bg-white relative overflow-hidden group"
                >
                  <div>
                    <Image
                      width={200}
                      height={210}
                      layout="responsive"
                      src={img}
                      alt={name}
                    />
                  </div>
                  <div
                    className="absolute -top-full left-0 w-full h-full bg-slate-500/90 flex flex-col items-center justify-center duration-500 group-hover:top-0"
                  >
                    <h4 className="font-medium text-lg text-light mb-5">
                      {name}
                    </h4>
                    <a href="#" className="btn text-light">مشاهده</a>
                  </div>
                </div>
            </SwiperSlide>
          ))
        }

      </Swiper>
      </div>
    </section>
  )
}

export default Projects