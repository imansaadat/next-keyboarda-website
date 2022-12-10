import React from 'react'
import Link from 'next/link'
const Button = ({ myClass, text, path}) => {
  return (
    <>
      <Link href={path}>
        <button className={myClass}>{text}</button>
      </Link>
    </>
  )
}
export default Button