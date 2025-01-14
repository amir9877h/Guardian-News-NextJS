"use client";
import React, { useState } from "react";

const CategorySelector = ({ children }) => {
  const [category, setCategory] = useState("all");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <select
      value={category}
      onChange={handleChange}
      className="bg-transparent border-none text-sm focus:outline-none cursor-pointer px-2 dark:bg-gray-800"
    >
      {children}
    </select>
  );
};

export default CategorySelector;
