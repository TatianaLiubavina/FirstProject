import { resume3 } from "@/app/data/resume3";
import ResumePage from "@/app/components/ResumePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Резюме №3",
  description: "Резюме №3",
};

export default function Resume3() {
  return <ResumePage data={resume3} />;
}