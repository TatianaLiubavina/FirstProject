import React from 'react'

interface ExperienceItemProps {
  startDate: string
  endDate: string
  duration: string
  companyName: string
  location: string
  website?: string
  industry?: string
  businessTypes?: string[]
  position: string
  description: string
  techStack?: string[]
}

export default function ExperienceItem({
  startDate,
  endDate,
  duration,
  companyName,
  location,
  website,
  industry,
  businessTypes,
  position,
  description,
  techStack
}: ExperienceItemProps) {
  return (
    <tr>
      <td>
        <p>
          {startDate} — {endDate}
          <br />
          <span className="experience">{duration}</span>
        </p>
      </td>
      <td>
        <p>
          <b>{companyName}</b>
          <br />
          {location}{website && `, ${website}`}
        </p>
        {industry && <p>{industry}</p>}
        {businessTypes && businessTypes.length > 0 && (
          <ul className="links__container">
            {businessTypes.map((value, index) => (
              <li key={`${value}-${index}`}>{value}</li>
            ))}
          </ul>
        )}
        <h4>{position}</h4>
        <p className="links__container" dangerouslySetInnerHTML={{ __html: description }} />
        {techStack && techStack.length > 0 && (
          <>
            <br />
            <p>
              <b>Стэк технологий на проекте:</b>
            </p>
            <p className="links__container">
              {techStack.map((tech, index) => (
                <React.Fragment key={index}>
                  {tech}
                  {index < techStack.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </>
        )}
      </td>
    </tr>
  )
} 