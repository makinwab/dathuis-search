import React from 'react';
import './Header.css';

const Header = ({ onChange }) => (
  <header>
    <div className="container">
      <div id="search">
        <form>
          <input
            id="searchTerm"
            type="text"
            onChange={onChange}
            placeholder="Search by Fullname or Origin"
          />
        </form>
      </div>
    </div>
  </header>
);

export default Header;