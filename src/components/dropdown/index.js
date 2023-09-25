// src/Dropdown.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ options, tag }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left hover:text-blue-600">
      <button
        onClick={toggleDropdown}
        className="bg-white text-gray-700 px-4 py-2 rounded-sm border border-gray-400 hover:border-blue-600
        hover:text-blue-600"
      >
        {selectedOption ? selectedOption.label : tag}
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="ml-2 hover:text-blue-600"
        />
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 py-2 bg-white border rounded shadow-lg">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
