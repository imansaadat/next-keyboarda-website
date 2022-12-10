import React from 'react'
import Image from 'next/image'
import whyKeyboarda from '../../public/assets/images/base/index/why-keyboarda/why-keyboarda.svg'
const WhyKeyboarda = () => {
  return (
    <section className="relative py-10 md:py-20">
      <div className="max-w-[1240px] mx-auto px-5">
      {/* Right Top Shape  */}
          <div className="absolute top-0 right-0 -z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="221.227"
              height="183.1"
              viewBox="0 0 221.227 183.1"
            >
              <g
                id="Group_99"
                data-name="Group 99"
                transform="translate(-964.773 -3656.947)"
              >
                <g
                  id="Group_85"
                  data-name="Group 85"
                  transform="translate(0 256)"
                >
                  <ellipse
                    id="Ellipse_2"
                    data-name="Ellipse 2"
                    cx="37.62"
                    cy="34.261"
                    rx="37.62"
                    ry="34.261"
                    transform="translate(1096.36 3584.047) rotate(-129)"
                    fill="#eee"
                    opacity="0.57"
                  />
                  <ellipse
                    id="Ellipse_3"
                    data-name="Ellipse 3"
                    cx="56.766"
                    cy="63.148"
                    rx="56.766"
                    ry="63.148"
                    transform="matrix(0.682, -0.731, 0.731, 0.682, 964.773, 3483.979)"
                    fill="#f5f4f4"
                    opacity="0.67"
                  />
                </g>
                <ellipse
                  id="Ellipse_4"
                  data-name="Ellipse 4"
                  cx="7.5"
                  cy="7"
                  rx="7.5"
                  ry="7"
                  transform="translate(1142 3708)"
                  fill="#e6e6e6"
                />
                <ellipse
                  id="Ellipse_5"
                  data-name="Ellipse 5"
                  cx="9.5"
                  cy="10"
                  rx="9.5"
                  ry="10"
                  transform="translate(1167 3657)"
                  fill="#f3f3f3"
                />
              </g>
            </svg>
          </div>
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="flex-1">
            <div>
              <h2 className="text-2xl font-bold text-black m-2">
                چرا انتخاب تیم کیبوردا؟
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
              طراحی روز ، توسعه سریع ، امنیت بالا ، تحویل سریع ، پشتیبانی 24 ساعته و ضمانت تحویل کار در زمان مقرر باعث شده تا انتخاب هر مشتری با هر سلیقه ای باشیم.
            </p>
          </div>
          <div className="flex-1 relative max-w-full h-[450px] w-[580px]">
            <Image
              src={whyKeyboarda}
              width={580}
              height={450}
              layout="responsive"
              alt="چرا کیبوردا"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyKeyboarda