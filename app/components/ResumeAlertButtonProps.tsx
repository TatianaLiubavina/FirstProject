'use client'

import "@/app/css/animation.css";

interface ResumeAlertButtonProps {
    text: string
}


export default function ResumeAlertButton({ text }: ResumeAlertButtonProps) {
    return (
    <button className="btn-color-transition button-link btn-ripple" type="button" onClick={() => alert(text)}>
      Любимая цитата
    </button>
  );
}