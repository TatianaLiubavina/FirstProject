import React from 'react'
import Image from 'next/image'
import '@/app/css/styles.css'
import '@/app/fonts/DINPro/stylesheet.css'
import resumephoto from '@/public/resumephoto.webp'
import Header from '@/app/components/Header'
import Contacts from '@/app/components/Contacts'
import LocationsSection from '@/app/components/LocationsSection'
import JobTitles from '@/app/components/JobTitles'
import ExperienceSection from '@/app/components/ExperienceSection'
import SkillsSection from '@/app/components/SkillsSection'
import EducationSection from '@/app/components/EducationSection'
import Education from '@/app/components/Education'
//import SocialIcons from '@/app/components/SocialIcons'

export default function Resume1() {
  return (
<div>
<Header title="Иванов Петр Владимирович" subtitle="Руководитель группы разработки" />
<section className="links">
<h2 className="links__header">Контакты</h2>
<ul className="links__container">
<Contacts title="Phone number" subtitle="+7 (921) 334-33-45" link="tel:+79213343345" />
<Contacts title="Email" subtitle="ivanovpetr@gmail.com" link="mailto:ivanovpetr@gmail.com" />
<Contacts title="Telegram" subtitle="@ivanovpetr" link="https://t.me/ivanovpetr" />
<Contacts title="LinkedIn" subtitle="ivanovpetr" link="https://www.linkedin.com/in/ivanovpetr/" />
<Contacts title="Habr Career" subtitle="ivanovpetr" link="https://career.habr.com/ivanovpetr" />
<Contacts title="GitHub" subtitle="ivanovpetr" link="https://github.com/ivanovpetr" />
<Contacts title="Instagram" subtitle="ivanovpetr" link="https://www.instagram.com/ivanovpetr/" />
<Contacts title="Facebook" subtitle="ivanovpetr" link="https://www.facebook.com/ivanovpetr" />

{/* <SocialIcons /> */}
</ul>
</section>
<p>
      <a href="https://t.me/ivanovpetr" target="_blank">
        @ivanovpetr - Telegram
      </a>{" "}
      - предпочтительный способ связи
    </p>
<LocationsSection locations="Москва" relocation={["Нидерланды", "Австрия", "Чехия", "Люксембург", "Норвегия", "ОАЭ", "Бельгия", "Сербия", "Великобритания", "США", "Швеция", "Греция", "Германия", "Ирландия", "Финляндия", "Испания", "Италия", "Сингапур", "Швейцария", "Кипр", "Канада", "Португалия", "Венгрия", "Эквадор", "Лихтенштейн", "Хорватия", "Словения", "Уругвай", "Индонезия"]} />
<h2>Руководитель группы разработки PHP, NodeJs</h2>
<p>Специализации:</p>
<ul>
<JobTitles jobTitles={["Руководитель группы разработки", "Технический директор (CTO)", "Директор по информационным технологиям (CIO)", "Менеджер продукта", "Руководитель проектов"]} />
</ul>
<p>
      Занятость: проектная работа, частичная занятость, полная занятость
      <br />
      График работы: удаленная работа, полный день
    </p>
<h3>Опыт работы 9 лет</h3>
    <table>
      <tbody>
<ExperienceSection 
startDate="Май 2021"
endDate="по настоящее время"
duration="1 год 3 месяца"
companyName="Берг-Холдинг"
location="Москва, berg.ru"
website="https://berg.ru"
industry="Автомобильный бизнес"
businessTypes={["Автозапчасти, шины (розничная торговля)", "Автокомпоненты, запчасти, шины (продвижение, оптовая торговля)"]}
position="Руководитель группы разработки"
description={["Управление разработкой собственных продуктов компании (внутренние сервисы, портала). Устранение проблем производительности и повышение отказоустойчивости продукта, рефакторинг, распил монолита, обертывание в Docker-контейнеры, подготовка к миграции в Kubernetes. Перевод старого Legacy недокументированного кода на микросервисную архитектуру. Система обслуживает более 500 поставщиков, более 100 брендов, более 31 000 000 SKU доступно для заказа, более 100 000 наименований товаров в постоянном наличии, более 20 000 клиентов. Планирование спринтов и основных приоритетов разработки, участие в совете архитекторов и релизном комитете."]}
techStack={["php7", "php8", "Symfony", "Doctrine", "php-unit", "nodejs", "python", "GoLang", "Docker", "Mysql", "Clickhouse", "Redis", "PostgreSql", "Ansible", "vuejs", "Sphynx", "Debian", "GitLab", "Jenkins", "Zabbix", "Prometheous", "Grafana", "RabbitMQ", "Kafka"]}
/>
<ExperienceSection 
startDate="Октябрь 2019"
endDate="май 2021"
duration="1 год 8 месяцев"
companyName="Ацифра"
location="Москва"
website="https://acifra.ru"
position="Ведущий разработчик, TeamLead"
description={["Развитие и поддержка проектов заказчиков, аутстаффинг. Решение технических и бизнес задач; Разработка стабильного читабельного кода; Проверка кода других разработчиков; Участие в принятии решений по архитектуре проектов; Участие в общении с бизнес-заказчиками, аналитиками, декомпозиции/постановке задач; Участие в ведении технической документации Управление командой разработчиков 10+."]}
/>
<ExperienceSection 
startDate="Октябрь 2013"
endDate="октябрь 2019"
duration="6 лет 1 месяц"
companyName="MADMAKERS"
location="Санкт-Петербург"
website="https://madmakers.ru"
position="Руководитель группы разработчиков, разработчик"
description={["Руковожу командой Принимаю непосредственное участие в разработке. Делаем серверные, десктопные, мобильные приложения под любые платформы. Создаем сайты, интернет-магазины, веб-сервисы, Rest-Api, интеграции."]}
/>
</tbody>
</table>
    <h3>Ключевые навыки</h3>
    <ul
      style={{
        listStyle: "none",
      }}>
<SkillsSection skills={["Adobe Photoshop", "ERP Systems", "HTML5", "JavaScript", "Linux", "Mac Os", "MySQL", "PLM", "SMTP/POP3/IMAP", "Unix", "VMware", "VmWare vSphere", "JВеб-программирование", "Управление проектами", "Git", "HTML", "CSS", "Администрирование сетевого оборудования", "SQL", "Teamcenter", "Node.js", "Electron js", "Nginx", "Docker", "PHP", "Atlassian Jira", "Scrum"]} link={["https://www.adobe.com/products/photoshop.html", "https://www.erp-systems.com/", "https://www.w3schools.com/html/", "https://www.javascript.com/", "https://www.linux.org/", "https://www.apple.com/macos/", "https://www.mysql.com/", "https://www.plm.com/", "https://www.smtp.com/", "https://www.unix.com/", "https://www.vmware.com/", "https://www.vmware.com/products/vsphere.html", "https://www.web-programming.com/", "https://www.project-management.com/", "https://www.git-scm.com/", "https://www.html.com/", "https://www.css.com/", "https://www.network-administration.com/", "https://www.sql.com/", "https://www.teamcenter.com/", "https://www.nodejs.org/", "https://www.electronjs.org/", "https://www.nginx.com/", "https://www.docker.com/", "https://www.php.net/", "https://www.atlassian.com/software/jira", "https://www.scrum.org/"]}
/>
</ul>
<Education education="Высшее образование (Магистр)" date="2010" university="Балтийский государственный технический университет ВОЕНМЕХ им. Д.Ф. Устинова, Санкт-Петербург" specialization="Аэрокосмический, Плазмогазодинамика и теплотехника" />
  {/* <footer>
    <button className="button-link" type="button" onClick={() => alert("Что нас не убивает, делает нас сильнее!")}>Любимая цитата</button>
  </footer> */}
</div>

    );
}