import React from 'react';
import '../css/animations.css';

export default function AnimationsPage() {
  return (
    <div className="animations-container">
      <h1>CSS Анимации - Демонстрация</h1>
      
      <section className="demo-section">
        <h2>1. Transitions (Переходы)</h2>
        <div className="demo-grid">
          <div className="demo-item">
            <h3>Цвет фона</h3>
            <button className="btn-color-transition">Наведи на меня</button>
          </div>
          
          <div className="demo-item">
            <h3>Трансформация</h3>
            <div className="box transform-hover">Hover Box</div>
          </div>
          
          <div className="demo-item">
            <h3>Тень</h3>
            <div className="box shadow-hover">Shadow Box</div>
          </div>
        </div>
      </section>

      <section className="demo-section">
        <h2>2. Keyframes анимации</h2>
        <div className="demo-grid">
          <div className="demo-item">
            <h3>Bounce (Отскок)</h3>
            <div className="box bounce-animation">Bounce</div>
          </div>
          
          <div className="demo-item">
            <h3>Rotate (Вращение)</h3>
            <div className="box rotate-animation">Rotate</div>
          </div>
          
          <div className="demo-item">
            <h3>Pulse (Пульсация)</h3>
            <div className="box pulse-animation">Pulse</div>
          </div>
        </div>
      </section>

      <section className="demo-section">
        <h2>3. Сложные анимации</h2>
        <div className="demo-grid">
          <div className="demo-item">
            <h3>Slide In Left</h3>
            <div className="box slide-in-left">Slide In</div>
          </div>
          
          <div className="demo-item">
            <h3>Fade In Up</h3>
            <div className="box fade-in-up">Fade In Up</div>
          </div>
          
          <div className="demo-item">
            <h3>Flip</h3>
            <div className="box flip-animation">Flip</div>
          </div>
        </div>
      </section>

      <section className="demo-section">
        <h2>4. Интерактивные кнопки</h2>
        <div className="demo-grid">
          <div className="demo-item">
            <h3>Ripple Effect</h3>
            <button className="btn-ripple">Нажми меня</button>
          </div>
          
          <div className="demo-item">
            <h3>Gradient Button</h3>
            <button className="btn-gradient">Градиентная кнопка</button>
          </div>
          
          <div className="demo-item">
            <h3>3D Button</h3>
            <button className="btn-3d">3D кнопка</button>
          </div>
        </div>
      </section>

      <section className="demo-section">
        <h2>5. Загрузочные анимации</h2>
        <div className="demo-grid">
          <div className="demo-item">
            <h3>Spinner</h3>
            <div className="spinner"></div>
          </div>
          
          <div className="demo-item">
            <h3>Progress Bar</h3>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
          
          <div className="demo-item">
            <h3>Dots Loading</h3>
            <div className="dots-loading">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </section>

      <div className="info-section">
        <h2>Информация об анимациях</h2>
        <p>
          Все анимации выше созданы с использованием чистого CSS. 
          Transitions используются для плавных переходов при взаимодействии пользователя, 
          а keyframes - для более сложных анимаций.
        </p>
      </div>
    </div>
  );
}