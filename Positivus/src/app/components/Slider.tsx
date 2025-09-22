"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Slider({ slider }: { slider: any[] }) {
  return (
    <div className="slider">
      <div className="slider-block">
        <div className="slider-block1">
          {slider.map((item) => (
            <div key={item.id} className="slider-block1-card">
              <div className="slider-block1-card-text">
                <p>{item.text}</p>
                <svg
                  width="606"
                  height="266"
                  viewBox="0 0 606 266"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_341_510" fill="white">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M45 0C20.1472 0 0 20.1472 0 45V192.952C0 217.805 20.1676 237.952 45.0204 237.952H56.3613L83 266L109.639 237.952H560.979C585.832 237.952 606 217.805 606 192.952V45C606 20.1472 585.853 0 561 0H45Z"
                    />
                  </mask>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M45 0C20.1472 0 0 20.1472 0 45V192.952C0 217.805 20.1676 237.952 45.0204 237.952H56.3613L83 266L109.639 237.952H560.979C585.832 237.952 606 217.805 606 192.952V45C606 20.1472 585.853 0 561 0H45Z"
                    fill="#191A23"
                  />
                  <path
                    d="M56.3613 237.952L57.0864 237.264L56.7907 236.952H56.3613V237.952ZM83 266L82.2749 266.689L83 267.452L83.7251 266.689L83 266ZM109.639 237.952V236.952H109.209L108.914 237.264L109.639 237.952ZM1 45C1 20.6995 20.6995 1 45 1V-1C19.5949 -1 -1 19.595 -1 45H1ZM1 192.952V45H-1V192.952H1ZM45.0204 236.952C20.7193 236.952 1 217.252 1 192.952H-1C-1 218.358 19.6159 238.952 45.0204 238.952V236.952ZM56.3613 236.952H45.0204V238.952H56.3613V236.952ZM83.7251 265.311L57.0864 237.264L55.6362 238.641L82.2749 266.689L83.7251 265.311ZM108.914 237.264L82.2749 265.311L83.7251 266.689L110.364 238.641L108.914 237.264ZM560.979 236.952H109.639V238.952H560.979V236.952ZM605 192.952C605 217.252 585.281 236.952 560.979 236.952V238.952C586.384 238.952 607 218.358 607 192.952H605ZM605 45V192.952H607V45H605ZM561 1C585.3 1 605 20.6995 605 45H607C607 19.5949 586.405 -1 561 -1V1ZM45 1H561V-1H45V1Z"
                    fill="#B9FF66"
                    mask="url(#path-1-inside-1_341_510)"
                  />
                  <text x="50" y="50" fontSize="20">
                    Привет, SVG!
                  </text>
                </svg>
              </div>
              <div className="slider-block1-card-person">
                <h4>{item.name}</h4>
                <p>{item.position}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-block2">
          <button className="button button-prev">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 13.5C22.8284 13.5 23.5 12.8284 23.5 12C23.5 11.1716 22.8284 10.5 22 10.5L22 13.5ZM0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM22 10.5L2 10.5L2 13.5L22 13.5L22 10.5Z"
              fill="white"
              fillOpacity="0.3"
            />
          </svg>
          </button>
          <svg
            width="146"
            height="14"
            viewBox="0 0 146 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
            <input type="radio" id="option1" name="my-options" value="1"/>
        <label htmlFor="option1">
        <path className="button button-radio"
              d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
              fill="#B9FF66"
            />
          <text x="25" y="15" fontSize="14">Опция 1</text>
        </label>

            {/* <button className="button button-radio">
            <path className="button button-radio"
              d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
              fill="#B9FF66"
            />
            </button> */}
            </g>
            <g>
            <button className="button button-radio">
            <path
              d="M40.0099 2.05941L47 0L44.9604 7.0099L47 14L40.0099 11.9604L33 14L35.0594 7.0099L33 0L40.0099 2.05941Z"
              fill="white"
            />
            </button>
            </g>
            <g>
            <button className="button button-radio">
            <path
              d="M73.0099 2.05941L80 0L77.9604 7.0099L80 14L73.0099 11.9604L66 14L68.0594 7.0099L66 0L73.0099 2.05941Z"
              fill="white"
            />
            </button>
            </g>
            <g>
            <button className="button button-radio">
            <path
              d="M106.01 2.05941L113 0L110.96 7.0099L113 14L106.01 11.9604L99 14L101.059 7.0099L99 0L106.01 2.05941Z"
              fill="white"
            />
            </button>
            </g>
            <g>
            <button className="button button-radio">
            <path
              d="M139.01 2.05941L146 0L143.96 7.0099L146 14L139.01 11.9604L132 14L134.059 7.0099L132 0L139.01 2.05941Z"
              fill="white"
            />
            </button>
            </g>
          </svg>
          <button className="button button-next">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM23.0607 13.0607C23.6464 12.4749 23.6464 11.5251 23.0607 10.9393L13.5147 1.3934C12.9289 0.807613 11.9792 0.807613 11.3934 1.3934C10.8076 1.97919 10.8076 2.92893 11.3934 3.51472L19.8787 12L11.3934 20.4853C10.8076 21.0711 10.8076 22.0208 11.3934 22.6066C11.9792 23.1924 12.9289 23.1924 13.5147 22.6066L23.0607 13.0607ZM2 13.5L22 13.5L22 10.5L2 10.5L2 13.5Z"
              fill="white"
            />
          </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
