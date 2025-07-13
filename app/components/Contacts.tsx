import React from "react";
import "@/app/css/styles.css";
import "@/app/fonts/DINPro/stylesheet.css";

type ContactsProps = {
  contactTitle: string;
  contactSubtitle: string;
  link: string;
};

export default function Contacts({ contactTitle, contactSubtitle, link }: ContactsProps) {
  return (
    <>
      <li className="links__link">
        <p className="links__title">{contactTitle}</p>
        <a className="linsk__link" href={link}>
          {contactSubtitle}
        </a>
      </li>
    </>
  );
}
