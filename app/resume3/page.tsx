import { resume3 } from "@/app/data/resume3";
import ResumePage from "@/app/components/ResumePage";
import { Metadata } from "next";
import ScrollTop from "@/app/components/ScrollTop";


export const metadata: Metadata = {
  title: "Резюме №3",
  description: "Резюме №3",
};

export default function Resume3() {
  return (
    <>
    <ScrollTop />
    <ResumePage data={resume3} />
  </>)
}