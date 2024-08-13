import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query); // Call the onSearch function passed as a prop
  };

  return (
    <div className="my-8 flex justify-center">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search City or Location"
        className="w-3/4 p-4 rounded-full shadow-md p-4 rounded-full shadow-md bg-white text-gray-800"
      />
    </div>
  );
}

export default SearchBar;
