import React from 'react'
import ModalBtn from '../Buttons/ModalBtn'

const Consultation = ({setShowModal}) => {
  return (
    <section className="my-20">
        <div
          className="relative bg-consulting bg-center bg-cover bg-fixed w-full p-10 bg-blend-overlay bg-[#191823]"
        >
          <div className="max-w-[1240px] mx-auto px-5">
            <div
              className="flex flex-col md:flex-row justify-between items-center text-light gap-5"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-medium mb-4">
                  آیا پروژه ای در ذهن دارید؟
                </h3>
                <p className="leading-7 text-justify">
                  درصورتی که ایده ای در زمینه وب و اپلیکیشن دارید و می خواهید
                  ایده شما به یک محصول تجاری ، آموزشی ، خبری و یا کارت ویزیت شما تبدیل شود کافیست از طریق فرم
                  <strong className="text-[#ffbf29]"> درخواست مشاوره</strong> ،
                  درخواست خود را ارسال کنید تا در کمترین زمان از طرف مشاورین
                  کیبوردا با شما تماس گرفته شود.
                </p>
              </div>
              <div className="flex-1 text-left">
                <ModalBtn myClass='btn bg-none bg-light text-black hover:bg-stone-200' text='در خواست مشاوره' modal={()=>setShowModal(true)} />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Consultation