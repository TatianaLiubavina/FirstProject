import React from 'react'
import '@/app/css/styles.css'
import '@/app/fonts/DINPro/stylesheet.css'

interface WorkScheduleProps {
    businessTypes: string[]
    workSchedule: string[]
}

export default function WorkSchedule({businessTypes, workSchedule}: WorkScheduleProps) {
  return (
    <>
<p>
      Занятость: {businessTypes.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
      <br />
      График работы: {workSchedule.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </p>
    </>
  )
}