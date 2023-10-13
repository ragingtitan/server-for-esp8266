import React from 'react';


export default function DropdownButton() {
    

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        Dropdown
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="/">Item 1</a>
          <a href="/">Item 2</a>
          <a href="/">Item 3</a>
        </div>
      )}
    </div>
  );
}

