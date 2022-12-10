import React from 'react'

const ModalBtn = ({ text,myClass, modal }) => {
  return (
    <button className={myClass} onClick={modal}>
      {text}
    </button>
  )
}

export default ModalBtn