import { resume2 } from "@/app/data/resume2";
import ResumePage from "@/app/components/ResumePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Резюме №2",
  description: "Резюме №2",
};

export default function Resume2() {
  return <ResumePage data={resume2} />;
}