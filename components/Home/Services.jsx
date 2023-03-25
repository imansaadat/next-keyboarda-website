import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Buttons/Button'
const Services = ({boxesData}) => {
  return (
    <section className="relative py-10 md:py-20">
      <div className="max-w-[1240px] mx-auto px-5">
        {/* Left Shape  */}
        <div className="hidden md:block absolute left-0 -bottom-14 -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="291"
            height="414"
            viewBox="0 0 291 414"
          >
            <defs>
              <linearGradient
                id="d3hwa"
                x1="183.03"
                x2="-27.98"
                y1="446"
                y2="-5.01"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#0b2e36" stopOpacity="0"></stop>
                <stop
                  offset=".24"
                  stopColor="#093a3c"
                  stopOpacity="0"
                ></stop>
                <stop offset="1" stopColor="#02604e"></stop>
              </linearGradient>
              <linearGradient
                id="d3hwb"
                x1="113.66"
                x2="-10.89"
                y1="322.85"
                y2="54.31"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#0b2e36" stopOpacity="0"></stop>
                <stop
                  offset=".24"
                  stopColor="#093a3c"
                  stopOpacity="0"
                ></stop>
                <stop offset="1" stopColor="#02604e"></stop>
              </linearGradient>
              <linearGradient
                id="d3hwc"
                x1="83.69"
                x2="-40.86"
                y1="354.85"
                y2="86.3"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#0b2e36" stopOpacity="0"></stop>
                <stop
                  offset=".24"
                  stopColor="#093a3c"
                  stopOpacity="0"
                ></stop>
                <stop offset="1" stopColor="#02604e"></stop>
              </linearGradient>
              <linearGradient
                id="d3hwd"
                x1="83.69"
                x2="-40.86"
                y1="413.84"
                y2="145.29"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#0b2e36" stopOpacity="0"></stop>
                <stop
                  offset=".24"
                  stopColor="#093a3c"
                  stopOpacity="0"
                ></stop>
                <stop offset="1" stopColor="#02604e"></stop>
              </linearGradient>
            </defs>
            <g>
              <g>
                <g opacity=".05">
                  <path
                    fill="url(#d3hwa)"
                    d="M295.302 294.987C280.132 279.806 13.862 13.333 3.397 2.858c-13.572-13.58-37.716-9.63-43.657 12.208-4.769 17.496-98.772 368.422-106.772 398.395-5.252 19.689 12.15 36.684 31.62 31.646 21.71-5.614 373.872-99.884 398.994-107.09 18.407-5.268 26.67-28.069 11.72-43.03z"
                  ></path>
                </g>
                <g opacity=".05">
                  <path
                    fill="url(#d3hwb)"
                    d="M181.054 232.976L7.206 58.995c-8.083-8.089-22.46-5.738-25.995 7.264-2.837 10.417-58.775 219.37-63.535 237.216-3.125 11.724 7.239 21.845 18.832 18.847 12.926-3.34 222.613-59.436 237.572-63.725 10.96-3.134 15.878-16.71 6.974-25.621z"
                  ></path>
                </g>
                <g opacity=".05">
                  <path
                    fill="url(#d3hwc)"
                    d="M151.081 264.972L-22.767 90.99c-8.083-8.089-22.46-5.738-25.995 7.263-2.837 10.418-58.775 219.37-63.535 237.217-3.125 11.723 7.239 21.844 18.832 18.847 12.926-3.341 222.613-59.437 237.572-63.726 10.96-3.134 15.878-16.71 6.974-25.62z"
                  ></path>
                </g>
                <g opacity=".05">
                  <path
                    fill="url(#d3hwd)"
                    d="M151.081 323.964L-22.767 149.983c-8.083-8.09-22.46-5.74-25.995 7.264-2.837 10.417-58.775 219.368-63.535 237.216-3.125 11.723 7.239 21.844 18.832 18.847 12.926-3.341 222.613-59.437 237.572-63.726 10.96-3.134 15.878-16.71 6.974-25.62z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="flex-1 order-last md:order-first">
            
            <div className='grid sm:grid-cols-2 gap-5'>
                  {
                    boxesData.map(({img,title,desc,id})=>(
                      <div className={`shadow-lg p-8 text-center rounded-md ${id === 1 || id === 4 ? 'bg-baseColor text-white' : 'text-black'}`} key={id}>
                      <Image
                        src={img}
                        className=""
                        alt=""
                      />
                      <h3 className={`font-medium text-lg py-3 ${id === 1 || id === 4 ? 'text-white' : 'text-black'}`}>
                        {title}
                      </h3>
                      <p className={`text-dark leading-7 ${id === 1 || id === 4 ? 'text-white' : 'text-black'}`}>
                       {desc}
                      </p>
                    </div>
                    ))
                  }
            </div>
          </div>
          <div className="flex-1">
            <div className='flex items-center'>
              <div className="ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9.429"
                  height="48.446"
                >
                  <path
                    data-name="Path 77"
                    d="M2.916 0s5.533 3.866 6 5.933-3.8 5.333-3.8 5.333 4.8 2.333 4.2 3.867S5.116 20 5.116 20s4 2.467 3.8 3.867-3.8 4.733-3.8 4.733 4.4 2.333 3.8 4.267-3.8 4.8-3.8 4.8S10.249 40.2 9.316 42s-6.4 6.333-6.4 6.333a2.54 2.54 0 01-1.5 0 1.648 1.648 0 01-.965-2.6A11.092 11.092 0 014.384 42s-4.4-3.133-4.333-4.333 4.333-4.4 4.333-4.4-3.733-2.8-3.933-4.133 3.933-4.8 3.933-4.8-4.8-2.866-4.333-4.333 4.333-4.467 4.333-4.467-4.933-3.8-4.333-4.6 4.333-4.667 4.333-4.667-4.6-3.84-3.669-4.773L1.737.668h.005L1.99.332l.927-.328z"
                    fill="#324b6b"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-black m-2">
              خدمات
              </h2>
              <div>
              </div>
            </div>
            <p
              className="text-base md:text-lg text-dark py-4 md:leading-8 text-justify"
            >
              خدماتی نظیر طراحی سایت ، پیاده سازی ، توسعه ، آزمون و رفع خطاهای برنامه در حوزه وب و اپلیکیشن ارائه میشود و ضمانت ارائه خدمات را در بهترین سطح به شما ارائه می دهد.
            </p>
            <Button myClass="btn" text="مشاهده خدمات" path="/service" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services