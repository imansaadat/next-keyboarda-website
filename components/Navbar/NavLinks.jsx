import Link from 'next/link'
import React from 'react'
const NavLinks = ({ myClass, handleNav }) => {
  const Links = [
    {
      id: 1,
      name: "صفحه اصلی",
      path: "/"
    },
    {
      id: 2,
      name: "خدمات",
      path: "/service"
    },
    {
      id: 3,
      name: "درباره ما",
      path: "/about"
    },
    {
      id: 4,
      name: "تماس با ما",
      path: "/contact"
    },
  ]
  return (
    <>
      {
        Links.map(({ name, path, id }) => (
          <Link key={id} href={path}>
            <li 
              onClick={handleNav}
              className={`${myClass} font-medium fon cursor-pointer`}
            >{name}</li
            >
          </Link>
        ))
      }
    </>
  )
}

export default NavLinks