import React from "react";
import "@/app/css/styles.css";
import "@/app/fonts/DINPro/stylesheet.css";
import "@/app/css/animation.css";

interface SkillsSectionProps {
  skills: string[];
  link?: string[];
}

export default function SkillsSection({ skills, link }: SkillsSectionProps) {
  return (
    <>
      {skills.map((skill, index) => (
        <li className="skill" key={index}>
          <a className="linsk__link box transform-hover shadow-hover" href={link?.[index] || ""}>
            {skill}
          </a>
        </li>
      ))}
    </>
  );
}
