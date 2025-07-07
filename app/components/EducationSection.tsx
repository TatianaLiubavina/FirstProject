import React from 'react'
import '@/app/css/styles.css'
import '@/app/fonts/DINPro/stylesheet.css'
import Education from './Education'

interface EducationSectionProps {
    date: string
    university: string
    specialization: string
}
export default function EducationSection({date, university, specialization}: EducationSectionProps) {
  return (
    <div>  
        <tr>
          <td>{date}</td>
          <td>
            <b>
              {university}
            </b>
            <br />
            {specialization}
          </td>
        </tr>
  </div>
  )
}