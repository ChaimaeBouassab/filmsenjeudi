// Filter.js
import React from 'react';

function Filter({ handleFilter, filterTitle, filterRating }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by Title"
        value={filterTitle}
        onChange={(e) => handleFilter(e.target.value, filterRating)}
      />
      <select
        value={filterRating}
        onChange={(e) => handleFilter(filterTitle, e.target.value)}
      >
        <option value="">Filter by Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}

export default Filter;
