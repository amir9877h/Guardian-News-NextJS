"use client";
import { useRouter } from "next/navigation";
import { useSearch } from "./SearchContext";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const SearchInput = () => {
  const { search, setSearch, category } = useSearch();
  const router = useRouter();
  const handleSearch = (router: AppRouterInstance, searchKey: string) => {
    try {
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
      <svg
        className="cursor-pointer w-6 h-6 text-gray-500 dark:text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => {
          const cat = category !== "all" ? `&section=${category}` : "";
          handleSearch(router, `?q=${search}${cat}`);
        }}
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
