"use client";

import React, { useState } from "react";

export default function WorkingProcess({ process }: { process: any[] }) {
  const [openId, setOpenId] = useState<number | string | null>(null);
  return (
    <div className="working-process">
      {process.map((item) => {
        const isOpen = openId === item.id;
        return (
        <div key={item.id} className="working-process-card">
          <div className="working-process-card-title">
            <div>
            <p>{item.numberText}</p>
            <h3>{item.titleText}</h3>
            </div>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
            >
            <svg
              width="58"
              height="59"
              viewBox="0 0 58 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="29"
                cy="29.5"
                r="28.5"
                fill="#F3F3F3"
                stroke="#191A23"
              />
              {isOpen ? (
                <rect x="16" y="26.22" width="25.08" height="5.64" fill="#191A23" />
              ) : (
                <path
                  d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z"
                  fill="#191A23"
                />
              )}
            </svg>
            </button>
          </div>
          <div className="working-process-card-text" style={{ display: isOpen ? "block" : "none" }}>
          <svg
            width="1114"
            height="1"
            viewBox="0 0 1114 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="-4.37114e-08"
              y1="0.5"
              x2="1114"
              y2="0.499903"
              stroke="black"
            />
          </svg>
          <div>
            <p>{item.text}</p>
          </div>
          </div>
        </div>
      )})}
    </div>
  );
}
