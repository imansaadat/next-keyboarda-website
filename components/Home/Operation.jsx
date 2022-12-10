import React from 'react'
import Image from 'next/image'
import projects from '../../public/assets/images/base/index/Operation-section/completed-project.svg'
import customer from '../../public/assets/images/base/index/Operation-section/customer-satisfaction.svg'
import support from '../../public/assets/images/base/index/Operation-section/support-team.svg'
import developers from '../../public/assets/images/base/index/Operation-section/developers-team.svg'
const Operation = () => {
  const OperationData = [
    {
      id: 1,
      img: projects,
      count: '20',
      text: 'پروژهای انجام شده'
    },
    {
      id: 2,
      img: customer,
      count: '20',
      text: 'رضایت مشتریان'
    },
    {
      id: 3,
      img: support,
      count: '2',
      text: 'پشتیبان مجرب'
    },
    {
      id: 4,
      img: developers,
      count: '6',
      text: 'تیم فنی'
    },
  ]
  
  return (
    <section id="operation" className="relative py-20">
      <div className="max-w-[1240px] mx-auto px-5">
        {/* Right Shape  */}
        <div className="hidden md:block absolute top-0 right-0 -z-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="202">
            <path
              fill="#0042ff"
              d="M189-88c104.382 0 189 84.618 189 189s-84.618 189-189 189S0 205.382 0 101 84.618-88 189-88z"
              opacity=".06"
            ></path>
          </svg>
        </div>
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 bg-slate-100 px-2 py-8 gap-8"
        >
          {
            OperationData.map(({ id, img, count, text }) => (
              <div className="text-center" key={id}>
                <Image
                  src={img}
                  width={128}
                  height={128}
                  alt={text}
                />
                <div
                  className="num text-2xl text-baseColor my-4 font-bold"
                >
                  {count}
                </div>
                <p className="text-black text-lg font-medium">{text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Operation