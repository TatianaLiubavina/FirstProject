'use client'

interface ResumeAlertButtonProps {
    text: string
}


export default function ResumeAlertButton({ text }: ResumeAlertButtonProps) {
    return (
    <button className="button-link" type="button" onClick={() => alert(text)}>
      Любимая цитата
    </button>
  );
}