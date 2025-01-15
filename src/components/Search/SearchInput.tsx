"use client";
import { useRouter } from "next/navigation";
import { useSearch } from "./SearchContext";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import SearchIcon from "./SearchIcon";

const SearchInput = () => {
  const {
    search,
    setSearch,
    category,
    isSearchModalOpen,
    setIsSearchModalOpen,
  } = useSearch();
  const router = useRouter();
  const handleSearch = (router: AppRouterInstance, searchKey: string) => {
    try {
      if (isSearchModalOpen) {
        setIsSearchModalOpen(false);
      }
      router.replace(`/${searchKey}`);
    } catch (error) {
      console.log(error);
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cat = category !== "all" ? `&section=${category}` : "";
      handleSearch(router, `?q=${search}${cat}`);
    }
  };
  return (
    <>
      <SearchIcon
        handler={() => {
          const cat = category !== "all" ? `&section=${category}` : "";
          handleSearch(router, `?q=${search}${cat}`);
        }}
      />
      {/* Divider */}
      <div className="w-[1px] h-full flex bg-gray-400 mx-2" />
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Searching for..."
        className="flex-1 bg-transparent text-sm focus:outline-none"
        onKeyDown={handleKeyPress}
      />
    </>
  );
};

export default SearchInput;
