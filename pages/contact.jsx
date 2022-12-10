import React from 'react'
import Head from 'next/head'
import Contact from '../components/Contact/Contact'
const contact = () => {
  return (
    <div>
      <Head>
        <title>تماس با ما</title>
        <meta name="description" content="شما از طریق این صفحه می توانید با تیم برنامه نویسی کیبوردا در ارتباط باشید" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Contact />
    </div>
  )
}

export default contact