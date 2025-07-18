import { resume2 } from "@/app/data/resume2";
import ResumePage from "@/app/components/ResumePage";
import { Metadata } from "next";
import ScrollTop from "@/app/components/ScrollTop";


export const metadata: Metadata = {
  title: "Резюме №2",
  description: "Резюме №2",
};

export default function Resume2() {
  return (
    <>
    <ScrollTop />
    <ResumePage data={resume2} />
  </>)
}