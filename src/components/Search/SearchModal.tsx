import React from "react";
import Search from ".";

const SearchModal = ({ toggleSearchModal, isSearchOpen }) => {
  return (
    <>
      {isSearchOpen && (
        <div
          onClick={toggleSearchModal}
          className={`flex justify-center pt-16 w-full h-full fixed top-0 left-0 bg-gray-900 bg-opacity-80`}
        >
          <Search className={"h-[80px]"} />
        </div>
      )}
    </>
  );
};

export default SearchModal;
