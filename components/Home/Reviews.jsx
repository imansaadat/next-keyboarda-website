import React from 'react'
import Image from 'next/image';
// Icons
import { AiFillStar } from 'react-icons/ai'
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Navigation,Scrollbar,Autoplay,Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Image
import zoomTeam from '../../public/assets/images/base/index/reviews-section/customer-picture.png'
const Reviews = () => {
  const ClientCards = [
    {
      id: 1,
      name:'تیم سیگنال زون',
      pic: zoomTeam,
      desc: 'همکاری با تیم حرفه ای کیبوردا، یکی از تجرب های خوب سیگنال زون بود. تخصص، دقت و سرعت پاسخگویی جزو ویژگی های این شرکت است',
    },
    {
      id: 2,
      name:'ایمان سعادت',
      pic: zoomTeam,
      desc:'من ایده هایی داشتم که پس از مشورت با تیم برنامه نویسی کیبوردا و عملیاتی کردن ایده ام توسط تیم مجرب کیبوردا به یک محصول ایده آل دست یافتم.',
    },
    {
      id: 3,
      name: 'امیر سعادت',
      pic: zoomTeam,
      desc: 'من ایده هایی داشتم که پس از مشورت با تیم برنامه نویسی کیبوردا و عملیاتی کردن ایده ام توسط تیم مجرب کیبوردا به یک محصول ایده آل دست یافتم.',
    },
  ]

  return (
    <section className="relative py-10">
      <div className="max-w-[1240px] mx-auto px-5">
        {/* Left Shape  */}
        <div className="hidden md:block absolute -left-16 -top-10 -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="141.6"
            height="328"
            viewBox="0 0 141.6 328"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="0.392"
                y1="0.708"
                x2="0.381"
                y2="-1.541"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stopColor="#fff" stopOpacity="0.251" />
                <stop offset="1" stopColor="#324b6b" stopOpacity="0.102" />
              </linearGradient>
            </defs>
            <g
              id="Group_208"
              data-name="Group 208"
              transform="translate(0 -1497)"
            >
              <g
                id="Group_200"
                data-name="Group 200"
                transform="translate(0 1497)"
              >
                <rect
                  id="Rectangle_92"
                  data-name="Rectangle 92"
                  width="108"
                  height="244"
                  transform="translate(0 84)"
                  fill="url(#linear-gradient)"
                />
                <path
                  id="Path_348"
                  data-name="Path 348"
                  d="M0,0H141.6V243H0Z"
                  fill="url(#linear-gradient)"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="flex justify-center items-center text-center mb-1">
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
          <h2 className="mx-4 text-2xl font-bold text-black">نظرات مشتریان</h2>
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

        <Swiper className='w-full overflow-hidden'
          modules={[Navigation,Autoplay,Scrollbar,Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          autoplay={{ delay: 9000 }}
          scrollbar={{draggable:true}}
          pagination={true}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          }}

        >
          {
            ClientCards.map(({ id, name, pic, desc }) => (
              <SwiperSlide key={id}>
                <blockquote>
                  <div
                    className="relative text-center shadow-lg rounded-lg p-5 border border-gray-200"
                  >
                    <div className="w-5 h-5 absolute bottom-5 left-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#E3E3E3"
                        viewBox="0 0 448 512"
                      >
                        {/* Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.  */}
                        <path
                          d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
                        />
                      </svg>
                    </div>
                    <div className="w-5 h-5 absolute bottom-5 right-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#E3E3E3"
                        viewBox="0 0 448 512"
                      >
                        {/* Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.  */}
                        <path
                          d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"
                        />
                      </svg>
                    </div>
                    <Image
                      src={pic}
                      width={64}
                      height={64}
                      className="rounded-full mx-auto"
                      alt=''
                    />
                    <h4 className="text-lg font-medium text-black my-3">
                      {name}
                    </h4>
                    <p className="text-dark mb-3 text-sm leading-6">
                      {desc}
                    </p>
                    <div className="text-[#BA9F79] flex justify-center">
                      <AiFillStar size={20} />
                      <AiFillStar size={20} />
                      <AiFillStar size={20} />
                      <AiFillStar size={20} />
                    </div>
                  </div>
                </blockquote>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Reviews