import React from "react";
import "@/app/css/styles.css";
import "@/app/fonts/DINPro/stylesheet.css";
import "@/app/css/animation.css";

interface SocialIconsProps {
  iconName: string;
  path: string;
  link: string;
  color: string;
}

export default function SocialIcons({
  iconName,
  path,
  link,
  color,
}: SocialIconsProps) {
  return (
    <>
      <a aria-label={iconName} href={link}>
        <svg className="shadow-hover"
          height="200"
          style={{
            fill: color,
            filter: "drop-shadow(rgba(0, 0, 0, 0.25) 0px 0.5px 1px)",
            height: "28px",
            padding: "8px",
            width: "28px",
          }}
          viewBox="0 0 200 200"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={path} />
        </svg>
      </a>
    </>
  );
}
