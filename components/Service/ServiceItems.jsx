import React from 'react'
import Image from 'next/image'
// Images
import seo from '../../public/assets/images/base/services/illus.svg'
import ui from '../../public/assets/images/base/services/ui.svg'
import support from '../../public/assets/images/base/services/support.svg'
import brand from '../../public/assets/images/base/services/brand.svg'
import marketing from '../../public/assets/images/base/services/marketing.svg'
const ServiceItems = () => {
  const boxes = [
    {
      id:1,
      img:seo,
      title:'سئو',
      desc:'رسیدن به رتبه های اول گوگل در سریعترین زمان'
    },
    {
      id:2,
      img:ui,
      title:'رابط کاربری',
      desc:'طراحی و ایجاد رابط های کاربری حرفه ای بر اساس نیازهای روز بازار'
    },
    {
      id:3,
      img:seo,
      title:'بهینه سازی سایت',
      desc:'افزایش سرعت سایت از طریق بهینه سازی و رفع خطاها'
    },
    {
      id:4,
      img:support,
      title:'پشتیبانی',
      desc:'با پشتیبانی 24 ساعت در 7 روز هفته، نگرانی نداشته باش'
    },
    {
      id:5,
      img:ui,
      title:'تجربه کاربری',
      desc:'ایجاد تجربه کاربری روان و ساده برای مشتریان و کاربران'
    },
    {
      id:6,
      img:brand,
      title:'برند سازی',
      desc:'با داشتن یک سایت حرفه ای برند خود را گسترش دهید'
    },
    {
      id:7,
      img:marketing,
      title:'طراحی تجاری',
      desc:'طراحی تجاری با پنل های حرفه ای و کارآمد برای مشتریان و کاربران'
    },
    {
      id:8,
      img:seo,
      title:'تجربه مشتری',
      desc:'با بهبود تجربه مشتریان، برند خود را محبوب تر کنید'
    },
  ]
  return (
    <section className="py-10">
    <div className="max-w-[1240px] mx-auto px-5">
      <div className="flex justify-center items-center text-center mb-5">
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
        <h2 className="mx-4 text-2xl font-bold text-black">خدمات کیبوردا</h2>
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
      <div className="text-center md:w-2/3 mx-auto mb-6">
        <p className="text-base md:text-lg text-dark md:leading-8 text-center">
          تیم برنامه نویسی کیبوردا با ارائه خدمات نوین و بروز در زمینه طراحی
          سایت، پیاده سازی، توسعه، آزمون و رفع خطاهای برنامه در حوزه وب و
          اپلیکیشن فعالیت می کند و ضمانت ارائه خدمات را در بهترین سطح به شما
          ارائه می دهد.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {
          boxes.map(({id,img,title,desc})=>(
        <div className={`shadow-lg p-8 text-center rounded-md ${id === 6 || id === 7 ? 'bg-baseColor text-white' : 'text-black'}`} key={id}>
          <Image
            src={img}
            className="h-14 mx-auto"
            alt={title}
          />
          <h3 className={`text-black text-lg font-medium py-3 ${id === 6 || id === 7 ? 'bg-baseColor text-white' : 'text-black'}`}>{title}</h3>
          <p className={`text-dark leading-7 ${id === 6 || id === 7 ? 'bg-baseColor text-white' : 'text-black'}`}>
            {desc}
          </p>
        </div>
          ))
        }
      </div>
    </div>
  </section>
  )
}

export default ServiceItems