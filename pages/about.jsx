import React,{useState} from 'react'
import Head from 'next/head'
import About from '../components/About/About'
import Join from '../components/About/Join'
import JoinModal from '../components/Modal/JoinModal'
const AboutPage = () => {
  const [showJoinModal,setShowJoinModal] = useState(false);
  return (
    <div>
      <Head>
        <title>درباره کیبوردا</title>
        <meta name="description" content="شما در این صفحه با تیم کیبوردا و علت تشکیل آن آشنا خواهید شد" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <About />
      <Join setShowJoinModal={setShowJoinModal} />
      <JoinModal showJoinModal={showJoinModal} setShowJoinModal={setShowJoinModal}/>
    </div>

  )
}

export default AboutPage