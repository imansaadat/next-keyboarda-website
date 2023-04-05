import React from 'react'
import ModalBtn from '../Buttons/ModalBtn'
import Button from '../Buttons/ModalBtn'
const Counseling = ({setShowModal}) => {
  return (
    <section className="relative py-10 md:py-20">
    <div className="max-w-[1240px] mx-auto px-5">
      {/* Right Shape  */}
      <div className="hidden lg:block absolute top-10 right-0 -z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="172" height="188" viewBox="0 0 172 188">
          <defs>
              <linearGradient id="j1pda" x1="44.48" x2="89.21" y1="194.27" y2="48.84" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#0b2e36" stopOpacity="0"></stop>
                  <stop offset=".23" stopColor="#093a3c" stopOpacity="0"></stop>
                  <stop offset="1" stopColor="#02604e" stopOpacity=".13"></stop>
              </linearGradient>
              <linearGradient id="j1pdb" x1="124.41" x2="133.43" y1="64.82" y2="32.5" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#0b2e36" stopOpacity="0"></stop>
                  <stop offset=".23" stopColor="#093a3c" stopOpacity="0"></stop>
                  <stop offset="1" stopColor="#02604e" stopOpacity=".13"></stop>
              </linearGradient>
              <linearGradient id="j1pdc" x1="83.97" x2="96.96" y1="43.64" y2=".13" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#0b2e36" stopOpacity="0"></stop>
                  <stop offset=".23" stopColor="#093a3c" stopOpacity="0"></stop>
                  <stop offset="1" stopColor="#02604e" stopOpacity=".13"></stop>
              </linearGradient>
              <linearGradient id="j1pdd" x1="133.52" x2="139.92" y1="18.01" y2=".16" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#0b2e36" stopOpacity="0"></stop>
                  <stop offset=".23" stopColor="#093a3c" stopOpacity="0"></stop>
                  <stop offset="1" stopColor="#02604e" stopOpacity=".13"></stop>
              </linearGradient>
              <linearGradient id="j1pde" x1="153.13" x2="157.09" y1="33.56" y2="22.46" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#0b2e36" stopOpacity="0"></stop>
                  <stop offset=".23" stopColor="#093a3c" stopOpacity="0"></stop>
                  <stop offset="1" stopColor="#02604e" stopOpacity=".13"></stop>
              </linearGradient>
              <linearGradient id="j1pdf" x1="168.27" x2="169.81" y1="48.08" y2="43.5" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#0b2e36" stopOpacity="0"></stop>
                  <stop offset=".23" stopColor="#093a3c" stopOpacity="0"></stop>
                  <stop offset="1" stopColor="#02604e" stopOpacity=".13"></stop>
              </linearGradient>
          </defs>
          <g>
              <g>
                  <g>
                      <path fill="url(#j1pda)" d="M54.154 52.3L13.217 75.936C5.257 80.532.339 89.003.319 98.16l-.107 47.086a25.48 25.48 0 0 0 12.798 22.166l40.83 23.45c7.94 4.56 17.736 4.539 25.697-.058l40.937-23.634c7.96-4.597 12.877-13.07 12.898-22.226l.107-47.084a25.481 25.481 0 0 0-12.798-22.167l-40.83-23.45c-7.94-4.56-17.736-4.539-25.697.057z"></path>
                  </g>
                  <g>
                      <path fill="url(#j1pdb)" d="M126.157 33.27l-8.903 5.253a5.747 5.747 0 0 0-2.804 4.94l-.024 10.462c-.004 2.036 1.057 3.912 2.783 4.926l8.88 5.211a5.498 5.498 0 0 0 5.587-.013l8.902-5.251a5.748 5.748 0 0 0 2.805-4.94l.024-10.463c.004-2.035-1.057-3.912-2.784-4.926l-8.879-5.21a5.496 5.496 0 0 0-5.587.011z"></path>
                  </g>
                  <g>
                      <path fill="url(#j1pdc)" d="M86.747 1.166L74.763 8.237c-2.33 1.376-3.77 3.91-3.776 6.65l-.03 14.086c-.007 2.74 1.421 5.267 3.746 6.632l11.952 7.015a7.399 7.399 0 0 0 7.522-.017l11.984-7.071c2.33-1.375 3.77-3.91 3.776-6.65l.03-14.086c.007-2.74-1.421-5.267-3.745-6.631L94.269 1.149a7.399 7.399 0 0 0-7.522.017z"></path>
                  </g>
                  <g>
                      <path fill="url(#j1pdd)" d="M135.233.583l-4.794 2.901c-.932.565-1.508 1.604-1.51 2.728l-.012 5.78c-.003 1.123.568 2.16 1.498 2.72l4.781 2.878c.93.56 2.077.558 3.009-.007l4.793-2.901c.933-.565 1.508-1.604 1.51-2.728l.013-5.78c.003-1.123-.569-2.16-1.498-2.72L138.242.575a2.898 2.898 0 0 0-3.01.008z"></path>
                  </g>
                  <g>
                      <path fill="url(#j1pde)" d="M154.155 22.723l-3.082 1.804c-.599.352-.969.998-.97 1.698l-.009 3.595a1.95 1.95 0 0 0 .964 1.693l3.073 1.791a1.913 1.913 0 0 0 1.934-.005l3.082-1.804c.6-.352.97-.998.97-1.697l.009-3.596a1.952 1.952 0 0 0-.963-1.693l-3.074-1.79a1.912 1.912 0 0 0-1.934.004z"></path>
                  </g>
                  <g>
                      <path fill="url(#j1pdf)" d="M168.618 43.608l-1.37.745a.806.806 0 0 0-.43.701l-.004 1.485c-.001.288.162.555.428.699l1.366.74a.906.906 0 0 0 .86-.003l1.37-.745a.803.803 0 0 0 .43-.7l.004-1.485a.796.796 0 0 0-.428-.7l-1.366-.74a.912.912 0 0 0-.86.003z"></path>
                  </g>
              </g>
          </g>
      </svg>
      </div>
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-10"
      >
        <div className="flex-1">
          <div>
            <h2 className="text-2xl font-bold text-black m-2">
              آیا پروژه ای در ذهن دارید؟
            </h2>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="174.6"
                height="9.387"
              >
                <g data-name="Group 149">
                  <path
                    data-name="Path 49"
                    d="M60.038 2.811l5.587 4.571 5.587-4.571m0 0l5.586 4.571 5.59-4.571m0 0l5.588 4.571 5.586-4.571m0 0l5.588 4.571 5.587-4.571m0 0l5.587 4.571 5.587-4.571"
                    fill="none"
                    stroke="#324b6b"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                  />
                  <path
                    data-name="Path 51"
                    d="M115.911 2.811l5.587 4.571 5.59-4.571m0 0l5.586 4.571 5.587-4.571m0 0l5.587 4.571 5.589-4.571m0 0l5.587 4.571 5.587-4.571m0 0l5.588 4.571 5.589-4.571"
                    fill="none"
                    stroke="#324b6b"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                  />
                  <g data-name="Group 77">
                    <path
                      data-name="Path 51"
                      d="M2.814 2.811l5.587 4.571 5.59-4.571m0 0l5.586 4.571 5.587-4.571m0 0l5.587 4.571 5.589-4.571m0 0l5.587 4.571 5.587-4.571m0 0l5.588 4.571 5.589-4.571"
                      fill="none"
                      stroke="#324b6b"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <p
            className="text-base md:text-lg text-dark py-4 md:leading-8 text-justify"
          >
            پـروژه ای که در ذهن خود می پـرورانید را می خواهید عـملیاتی کنید
            و نمی دانید باید از کجا شـروع کنید!؟ اصلا نـگران نباشید، کافیه
            همین الان <span className="text-baseColor">فرم درخواست مشاوره رایگان</span> رو ارسال کنید و در کمترین
            زمان، مشاوران کیبوردا با شما تماس خواهند گرفت.
          </p>
          <ModalBtn myClass="btn hidden md:flex" text='درخواست مشاوره' modal={()=>setShowModal(true)} />
        </div>
        <div className="flex-1">
          <img
            src="../assets/images/base/services/get-consultation.svg"
            className="w-full"
            alt="تیم طراحی و برنامه نویسی کیبوردا"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Counseling