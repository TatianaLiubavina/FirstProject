import React from 'react'
import '@/app/css/styles.css'
import '@/app/fonts/DINPro/stylesheet.css'
import EducationSection from '@/app/components/EducationSection'

interface EducationSectionProps {
    education: string
    date: string
    university: string
    specialization: string
}
export default function Education({education, date, university, specialization}: EducationSectionProps) {
  return (
    <>  
        <section
    className="links"
    style={{
      clear: "both",
      paddingTop: "50px",
    }}>
    <h3>{education}</h3>
    <table>
      <tbody>
<EducationSection date={date} university={university} specialization={specialization} />
    </tbody>
    </table>
  </section></>
  )
}