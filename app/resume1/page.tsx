import { resume1 } from "@/app/data/resume1";
import ResumePage from "@/app/components/ResumePage";
import { Metadata } from "next";
import ScrollTop from "@/app/components/ScrollTop";


export const metadata: Metadata = {
  title: "Резюме №1",
  description: "Резюме №1",
};

export default function Resume1() {
  return (
    <>
    <ScrollTop />
    <ResumePage data={resume1} />
  </>)
}