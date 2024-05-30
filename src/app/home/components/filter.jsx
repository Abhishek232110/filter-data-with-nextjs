import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const FilterData = ({ onQueryChange }) => {
  const [searchQuery, setSearchQuery] = useState();

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onQueryChange(query);
  };

  return (
    <div className="w-full flex justify-center items-center my-2 ">
      <div className="flex items-center justify-center ring-1 ring-zinc-500 focus:ring-indigo-500 rounded-sm bg-white px-1">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="outline-none   w-fit py-1 pl-2"
        />
        <CiSearch fontSize={30} />
      </div>
    </div>
  );
};

export default FilterData;
