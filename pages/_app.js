import React,{useState} from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import FirstModal from '../components/Modal/FirstModal'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [showModal,setShowModal] = useState(false);
  return (
    <>
      <Navbar setShowModal={setShowModal} />
      <Component {...pageProps} setShowModal={setShowModal}/>
      <Footer />
      <FirstModal setShowModal={setShowModal} showModal={showModal} /> 
    </>
  )
}

export default MyApp
