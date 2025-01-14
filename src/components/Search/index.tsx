import React from "react";
import CategorySelector from "./CategorySelector";

const Search = () => {
  return (
    <div className="flex flex-1 text-text max-w-[600px] border border-gray-300 bg-gray-100 h-8 rounded-md items-center p-1 has-[input:focus]:outline-red-500 has-[input:focus]:outline has-[input:focus]:outline-2 dark:bg-gray-800 max-xl:hidden">
      {/* Search Icon */}
      <svg
        className="w-6 h-6 text-gray-500 dark:text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      {/* Divider */}
      <div className="w-[1px] h-full flex bg-gray-400 mx-2" />

      {/* Search Input */}
      <input
        placeholder="Searching for..."
        className="flex-1 bg-transparent text-sm focus:outline-none"
      />

      {/* Custom Select Dropdown */}
      <CategorySelector>
        <option value="">All sections</option>
        <option value="world">World</option>
        <option value="politics">Politics</option>
        <option value="sport">Sport</option>
        <option value="technology">Technology</option>
      </CategorySelector>
    </div>
  );
};

export default Search;
