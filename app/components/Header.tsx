import React from "react";
import "@/app/css/styles.css";
import "@/app/fonts/DINPro/stylesheet.css";
import Image from "next/image";
<<<<<<< Updated upstream
import { Metadata } from "next";
=======
import "@/app/css/modalImage.css"
>>>>>>> Stashed changes

type HeaderProps = {
  pageTitle: string;
  subtitle: string;
  photo: string;
};

export default function Header({ pageTitle, subtitle, photo }: HeaderProps) {
  return (
    <>
      <meta charSet="UTF-8" />
<<<<<<< Updated upstream
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
=======
      <div className="slide-in-right">
        <label htmlFor="modal-toggle">
          <Image
            alt={pageTitle}
            className="header__avatar"
            src={photo}
            style={{ float: "right" }}
            width="600"
            height="600"
          />
        </label>
        <input type="checkbox" id="modal-toggle" style={{ display: "none" }} />
        <div className="modal-css-only">
          <div className="modal__overlay"></div>
          <div className="modal__content">
            <Image
              alt={pageTitle}
              src={photo}
              className="header__avatar"
              style={{ float: "right" }}
              width="600"
              height="620"
            />
            <label htmlFor="modal-toggle" className="close">&times;</label>
          </div>
        </div>
>>>>>>> Stashed changes
      </div>
      <h1>{pageTitle}</h1>
      <p>{subtitle}</p>
    </>
  );
}
