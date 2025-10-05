"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Team({ team }: { team: any[] }) {
  return (
    <div className="team">
      {team.map((item) => (
        <div key={item.id} className="team-card">
          <div className="team-card-block">
            <div className="team-card-block1">
              <div className="team-card-block1-person">
                <svg
                  className="svg-person"
                  width="106"
                  height="103"
                  viewBox="0 0 106 103"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M91.631 53.9117C124.473 91.3213 94.1455 121.649 56.7359 88.8068C19.3263 121.649 -11.0016 91.3213 21.8408 53.9117C-11.0016 16.5021 19.3263 -13.8258 56.7359 19.0166C94.1455 -13.8258 124.473 16.5021 91.631 53.9117Z"
                    fill="#231F20"
                  />
                  <mask
                    id="mask0_341_350"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="98"
                    height="98"
                  >
                    <path
                      d="M83.8068 48.9117C116.649 86.3213 86.3213 116.649 48.9117 83.8068C11.5021 116.649 -18.8258 86.3213 14.0166 48.9117C-18.8258 11.5021 11.5021 -18.8258 48.9117 14.0166C86.3213 -18.8258 116.649 11.5021 83.8068 48.9117Z"
                      fill="#231F20"
                    />
                  </mask>
                  <g mask="url(#mask0_341_350)">
                    <rect
                      x="-5"
                      y="-14"
                      width="107"
                      height="161"
                      fill="url(#pattern0_341_350)"
                    />
                    <rect
                      x="-5"
                      y="-14"
                      width="107"
                      height="161"
                      fill="#B9FF66"
                      style={{ mixBlendMode: "multiply" }}
                    />
                  </g>
                  <defs>
                    <pattern
                      id="pattern0_341_350"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_341_350"
                        transform="matrix(0.000376828 0 0 0.000250438 -0.00155763 0)"
                      />
                    </pattern>
                    <image
                      id="image0_341_350"
                      xlinkHref={item.image}
                      width="2662"
                      height="3993"
                      preserveAspectRatio="none"
                    />
                  </defs>
                </svg>
                {/* <Image src={item.image} alt="" width={105} height={102} /> */}
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.position}</p>
                </div>
              </div>
              <svg
                className="svg-social-icon"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17" cy="17" r="17" fill="black" />
                <path
                  d="M9.31776 25H12.8131V13.6844H9.31776V25Z"
                  fill="#B9FF66"
                />
                <path
                  d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z"
                  fill="#B9FF66"
                />
                <path
                  d="M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z"
                  fill="#B9FF66"
                />
              </svg>
            </div>
            <svg
              width="317"
              height="2"
              viewBox="0 0 317 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="1.32324" x2="317" y2="1.32324" stroke="black" />
            </svg>
            <div className="team-card-block2">
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
