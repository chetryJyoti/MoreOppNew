import React, { useState } from "react";
import "./filter.css";

const Filter = ({ filters, onChange }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

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
  };
  return (
    <div className="filter_con">
      <h4>Filter</h4>
      <div>
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
        <button onClick={clearAllFilters}>Clear All Filters</button>
        <button onClick={() => onChange(selectedFilters)}>Apply Filters</button>
      </div>
    </div>
  );
};

export default Filter;
