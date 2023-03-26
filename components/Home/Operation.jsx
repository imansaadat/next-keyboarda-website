import React from 'react'
import Image from 'next/image'
const Operation = ({operationData}) => {
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
            operationData.map(({ id, img, count, text }) => (
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