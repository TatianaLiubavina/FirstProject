import React from 'react'
import '@/app/css/styles.css'
import '@/app/fonts/DINPro/stylesheet.css'
import Image from 'next/image'

type HeaderProps = {
    title: string;
    subtitle: string;
    photo: string;
  };  
  
export default function Header({title, subtitle, photo}: HeaderProps) {
  return (
    <>
        <meta charSet="UTF-8" />
  <title>{title}. Резюме</title>
  <div>
    <Image
      alt={title}
      className="header__avatar"
      src={photo}
      style={{
        float: "right",
      }}
      width="600"
      height="600"
    />
  </div>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    </>
  )
}