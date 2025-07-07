import React from 'react'
import '@/app/css/styles.css'
import '@/app/fonts/DINPro/stylesheet.css'

interface SkillsSectionProps {
    skills: string[]
    link?: string[]
}

export default function SkillsSection({skills, link}: SkillsSectionProps) {
  return (
    <div>  
        {skills.map((skill, index) => (
            <li className="skill" key={index}>
                <a className="linsk__link" href={link?.[index] || ''}>
                    {skill}
                </a>
            </li>
        ))}
</div>
  )
}   