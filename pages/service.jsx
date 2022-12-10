import React from 'react'
import Head from 'next/head'
import ServiceItems from '../components/Service/ServiceItems'
import Service from '../components/Service/Service'
import Navbar from '../components/Navbar/Navbar'

const service = ({setShowModal}) => {
  return (
     <div>
       <Head>
        <title>خدمات کیبوردا</title>
        <meta name="description" content="تیم برنامه نویسی کیبوردا با ارائه خدمات نوین و بروز در زمینه طراحی سایت، پیاده سازی، توسعه، آزمون و رفع خطاهای برنامه در حوزه وب و اپلیکیشن فعالیت می کند و ضمانت ارائه خدمات را در بهترین سطح به شما ارائه می دهد" />
        <link rel="icon" href="/favicon.png" />
      </Head>
       <ServiceItems />
       <Service setShowModal={setShowModal} />
     </div>
  )
}

export default service