import React from 'react';

const Header = ({ onChange }) => (
  <header>
    <div className="container">
      <div id="search">
        <form>
          <input
            id="searchTerm"
            type="text"
            onChange={onChange}
            placeholder="Search by fullname or origin"
          />
        </form>
      </div>
    </div>
  </header>
);

export default Header;