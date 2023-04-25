import React, { useState } from "react";
import "./filter.css";

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
    <div className="filter_con">
      <div>
        <h4>Filters</h4>
        <ul>
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
        <button onClick={clearAllFilters}>Clear All Filters</button>
        <button
          onClick={() => onChange(selectedFilters, selectedEligibilities)}
        >
          Apply Filters
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default Filter;
