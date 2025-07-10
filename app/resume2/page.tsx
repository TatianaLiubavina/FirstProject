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
import resumephoto2 from '@/public/resumephoto2.jpg'
import WorkSchedule from '@/app/components/WorkSchedule'
import { Metadata } from 'next';

export default function Resume2() {
  return (
    <div>
      <Header pageTitle="Романова Анна Владимировна" subtitle="Ведущий разработчик React, NodeJs" photo={resumephoto2.src} />
      <section className="links">
        <h2 className="links__header">Контакты</h2>
        <ul className="links__container">
          <Contacts contactName="Phone number" subtitle="+7 (921) 334-33-45" link="tel:+79213343345" />
          <Contacts contactName="Telegram" subtitle="@romanovaanna" link="https://t.me/romanovaanna" />
          <Contacts contactName="Email" subtitle="romanovaanna@gmail.com" link="mailto:romanovaanna@gmail.com" />
          <Contacts contactName="GitHub" subtitle="github.com/romanovaanna" link="https://github.com/romanovaanna" />
          <Contacts contactName="LinkedIn" subtitle="Anna Romanova" link="https://www.linkedin.com/in/romanovaanna/" />
          <Contacts contactName="Instagram" subtitle="instagram.com/romanovaanna" link="https://www.instagram.com/romanovaanna/" />
          <Contacts contactName="Facebook" subtitle="Anna Romanova" link="https://www.facebook.com/romanovaanna" />
          <SocialIcons iconName="Telegram" path="M28.2307 89.8987C79.5175 66.8612 145.887 38.7737 155.048 34.8862C179.08 24.7112 186.454 26.6612 182.777 49.1945C180.137 65.3903 172.518 119.011 166.446 152.386C162.842 172.178 154.758 174.524 142.047 165.961C135.934 161.84 105.079 141.007 98.3828 136.115C92.2699 131.657 83.839 126.295 94.4123 115.732C98.1747 111.97 122.839 87.9237 142.055 69.207C144.573 66.7487 141.41 62.7112 138.505 64.682C112.604 82.2195 76.6936 106.561 72.1232 109.732C65.2186 114.52 58.5874 116.715 46.6838 113.224C37.6898 110.586 28.904 107.44 25.4843 106.24C12.3157 101.624 15.4416 95.6445 28.2307 89.8987Z" link="https://t.me/romanovaanna" color="rgb(6, 197, 244)" />
          <SocialIcons iconName="email" path="M166.667 33.3333H33.3334C24.1251 33.3333 16.7501 40.7916 16.7501 49.9999L16.6667 150C16.6667 159.208 24.1251 166.667 33.3334 166.667H166.667C175.875 166.667 183.333 159.208 183.333 150V49.9999C183.333 40.7916 175.875 33.3333 166.667 33.3333ZM166.667 150H33.3334V66.6666L100 108.333L166.667 66.6666V150ZM100 91.6666L33.3334 49.9999H166.667L100 91.6666Z" link="mailto:romanovaanna@gmail.com" color="rgb(243, 124, 5)" />
          <SocialIcons iconName="github.com/" path="M183.333 100C183.333 137.333 158.833 168.917 125 179.5V158.333C125 151.208 122 144.833 117.25 140.25C139.083 136.292 150 123.583 150 100C150 89.7918 147.917 81.7084 143.833 75.4168C145.667 68.2918 146.75 58.1668 141.667 50.0001C131.833 50.0001 124.958 55.7918 120.917 60.5418C114.875 59.0834 107.917 58.3334 100 58.3334C92.5001 58.3334 85.5834 59.1668 79.4168 60.8751C75.4168 56.0834 68.4168 50.0001 58.3334 50.0001C52.4168 59.5001 54.8334 69.7501 57.0834 75.5001C52.5834 81.7918 50.0001 89.8751 50.0001 100C50.0001 123.583 60.9168 136.292 82.7501 140.25C79.9584 142.958 77.7918 146.25 76.4584 150H66.6668C60.6668 150 58.3334 147.333 55.1251 143C51.9167 138.667 48.4584 135.75 44.3334 134.542C42.1251 134.292 40.6251 136.083 42.5834 137.667C49.1251 142.375 49.5834 150.083 52.2084 155.125C54.5834 159.667 59.5001 162.5 65.0418 162.5H75.0001V179.5C41.1668 168.917 16.6667 137.333 16.6667 100C16.6667 53.9584 53.9584 16.6667 100 16.6667C146.042 16.6667 183.333 53.9584 183.333 100Z" link="https://github.com/romanovaanna" color="rgb(0, 0, 0)" />
          <SocialIcons iconName="instagram.com/" path="M65 16.6667H135C161.667 16.6667 183.333 38.3334 183.333 65.0001V135C183.333 147.819 178.241 160.113 169.177 169.177C160.113 178.241 147.819 183.333 135 183.333H65C38.3333 183.333 16.6667 161.667 16.6667 135V65.0001C16.6667 52.1813 21.7589 39.8875 30.8232 30.8233C39.8874 21.759 52.1812 16.6667 65 16.6667ZM63.3333 33.3334C55.3768 33.3334 47.7462 36.4941 42.1201 42.1202C36.494 47.7463 33.3333 55.3769 33.3333 63.3334V136.667C33.3333 153.25 46.75 166.667 63.3333 166.667H136.667C144.623 166.667 152.254 163.506 157.88 157.88C163.506 152.254 166.667 144.623 166.667 136.667V63.3334C166.667 46.7501 153.25 33.3334 136.667 33.3334H63.3333ZM143.75 45.8334C146.513 45.8334 149.162 46.9309 151.116 48.8844C153.069 50.8379 154.167 53.4874 154.167 56.2501C154.167 59.0128 153.069 61.6623 151.116 63.6158C149.162 65.5693 146.513 66.6668 143.75 66.6668C140.987 66.6668 138.338 65.5693 136.384 63.6158C134.431 61.6623 133.333 59.0128 133.333 56.2501C133.333 53.4874 134.431 50.8379 136.384 48.8844C138.338 46.9309 140.987 45.8334 143.75 45.8334ZM100 58.3334C111.051 58.3334 121.649 62.7233 129.463 70.5373C137.277 78.3513 141.667 88.9494 141.667 100C141.667 111.051 137.277 121.649 129.463 129.463C121.649 137.277 111.051 141.667 100 141.667C88.9493 141.667 78.3512 137.277 70.5372 129.463C62.7232 121.649 58.3333 111.051 58.3333 100C58.3333 88.9494 62.7232 78.3513 70.5372 70.5373C78.3512 62.7233 88.9493 58.3334 100 58.3334ZM100 75.0001C93.3696 75.0001 87.0107 77.634 82.3223 82.3224C77.6339 87.0108 75 93.3697 75 100C75 106.631 77.6339 112.989 82.3223 117.678C87.0107 122.366 93.3696 125 100 125C106.63 125 112.989 122.366 117.678 117.678C122.366 112.989 125 106.631 125 100C125 93.3697 122.366 87.0108 117.678 82.3224C112.989 77.634 106.63 75.0001 100 75.0001Z" link="https://www.instagram.com/romanovaanna/" color="rgb(255, 40, 136)" />
          <SocialIcons iconName="facebook.com/" path="M35.5189 17H165.151C170.063 17 174.773 18.9511 178.246 22.4241C181.719 25.897 183.67 30.6074 183.67 35.5189V165.151C183.67 170.063 181.719 174.773 178.246 178.246C174.773 181.719 170.063 183.67 165.151 183.67H35.5189C30.6074 183.67 25.897 181.719 22.4241 178.246C18.9511 174.773 17 170.063 17 165.151V35.5189C17 30.6074 18.9511 25.897 22.4241 22.4241C25.897 18.9511 30.6074 17 35.5189 17V17ZM155.892 35.5189H132.743C124.148 35.5189 115.905 38.9333 109.827 45.011C103.749 51.0887 100.335 59.3318 100.335 67.9269V91.0756H81.8161V118.854H100.335V183.67H128.113V118.854H155.892V91.0756H128.113V72.5567C128.113 70.1009 129.089 67.7457 130.825 66.0093C132.562 64.2728 134.917 63.2972 137.373 63.2972H155.892V35.5189Z" link="https://www.facebook.com/romanovaanna" color="rgb(61, 135, 246)" />
        </ul>
      </section>
      <p>
        <a href="https://t.me/romanovaanna" target="_blank">
          @romanovaanna - Telegram
        </a>{" "}
        - предпочтительный способ связи
      </p>
      <LocationsSection locations="Сочи" relocation={["ОАЭ", "Бельгия", "Сербия", "Великобритания", "США", "Швеция", "Греция"]} relocation_bool={true} business_trips={false} />
      <h2>Ведущий разработчик React, NodeJs</h2>
      <p>Специализации:</p>
      <ul>
        <JobTitles jobTitles={["Ведущий разработчик React, NodeJs", "Разработчик React, NodeJs", "Разработчик NextJs", "Разработчик React Native"]} />
      </ul>
      <WorkSchedule businessTypes={["проектная работа", "частичная занятость"]} workSchedule={["удаленная работа"]} />
      <h3>Опыт работы 10 лет</h3>
      <table>
        <tbody>
          <ExperienceSection
            startDate="Июль 2020"
            endDate="по настоящее время"
            duration="5 лет"
            companyName="ДачиВам"
            location="Сочи"
            website="https://dachivam.ru"
            industry="Интернет-магазин"
            businessTypes={["Веб-разработка", "Мобильные приложения", "ИТ-консалтинг", "Облачные вычисления", "Хостинг и инфраструктура", "Разработка программного обеспечения", "Аналитика данных", "Бизнес-аналитика",]}
            position="Ведущий разработчик React, NodeJs"
            description={["Разработка и поддержка собственных продуктов компании (внутренние сервисы, портала).", " Устранение проблем производительности и повышение отказоустойчивости продукта, рефакторинг, распил монолита, обертывание в Docker-контейнеры, подготовка к миграции в Kubernetes.", " Перевод старого Legacy недокументированного кода на микросервисную архитектуру.", " Система обслуживает более 500 поставщиков, более 100 брендов, более 31 000 000 SKU доступно для заказа, более 100 000 наименований товаров в постоянном наличии, более 20 000 клиентов.", " Планирование спринтов и основных приоритетов разработки, участие в совете архитекторов и релизном комитете."]}
            techStack={["React", "NodeJs", "NextJs", "React Native", "Typescript", "Javascript", "HTML", "CSS", "Git", "Docker", "Kubernetes", "CI/CD", "Jira", "Scrum", "Agile", "GitLab", "Jenkins", "Zabbix", "Prometheus", "Grafana", "RabbitMQ", "Kafka"]} />
          <ExperienceSection
            startDate="Июнь 2015"
            endDate="июль 2020"
            duration="5 лет 2 месяца"
            companyName="RainBird"
            location="Сочи"
            position="Разработчик React, NodeJs"
            description={["Разработка и поддержка продуктов компании.", "Разработка и поддержка проектов заказчиков, аутстаффинг.", "Решение технических и бизнес задач", "Разработка стабильного читабельного кода", "Проверка кода других разработчиков", "Участие в принятии решений по архитектуре проектов", "Участие в общении с бизнес-заказчиками, аналитиками, декомпозиции/постановке задач"]}
          />
        </tbody>
      </table>
      <h3>Ключевые навыки</h3>
      <ul
        style={{
          listStyle: "none",
        }}>

        <SkillsSection skills={["Adobe Photoshop", "ERP Systems", "HTML5", "JavaScript", "Linux", "Mac Os", "MySQL", "PLM", "SMTP/POP3/IMAP", "Unix", "VMware", "VmWare vSphere", "JВеб-программирование", "Управление проектами", "Git", "HTML", "CSS", "Администрирование сетевого оборудования", "Node.js", "Electron js", "Nginx", "Docker", "PHP", "Atlassian Jira", "Scrum"]} link={["https://www.adobe.com/products/photoshop.html", "https://www.erp-systems.com/", "https://www.w3schools.com/html/", "https://www.javascript.com/", "https://www.linux.org/", "https://www.apple.com/macos/", "https://www.mysql.com/", "https://www.plm.com/", "https://www.smtp.com/", "https://www.unix.com/", "https://www.vmware.com/", "https://www.vmware.com/products/vsphere.html", "https://www.web-programming.com/", "https://www.project-management.com/", "https://www.git-scm.com/", "https://www.html.com/", "https://www.css.com/", "https://www.network-administration.com/", "https://www.sql.com/", "https://www.teamcenter.com/", "https://www.nodejs.org/", "https://www.electronjs.org/", "https://www.nginx.com/", "https://www.docker.com/", "https://www.php.net/", "https://www.atlassian.com/software/jira", "https://www.scrum.org/"]}
        />
      </ul>
      <br />
      <h3>Образование</h3>
      <Education education="Высшее образование (Бакалавр)" date="2014" university="Национальный исследовательский университет информационных технологий, механики и оптики, Санкт-Петербург" specialization="Информационные системы и технологии" />
      <Education education="Профессиональная переподготовка" date="2017" university="Национальный исследовательский университет информационных технологий, механики и оптики, Санкт-Петербург" specialization="Иностранные языки" />

      <footer>
        <button className="button-link" type="button" onClick={() => alert("ЧЛучше сделать и пожалеть, чем не сделать и пожалеть.")}>Любимая цитата</button>
      </footer>
    </div>

  );
}