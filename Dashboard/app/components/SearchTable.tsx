"use client";

import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  status: string;
}

interface SearchTableProps {
  allUsers: User[];
  onSearchResults: (results: User[]) => void;
}

export default function SearchTable({ allUsers, onSearchResults }: SearchTableProps) {
  const [searchPhrase, setSearchPhrase] = useState("");

  const handleSearch = (searchValue: string) => {
    const phrase = searchValue.toLowerCase().trim();
    setSearchPhrase(phrase);

    if (!phrase) {
      // Если поиск пустой, показываем всех пользователей
      onSearchResults(allUsers);
      return;
    }

    // Ищем по началу слов, а не по подстроке где угодно
    const filteredUsers = allUsers.filter(user => {
      return (
        user.name.toLowerCase().startsWith(phrase) ||
        user.company.toLowerCase().startsWith(phrase) ||
        user.phone.toLowerCase().startsWith(phrase) ||
        user.email.toLowerCase().startsWith(phrase) ||
        user.country.toLowerCase().startsWith(phrase) ||
        user.status.toLowerCase().startsWith(phrase)
      );
    });

    // Передаем результаты поиска в родительский компонент
    onSearchResults(filteredUsers);
  };

  useEffect(() => {
    const searchInput = document.getElementById('search-text') as HTMLInputElement;
    if (searchInput) {
      const handleInput = (e: Event) => {
        const target = e.target as HTMLInputElement;
        handleSearch(target.value);
      };

      searchInput.addEventListener('input', handleInput);
      
      return () => {
        searchInput.removeEventListener('input', handleInput);
      };
    }
  }, [allUsers]);

  return null;
}