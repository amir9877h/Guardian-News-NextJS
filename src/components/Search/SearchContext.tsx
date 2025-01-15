"use client";
import { createContext, useContext, useState } from "react";

type SearchContextType = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const value = {
    search,
    setSearch,
    category,
    setCategory,
    isSearchModalOpen,
    setIsSearchModalOpen,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
