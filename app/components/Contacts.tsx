import React from 'react'
import '@/app/css/styles.css'
import '@/app/fonts/DINPro/stylesheet.css'

interface ContactsProps {
  contactName: string;
  subtitle: string;
  link: string;
};  

export default function Contacts({contactName: title, subtitle, link}: ContactsProps) {
  return (
    <>    
      <li className="links__link">
        <p className="links__title">{title}</p>
        <a className="linsk__link" href={link}>
          {subtitle}
        </a>
      </li>
  </>
  )
}