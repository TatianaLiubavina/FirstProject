import React from 'react'
import '@/app/css/styles.css'
import '@/app/fonts/DINPro/stylesheet.css'

interface LocationsSectionProps {
    locations: string;
    relocation: string[];
}

export default function LocationsSection({locations, relocation}: LocationsSectionProps) {
  return (
    <div>    <p>
    {locations}, готов(а) к переезду ({relocation.join(", ")}), готов(а) к командировкам
  </p></div>
  )
}