import React, { useState } from "react";
// import "./filter.css";

const Filter = ({ filters, onChange }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedEligibilities, setSelectedEligibilities] = useState([]);

  const handleFilterChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedFilters([...selectedFilters, value]);
    } else {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== value));
    }
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
    setSelectedEligibilities([]);
  };

  return (
    <div className="border-solid border-4 border-black-300 rounded-lg w-full h-full p-3">
      <h2 className="text-2xl">Filters</h2>
      <ul className="py-2">
        {filters.map((filter) => (
          <li key={filter.value}>
            <label>
              <input
                type="checkbox"
                value={filter.value}
                checked={selectedFilters.includes(filter.value)}
                onChange={handleFilterChange}
              />
              {filter.label}
            </label>
          </li>
        ))}
      </ul>
      <div className="filter_btns">
        <button
          className="border-solid border-2 border-black px-2 rounded-md mb-1"
          onClick={() => onChange(selectedFilters, selectedEligibilities)}
        >
          Apply Filters
        </button>
        <button
          className="border-solid border-2 border-black px-2 rounded-md "
          onClick={clearAllFilters}
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
