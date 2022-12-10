import React from 'react'
import ModalBtn from '../Buttons/ModalBtn'
const Join = ({setShowJoinModal}) => {
  return (
    <section className="py-10 relative">
        <div className="max-w-[1240px] mx-auto px-5">
          <div
            className="lg:bg-teamImg bg-contain bg-no-repeat bg-center lg:h-screen w-full"
          >
            <div className="text-center md:w-2/3 mx-auto mb-10">
              <h3 className="mx-4 text-2xl font-bold text-black">
                جای شما در تیم کیبوردا خالیست ...
              </h3>
              <p
                className="text-base md:text-lg text-dark md:leading-8 text-justify md:text-center py-5"
              >
                اگر دانشی دارید حتی اندک اما اندیشه ی خواستن ، توانستن است را
                باور دارید ، ما از شما میخواهیم به تیم ما بپیوندید که با ما دوست
                و همکار شوید.
              </p>
              <ModalBtn myClass='btn' text='در خواست مشاوره' modal={()=>setShowJoinModal(true)} />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Join