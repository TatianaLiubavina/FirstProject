import Header from "./Header";
import Contacts from "./Contacts";
import LocationsSection from "./LocationsSection";
import JobTitles from "./JobTitles";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import Education from "./Education";
import SocialIcons from "./SocialIcons";
import WorkSchedule from "./WorkSchedule";
import ResumeAlertButton from "./ResumeAlertButtonProps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume",
};

export default function ResumePage({ data }: { data: any }) {
  return (
    <div>
      <Header
        pageTitle={data.pageTitle}
        subtitle={data.subtitle}
        photo={data.photo}
      />
      <section className="links">
        <h2 className="links__header">Контакты</h2>
        <ul className="links__container">
          {data.contacts.map((contacts: any, index: number) => (
            <Contacts
              key={index}
              contactTitle={contacts.contactTitle}
              contactSubtitle={contacts.contactSubtitle}
              link={contacts.link}
            />
          ))}
          {data.social.map((social: any) => (
            <SocialIcons
              key={social.iconName}
              iconName={social.iconName}
              path={social.path}
              link={social.link}
              color={social.color}
            />
          ))}
        </ul>
      </section>
      <p>
        <a href={data.telegramLink} target="_blank">
          {data.telegramUsername} - Telegram
        </a>{" "}
        - предпочтительный способ связи
      </p>
      <LocationsSection
        locations={data.location}
        relocation={data.relocation}
        relocation_bool={data.relocation_bool}
        business_trips={data.business_trips}
      />
      <h2>{data.jobName}</h2>
      <p>Специализации:</p>
      <ul>
        <JobTitles
          jobTitles={data.jobTitles}
        />
      </ul>
      <WorkSchedule
        businessTypes={data.businessTypes}
        workSchedule={data.workSchedule}
      />
      <h3>Опыт работы {data.experienceDuration} лет</h3>
      <table>
        <tbody>
          {data.experiences.map((experiences: any) => (
            <ExperienceSection
              key={experiences.keyName}
              keyName={experiences.keyName}
              startDate={experiences.startDate}
              endDate={experiences.endDate}
              duration={experiences.duration}
              companyName={experiences.companyName}
              location={experiences.location}
              website={experiences.website}
              industry={experiences.industry}
              businessTypes={experiences.businessTypes}
              position={experiences.position}
              description={experiences.description}
              techStack={experiences.techStack}
            />
          ))}
        </tbody>
      </table>
      <h3>Ключевые навыки</h3>
      <ul
        style={{
          listStyle: "none",
        }}
      >
        <SkillsSection
          skills={data.skills}
          link={data.skillsLink}
        />
      </ul>
      <br />
      <h3>Образование</h3>
      {data.education.map((education: any) => (
        <Education
          key={education.keyName}
          education={education.education}
          date={education.date}
          university={education.university}
          specialization={education.specialization}
        />
      ))}
      <footer>
        <ResumeAlertButton text={data.alertText} />
      </footer>
    </div>
  );
}