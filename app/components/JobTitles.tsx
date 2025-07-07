import React from 'react'
import '@/app/css/styles.css'
import '@/app/fonts/DINPro/stylesheet.css'

interface JobTitlesProps {
    jobTitles: string[]
}

export default function JobTitles({jobTitles}: JobTitlesProps) {
  return (
    <div id="jobname">    
    {jobTitles.map((jobTitle) => (
        <li key={jobTitle}>{jobTitle}</li>
    ))}
</div>
  )
}