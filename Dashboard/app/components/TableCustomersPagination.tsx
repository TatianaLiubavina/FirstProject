"use client";
import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import TableCustomers from "./TableCustomers";
import SearchTable from "./SearchTable";
import { usersData } from "../data/users";

export default function TableCustomersPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState(usersData);
  const usersPerPage = 8;

  // Вычисляем данные для текущей страницы
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Функция для изменения страницы
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Функция для обработки результатов поиска
  const handleSearchResults = (results: any[]) => {
    setFilteredUsers(results);
    setCurrentPage(1); // Сбрасываем на первую страницу при поиске
  };

  // Сбрасываем на первую страницу при изменении результатов поиска
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredUsers]);

  return (
    <div className="table">
      <SearchTable 
        allUsers={usersData} 
        onSearchResults={handleSearchResults}
      />
      <TableCustomers users={currentUsers} />
      <Pagination 
        users={filteredUsers} 
        currentPage={currentPage}
        usersPerPage={usersPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}