import React, { useEffect, useState } from "react";

const FilterSortComponent = ({
  data,
  filterOptions,
  onFilter,
  setFilterOption,
  filterOption,
  filterValue,
  setFilterValue,
}) => {
  const handleFilterOptionChange = (e) => {
    const { value } = e.target;
    setFilterOption(value); // Update filterOption state
    onFilter(value);
  };

  const handleFilterValueChange = (e) => {
    const { value } = e.target;
    setFilterValue(value);
    onFilter(value);
  };

  useEffect(() => {
    // Remove the duplicated useEffect logic here, it's unnecessary
  }, [filterOption]); // You only need to depend on filterOption

  return (
    <div className="flex items-center gap-5  p-4">
      <div>
        <select
          value={filterOption}
          onChange={handleFilterOptionChange}
          className="px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
        >
          {/* <option value="">Filter by</option> */}
          {filterOptions?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {filterOption === "Company" && (
        <div>
          <input
            type="text"
            value={filterValue}
            onChange={handleFilterValueChange}
            placeholder="Search by company..."
            className="px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
          />
        </div>
      )}
    </div>
  );
};

export default FilterSortComponent;
