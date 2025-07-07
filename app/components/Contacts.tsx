import React from 'react'
import '@/app/css/styles.css'
import '@/app/fonts/DINPro/stylesheet.css'

type ContactsProps = {
    title: string;
    subtitle: string;
    link: string;
  };  

export default function Contacts({title, subtitle, link}: ContactsProps) {
  return (
    <div>    
      <li className="links__link">
        <p className="links__title">{title}</p>
        <a className="linsk__link" href={link}>
          {subtitle}
        </a>
      </li>
  </div>
  )
}
