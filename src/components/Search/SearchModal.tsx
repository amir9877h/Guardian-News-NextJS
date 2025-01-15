import React from "react";
import Search from ".";

const SearchModal = ({ toggleSearchModal, isSearchOpen }) => {
  return (
    <>
      {isSearchOpen && (
        <>
          <div
            onClick={toggleSearchModal}
            className={`flex justify-center pt-16 w-full h-full fixed top-0 left-0 bg-gray-900 bg-opacity-80`}
          ></div>
          <Search
            className={"h-[80px] mx-auto !right-0 !left-0 !z-50 absolute"}
          />
        </>
      )}
    </>
  );
};

export default SearchModal;
