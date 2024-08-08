import React, { useState } from 'react';
import axios from 'axios';

function Search({ onResults }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`/api/search?q=${query}`)
      .then(res => onResults(res.data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
