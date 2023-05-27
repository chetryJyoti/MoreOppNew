import React, { useState } from "react";

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
            <label className="flex gap-2 items-center">
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
      <div className="flex gap-1">
        <button
          className="mb-1 w-26"
          onClick={() => onChange(selectedFilters, selectedEligibilities)}
        >
          Apply
        </button>
        <button onClick={clearAllFilters} className="w-24">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filter;
