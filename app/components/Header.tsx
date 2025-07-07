import React from 'react'
import '@/app/css/styles.css'
import '@/app/fonts/DINPro/stylesheet.css'
import resumephoto from '@/public/resumephoto.webp'
import Image from 'next/image'

type HeaderProps = {
    title: string;
    subtitle: string;
  };  
  
export default function Header({title, subtitle}: HeaderProps) {
  return (
    <div>
        <meta charSet="UTF-8" />
  <title>{title}. Резюме</title>
  <div>
    <Image
      alt={title}
      className="header__avatar"
      id="primary_photo"
      src={resumephoto}
      style={{
        float: "right",
      }}
      width="400"
      height="400"
    />
  </div>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    </div>
  )
}