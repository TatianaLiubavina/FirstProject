"use client";
import React from "react";

export default function TableCustomers({ users }: { users: any[] }) {
  return (
    <table id="info-table">
      <tbody>
        <tr>
          <td>Customer Name</td>
          <td>Company</td>
          <td>Phone Number</td>
          <td>Email</td>
          <td>Country</td>
          <td>Status</td>
        </tr>
        {users.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.company}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>{item.country}</td>
            <td>
              <span className={`status-${item.status.toLowerCase()}`}>
                {item.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}