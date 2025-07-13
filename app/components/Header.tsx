import React from "react";
import "@/app/css/styles.css";
import "@/app/fonts/DINPro/stylesheet.css";
import Image from "next/image";
import { Metadata } from "next";

type HeaderProps = {
  pageTitle: string;
  subtitle: string;
  photo: string;
};

export default function Header({ pageTitle, subtitle, photo }: HeaderProps) {
  return (
    <>
      <meta charSet="UTF-8" />
      <div>
        <Image
          alt={pageTitle}
          className="header__avatar"
          src={photo}
          style={{
            float: "right",
          }}
          width="600"
          height="600"
        />
      </div>
      <h1>{pageTitle}</h1>
      <p>{subtitle}</p>
    </>
  );
}
