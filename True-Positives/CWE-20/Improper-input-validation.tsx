import React, { useState } from 'react';

const SearchComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    const url = `https://example.com/search?query=${searchQuery}`; // Potentially unsafe URL construction
    window.location.href = url; // Redirect based on user input
  };

  return (
    <div>
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchComponent;
