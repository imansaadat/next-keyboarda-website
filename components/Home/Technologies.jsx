import React from 'react'
import Image from 'next/image';
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Navigation,Scrollbar,Autoplay,Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Technologies = ({TechnologiesData}) => {
  return (
    <section className="my-20">
      <div className="max-w-[1240px] mx-auto px-5">
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
          <h2 className="md:mx-4 md:text-2xl font-bold text-black">
            تکنولوژی های مورد استفاده تیم کیبوردا
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
        <Swiper
          className='py-10 w-full overflow-hidden'
          modules={[Autoplay,Pagination,Navigation]}
          spaceBetween={10}
          slidesPerView={5}
          centeredSlides={true}
          navigation
          scrollbar={{draggable:true}}
          loop={true}
          grabCursor={true}
          autoplay={{ delay: 9000 }}
          pagination={true}
          breakpoints={{
            300: {
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            }
          }}
        >
          {
        TechnologiesData.map(({id,img,name})=>(
          <SwiperSlide key={id}>
          <div
                className="flex justify-center items-center text-center shadow-lg rounded-lg border border-gray-200 px-1 py-2"
              >
                <Image
                  src={img}
                  width={'100%'}
                  height={56}
                  alt={name}
                />
              </div>
          </SwiperSlide>
        ))
          }
        </Swiper>
     
      </div>
    </section>
  )
}

export default Technologies