import React from "react";
import CategorySelector from "./CategorySelector";
import SearchInput from "./SearchInput";
import { SearchProvider } from "./SearchContext";

const Search = ({ className }) => {
  return (
    <div
      className={[
        className,
        "flex flex-1 text-text max-w-[600px] border border-gray-300 bg-gray-100 h-8 rounded-md items-center p-1 has-[input:focus]:outline-red-500 has-[input:focus]:outline has-[input:focus]:outline-2 dark:bg-gray-800",
      ].join(" ")}
    >
      <SearchProvider>
        {/* Search Input */}
        <SearchInput />

        {/* Custom Select Dropdown */}
        <CategorySelector>
          <option value="all">All sections</option>
          <option value="sport">Sport</option>
          <option value="politics">Politics</option>
          <option value="games">Games</option>
          <option value="technology">Technology</option>
          <option value="science">Science</option>
        </CategorySelector>
      </SearchProvider>
    </div>
  );
};

export default Search;
