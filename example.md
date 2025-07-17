# CSS Анимации: Полное руководство

## Введение

CSS анимации - это мощный инструмент для создания плавных и привлекательных эффектов на веб-страницах. Они позволяют сделать интерфейс более интерактивным и живым без использования JavaScript.

## Основные типы анимаций

### 1. Переходы (Transitions)

Переходы позволяют плавно изменять свойства элементов при определенных событиях (например, hover).

#### Синтаксис:
```css
transition: property duration timing-function delay;
```

#### Пример:
```css
.button {
  background-color: #4CAF50;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #45a049;
}
```

#### Основные свойства:
- `transition-property` - какое свойство анимировать
- `transition-duration` - продолжительность анимации
- `transition-timing-function` - функция сглаживания
- `transition-delay` - задержка перед началом

#### Функции сглаживания:
- `linear` - постоянная скорость
- `ease` - медленно-быстро-медленно (по умолчанию)
- `ease-in` - медленное начало
- `ease-out` - медленное окончание
- `ease-in-out` - медленное начало и окончание

### 2. Keyframes анимации

Keyframes позволяют создавать более сложные анимации с множественными этапами.

#### Создание keyframes:
```css
@keyframes animation-name {
  0% { /* начальное состояние */ }
  50% { /* промежуточное состояние */ }
  100% { /* конечное состояние */ }
}
```

#### Применение анимации:
```css
.element {
  animation: animation-name duration timing-function delay iteration-count direction fill-mode;
}
```

#### Пример:
```css
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.bouncing-element {
  animation: bounce 2s infinite;
}
```

## Практические примеры

### 1. Анимация кнопки при наведении
```css
.animated-button {
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.animated-button:hover {
  background: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
```

### 2. Вращающийся элемент
```css
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.rotating-element {
  animation: rotate 2s linear infinite;
}
```

### 3. Пульсирующий эффект
```css
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.pulsing-element {
  animation: pulse 1.5s ease-in-out infinite;
}
```

### 4. Скольжение слева
```css
@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in-left {
  animation: slideInLeft 0.5s ease-out;
}
```

## Полезные советы

### 1. Производительность
- Используйте `transform` и `opacity` для лучшей производительности
- Избегайте анимации `width`, `height`, `margin`, `padding`
- Используйте `will-change` для сложных анимаций

### 2. Доступность
- Учитывайте пользователей с `prefers-reduced-motion`
- Не делайте анимации слишком быстрыми или медленными

### 3. Отзывчивость
- Тестируйте анимации на разных устройствах
- Используйте медиа-запросы для адаптации анимаций

## Заключение

CSS анимации - это мощный инструмент для создания интерактивных интерфейсов. Начните с простых переходов, затем переходите к более сложным keyframes анимациям. Помните о производительности и доступности при создании анимаций.

---

*Этот файл создан для изучения CSS анимаций. Для практических примеров посетите страницу с демонстрацией анимаций.*