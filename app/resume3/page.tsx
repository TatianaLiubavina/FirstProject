'use client'
import React from 'react'
import '@/app/css/styles.css'
import '@/app/fonts/DINPro/stylesheet.css'
import Header from '@/app/components/Header'
import Contacts from '@/app/components/Contacts'
import LocationsSection from '@/app/components/LocationsSection'
import JobTitles from '@/app/components/JobTitles'
import ExperienceSection from '@/app/components/ExperienceSection'
import SkillsSection from '@/app/components/SkillsSection'
import Education from '@/app/components/Education'
import SocialIcons from '@/app/components/SocialIcons'
import resumephoto3 from '@/public/resumephoto3.jpg'
import WorkSchedule from '@/app/components/WorkSchedule'

export default function Resume3() {
  return (
<div>
<Header title="Семенов Илья Павлович" subtitle="Руководитель отдела автоматизации" photo={resumephoto3.src} />
<section className="links">
<h2 className="links__header">Контакты</h2>
<ul className="links__container">
<Contacts title="Phone number" subtitle="+7 (921) 334-33-45" link="tel:+79213343345" />
<Contacts title="Telegram" subtitle="@semenovilya" link="https://t.me/semenovilya" />
<Contacts title="Email" subtitle="semenovilya@gmail.com" link="mailto:semenovilya@gmail.com" />
<Contacts title="GitHub" subtitle="github.com/semenovilya" link="https://github.com/semenovilya" />
<Contacts title="Habr Career" subtitle="career.habr.com/semenovilya" link="https://career.habr.com/semenovilya" />
<SocialIcons title="Telegram" path="M28.2307 89.8987C79.5175 66.8612 145.887 38.7737 155.048 34.8862C179.08 24.7112 186.454 26.6612 182.777 49.1945C180.137 65.3903 172.518 119.011 166.446 152.386C162.842 172.178 154.758 174.524 142.047 165.961C135.934 161.84 105.079 141.007 98.3828 136.115C92.2699 131.657 83.839 126.295 94.4123 115.732C98.1747 111.97 122.839 87.9237 142.055 69.207C144.573 66.7487 141.41 62.7112 138.505 64.682C112.604 82.2195 76.6936 106.561 72.1232 109.732C65.2186 114.52 58.5874 116.715 46.6838 113.224C37.6898 110.586 28.904 107.44 25.4843 106.24C12.3157 101.624 15.4416 95.6445 28.2307 89.8987Z" link="https://t.me/semenovilya" color="rgb(6, 197, 244)" />
<SocialIcons title="email" path="M166.667 33.3333H33.3334C24.1251 33.3333 16.7501 40.7916 16.7501 49.9999L16.6667 150C16.6667 159.208 24.1251 166.667 33.3334 166.667H166.667C175.875 166.667 183.333 159.208 183.333 150V49.9999C183.333 40.7916 175.875 33.3333 166.667 33.3333ZM166.667 150H33.3334V66.6666L100 108.333L166.667 66.6666V150ZM100 91.6666L33.3334 49.9999H166.667L100 91.6666Z" link="mailto:semenovilya@gmail.com" color="rgb(243, 124, 5)"/>
<SocialIcons title="github.com/" path="M183.333 100C183.333 137.333 158.833 168.917 125 179.5V158.333C125 151.208 122 144.833 117.25 140.25C139.083 136.292 150 123.583 150 100C150 89.7918 147.917 81.7084 143.833 75.4168C145.667 68.2918 146.75 58.1668 141.667 50.0001C131.833 50.0001 124.958 55.7918 120.917 60.5418C114.875 59.0834 107.917 58.3334 100 58.3334C92.5001 58.3334 85.5834 59.1668 79.4168 60.8751C75.4168 56.0834 68.4168 50.0001 58.3334 50.0001C52.4168 59.5001 54.8334 69.7501 57.0834 75.5001C52.5834 81.7918 50.0001 89.8751 50.0001 100C50.0001 123.583 60.9168 136.292 82.7501 140.25C79.9584 142.958 77.7918 146.25 76.4584 150H66.6668C60.6668 150 58.3334 147.333 55.1251 143C51.9167 138.667 48.4584 135.75 44.3334 134.542C42.1251 134.292 40.6251 136.083 42.5834 137.667C49.1251 142.375 49.5834 150.083 52.2084 155.125C54.5834 159.667 59.5001 162.5 65.0418 162.5H75.0001V179.5C41.1668 168.917 16.6667 137.333 16.6667 100C16.6667 53.9584 53.9584 16.6667 100 16.6667C146.042 16.6667 183.333 53.9584 183.333 100Z" link="https://github.com/semenovilya" color="rgb(0, 0, 0)"/>
<SocialIcons title="twitter.com/" path="M187.167 49.9999C180.75 52.9166 173.833 54.8333 166.667 55.7499C174 51.3333 179.667 44.3333 182.333 35.9166C175.417 40.0833 167.75 42.9999 159.667 44.6666C153.083 37.4999 143.833 33.3333 133.333 33.3333C113.75 33.3333 97.75 49.3333 97.75 69.0833C97.75 71.9166 98.0833 74.6666 98.6667 77.2499C69 75.7499 42.5833 61.4999 25 39.9166C21.9167 45.1666 20.1667 51.3333 20.1667 57.8333C20.1667 70.2499 26.4167 81.2499 36.0833 87.4999C30.1667 87.4999 24.6667 85.8333 19.8333 83.3333C19.8333 83.3333 19.8333 83.3332 19.8333 83.5832C19.8333 100.917 32.1667 115.417 48.5 118.667C45.5 119.5 42.3333 119.917 39.0833 119.917C36.8333 119.917 34.5833 119.667 32.4167 119.25C36.9167 133.333 50 143.833 65.75 144.083C53.5833 153.75 38.1667 159.417 21.3333 159.417C18.5 159.417 15.6667 159.25 12.8333 158.917C28.6667 169.083 47.5 175 67.6667 175C133.333 175 169.417 120.5 169.417 73.2499C169.417 71.6666 169.417 70.1666 169.333 68.5832C176.333 63.5832 182.333 57.2499 187.167 49.9999Z" link="https://twitter.com/semenovilya" color="rgb(46, 119, 255)"/>
</ul>
</section>
<p>
      <a href="https://t.me/semenovilya" target="_blank">
        @semenovilya - Telegram
      </a>{" "}
      - предпочтительный способ связи
    </p>
<LocationsSection locations="Самара" relocation_bool={false} business_trips={true} />
<h2>Руководитель отдела автоматизации</h2>
<p>Специализации:</p>
<ul>
<JobTitles jobTitles={["Руководитель отдела автоматизации", "Руководитель отдела разработки", "Руководитель группы разработки", "Руководитель проектов"]} />
</ul>
<WorkSchedule businessTypes={["проектная работа", "частичная занятость", "полная занятость"]} workSchedule={["удаленная работа"]} />
<h3>Опыт работы 11 лет</h3>
    <table>
      <tbody>
      <ExperienceSection 
  startDate="Февраль 2019"
  endDate="Декабрь 2021"
  duration="2 года 11 месяцев"
  companyName="Инновации Плюс"
  location="Санкт-Петербург, innovplus.ru"
  website="https://innovplus.ru"
  industry="Информационные технологии"
  businessTypes={[
    "Разработка программного обеспечения",
    "ИТ-консалтинг"
  ]}
  position="Ведущий backend-разработчик"
  description={[
    "Разработка и поддержка высоконагруженных веб-сервисов для корпоративных клиентов.","Внедрение CI/CD, оптимизация архитектуры, интеграция с внешними API.","Руководство командой из 5 разработчиков, проведение code review, обучение новых сотрудников.","Успешная реализация проекта по миграции монолита на микросервисную архитектуру."
  ]}
  techStack={[
    "Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Jenkins", "Git", "Express", "RabbitMQ", "Grafana"
  ]}
/>
<ExperienceSection 
  startDate="Март 2017"
  endDate="Июль 2019"
  duration="2 года 5 месяцев"
  companyName="ОблакоСервис"
  location="Москва, cloudoservice.ru"
  website="https://cloudoservice.ru"
  industry="Облачные технологии"
  businessTypes={[
    "Облачные вычисления",
    "Хостинг и инфраструктура"
  ]}
  position="DevOps-инженер"
  description={[
    "Автоматизация процессов развертывания и мониторинга облачных сервисов.","Настройка CI/CD, внедрение инструментов для логирования и алертинга.","Оптимизация инфраструктуры для повышения отказоустойчивости и масштабируемости.","Взаимодействие с командами разработки и поддержки."
  ]}
  techStack={[
    "Docker", "Kubernetes", "Prometheus", "Grafana", "Ansible", "AWS", "Nginx", "Linux", "GitLab CI"
  ]}
/>

<ExperienceSection 
  startDate="Август 2015"
  endDate="Январь 2017"
  duration="1 год 6 месяцев"
  companyName="СофтВижн"
  location="Екатеринбург, softvision.ru"
  website="https://softvision.ru"
  industry="Разработка ПО"
  businessTypes={[
    "Веб-разработка",
    "Мобильные приложения"
  ]}
  position="Frontend-разработчик"
  description={[
    "Создание и поддержка пользовательских интерфейсов для корпоративных порталов и мобильных приложений.","Внедрение современных UI/UX практик, оптимизация производительности фронтенда.","Активное участие в проектировании архитектуры SPA."
  ]}
  techStack={[
    "React", "Redux", "TypeScript", "Sass", "Webpack", "Jest", "Figma", "REST API"
  ]}
/>
<ExperienceSection 
  startDate="Июнь 2013"
  endDate="Май 2015"
  duration="2 года"
  companyName="Данные.РФ"
  location="Казань, data-rf.ru"
  website="https://data-rf.ru"
  industry="Аналитика и Big Data"
  businessTypes={[
    "Обработка больших данных",
    "Бизнес-аналитика"
  ]}
  position="Аналитик данных"
  description={[
    "Сбор, обработка и анализ больших массивов данных для клиентов из финансового и ритейл-сектора.","Разработка ETL-процессов, построение отчетности и визуализаций.","Внедрение инструментов для автоматизации аналитики."
  ]}
  techStack={[
    "Python", "SQL", "Hadoop", "Spark", "Tableau", "Airflow", "Pandas", "Power BI"
  ]}
/>
</tbody>
</table>
    <h3>Ключевые навыки</h3>
    <ul
      style={{
        listStyle: "none",
      }}>
<SkillsSection
  skills={[
    "TypeScript",
    "React",
    "Redux",
    "Next.js",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "Kubernetes",
    "AWS",
    "Figma",
    "Jest",
    "Cypress",
    "Sass",
    "Webpack",
    "CI/CD",
    "Agile",
    "REST API",
    "Microservices",
    "RabbitMQ",
    "Prometheus",
    "Grafana",
    "Linux",
    "Docker Compose",
    "OAuth2",
    "Swagger",
    "Storybook",
    "Trello"
  ]}
  link={[
    "https://www.typescriptlang.org/",
    "https://react.dev/",
    "https://redux.js.org/",
    "https://nextjs.org/",
    "https://graphql.org/",
    "https://www.postgresql.org/",
    "https://www.mongodb.com/",
    "https://kubernetes.io/",
    "https://aws.amazon.com/",
    "https://www.figma.com/",
    "https://jestjs.io/",
    "https://www.cypress.io/",
    "https://sass-lang.com/",
    "https://webpack.js.org/",
    "https://www.atlassian.com/continuous-delivery/ci-vs-cd",
    "https://www.atlassian.com/agile",
    "https://restfulapi.net/",
    "https://microservices.io/",
    "https://www.rabbitmq.com/",
    "https://prometheus.io/",
    "https://grafana.com/",
    "https://www.linux.org/",
    "https://docs.docker.com/compose/",
    "https://oauth.net/2/",
    "https://swagger.io/",
    "https://storybook.js.org/",
    "https://trello.com/"
  ]}
/>
</ul>
<br/>
<h3>Образование</h3>
<Education
  education="Высшее образование (Бакалавр)"
  date="2014"
  university="Московский государственный университет им. М.В. Ломоносова"
  specialization="Прикладная математика и информатика"
/>

<Education
  education="Высшее образование (Магистр)"
  date="2016"
  university="Санкт-Петербургский политехнический университет Петра Великого"
  specialization="Информационные системы и технологии"
/>

<Education
  education="Дополнительное образование"
  date="2019"
  university="Яндекс.Практикум"
  specialization="Веб-разработка"
/>
  <footer>
    <button className="button-link" type="button" onClick={() => alert("Успех — это движение от неудачи к неудаче без потери энтузиазма.")}>Любимая цитата</button>
  </footer>
</div>

    );
}