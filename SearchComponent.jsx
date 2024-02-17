// SearchComponent.js
import React from 'react';

function SearchComponent({ searchCourse, courseSearchUserFunction, inputRef }) {
  return (
    <header className="App-header">
      <h1>Shopping Cart</h1>
      <div className="search-bar" ref={inputRef}> {/* Assign the ref to the search bar div */}
        <input
          type="text"
          placeholder="Search for Products..."
          value={searchCourse}
          onChange={courseSearchUserFunction}
        />
      </div>
    </header>
  );
}

export default SearchComponent;
