"use client";

import React from "react";

export default function Functions() {

    const handleSearch = () => {
      // Получаем элементы DOM
      const phraseElement = document.getElementById('search-text') as HTMLInputElement;
      const tableElement = document.getElementById('info-table') as HTMLTableElement;

      // Проверяем, что элементы существуют
      if (!phraseElement || !tableElement) {
        console.warn('Search elements not found');
        return;
      }

      const phrase = phraseElement.value;
      const table = tableElement;
      const regPhrase = new RegExp(phrase, 'i');
      
      // Проходим по строкам таблицы (начиная с 1, пропуская заголовок)
      for (let i = 1; i < table.rows.length; i++) {
        let flag = false;
        
        // Проверяем каждую ячейку в строке
        for (let j = table.rows[i].cells.length - 1; j >= 0; j--) {
          flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
          if (flag) break;
        }
        
        // Показываем или скрываем строку
        if (flag) {
          table.rows[i].style.display = "";
        } else {
          table.rows[i].style.display = "none";
        }
      }
    };

    // Добавляем обработчик события для поля поиска
    const searchInput = document.getElementById('search-text') as HTMLInputElement;
    if (searchInput) {
      searchInput.addEventListener('input', handleSearch);
      
      // Очищаем обработчик при размонтировании компонента
      return () => {
        searchInput.removeEventListener('input', handleSearch);
      };
    }

  return null;
}