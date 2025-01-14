"use client";
import { useSearch } from "./SearchContext";

const CategorySelector = ({ children }) => {
  const { category, setCategory } = useSearch();

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <select
      aria-label="Select Category"
      name="category"
      value={category}
      onChange={handleChange}
      className="bg-transparent border-none text-sm focus:outline-none cursor-pointer px-2 dark:bg-gray-800"
    >
      {children}
    </select>
  );
};

export default CategorySelector;
