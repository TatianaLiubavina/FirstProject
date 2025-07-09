import React from 'react'
import Image from 'next/image'
import '@/app/css/styles.css'
import resumephoto from '@/public/resumephoto.webp'

export default function Home() {
  return (
    <div>
      <h1>Добро пожаловать!</h1>
      <p>Здесь можно ознакомиться с резюме трех кандидатов на вакансию разработчика.</p>
      <p>Для просмотра резюме нажмите на соответствующую ссылку в меню.</p>
      <p>Для связи с кандидатами используйте контакты, указанные в резюме.</p>
      <p>Для получения дополнительной информации о кандидатах, пожалуйста, свяжитесь с нами.</p>
      <p className="links__header">Наши контакты:</p>
      <ul className="links__container">
        <li>Email: <a href="mailto:info@example.com">info@example.com</a></li>
        <li>Телефон: <a href="tel:+79213343345">+7 (921) 334-33-45</a></li>
        <li>Адрес: 191002, Санкт-Петербург, ул. Пушкина, д. 1</li>
      </ul>
    </div>

    );
}