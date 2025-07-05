import React from 'react'
import ExperienceItem from './ExperienceItem'

const experienceData = [
  {
    startDate: "Май 2021",
    endDate: "по настоящее время",
    duration: "1 год 3 месяца",
    companyName: "Берг-Холдинг",
    location: "Москва",
    website: "berg.ru",
    industry: "Автомобильный бизнес",
    businessTypes: [
      "Автозапчасти, шины (розничная торговля)",
      "Автокомпоненты, запчасти, шины (продвижение, оптовая торговля)",
      "Автокомпоненты, запчасти (производство)",
    ],
    position: "Руководитель группы веб-разработки",
    description: `Управление разработкой собственных продуктов компании (внутренние сервисы, портала).<br /><br />Устранение проблем производительности и повышение отказоустойчивости продукта, рефакторинг, распил монолита, обертывание в Docker-контейнеры, подготовка к миграции в Kubernetes.<br /><br />Перевод старого Legacy недокументированного кода на микросервисную архитектуру.<br /><br />Система обслуживает более 500 поставщиков, более 100 брендов, более 31 000 000 SKU доступно для заказа, более 100 000 наименований товаров в постоянном наличии, более 20 000 клиентов.<br /><br />Планирование спринтов и основных приоритетов разработки, участие в совете архитекторов и релизном комитете.`,
    techStack: [
      "php7", "php8", "Symfony", "Doctrine", "php-unit", "nodejs", "python", 
      "GoLang", "Docker", "Mysql", "Clickhouse", "Redis", "PostgreSql", 
      "Ansible", "vuejs", "Sphynx", "Debian", "GitLab", "Jenkins", 
      "Zabbix", "Prometheous", "Grafana", "RabbitMQ", "Kafka"
    ]
  },
  {
    startDate: "Октябрь 2019",
    endDate: "май 2021",
    duration: "1 год 8 месяцев",
    companyName: "Ацифра",
    location: "Москва",
    position: "Ведущий разработчик, TeamLead",
    description: `Развитие и поддержка проектов заказчиков, аутстаффинг.<br />Решение технических и бизнес задач;<br /><br />Разработка стабильного читабельного кода;<br /><br />Проверка кода других разработчиков;<br /><br />Участие в принятии решений по архитектуре проектов;<br /><br />Участие в общении с бизнес-заказчиками, аналитиками, декомпозиции/постановке задач;<br /><br />Участие в ведении технической документации<br /><br />Управление командой разработчиков 10+.<br />`
  },
  {
    startDate: "Октябрь 2013",
    endDate: "октябрь 2019",
    duration: "6 лет 1 месяц",
    companyName: "MADMAKERS",
    location: "Санкт-Петербург",
    position: "Руководитель группы разработчиков, разработчик",
    description: `Руковожу командой<br /><br />Принимаю непосредственное участие в разработке.<br /><br />Делаем серверные, десктопные, мобильные приложения под любые платформы.<br /><br />Создаем сайты, интернет-магазины, веб-сервисы, Rest-Api, интеграции.<br />`
  }
]

// experienceData[2].startDate = "15 may";

export default function ExperienceSection() {
  return (
    <div>
      <h3>Опыт работы 9 лет</h3>
      <table>
        <tbody>
          {experienceData.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        <ExperienceItem key={193595959} startDate="15 may" endDate="15 may" duration="15 may" companyName="15 may" location="15 may" website="15 may" industry="15 may" businessTypes={[]} position="15 may" description="15 may" techStack={[]}  />
        </tbody>
      </table>
    </div>
  )
} 