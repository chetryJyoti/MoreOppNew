import React, { useState, useEffect } from "react";
import Filter from "../../components/filter/Filter";

const Scholarships = () => {
  const SCHOLARSHIP_URL = "http://localhost:8090/scholarships/";
  const [scholarshipsData, setScholarshipsData] = useState([]); // Scholarships data from API
  const [filteredScholarships, setFilteredScholarships] = useState([]); // Filtered scholarships based on selected filters

  const fetchScholarshipsData = async () => {
    // Fetch scholarships data from API and set it to scholarshipsData state
    try {
      const response = await fetch(SCHOLARSHIP_URL); // Replace with your API endpoint
      const data = await response.json();
      console.log("data:", data);
      setScholarshipsData(data);
      setFilteredScholarships(data); // Set filtered scholarships to all scholarships by default
    } catch (error) {
      console.error("Failed to fetch scholarships data:", error);
    }
  };
  useEffect(() => {
    fetchScholarshipsData(); // Fetch scholarships data when the component mounts
  }, []);
  const handleFilterChange = (selectedFilters) => {
    // Filter scholarships based on selected filters, or show all scholarships if no filters selected
    if (selectedFilters.length === 0) {
      setFilteredScholarships(scholarshipsData);
    } else {
      const filteredData = scholarshipsData.filter((scholarship) => {
        // Customize the condition based on your filter criteria
        return (
          selectedFilters.includes(scholarship.field) ||
          selectedFilters.includes(scholarship.degree) ||
          selectedFilters.includes(scholarship.location)
        );
      });
      setFilteredScholarships(filteredData); // Set filtered scholarships to state
    }
  };
  return (
    <div className="mx-35 p-7 ">
      <div className="flex">
        <div className="w-100 h-full sticky top-14">
          <Filter
            filters={[
              { value: "merit", label: "Merit-based" },
              { value: "need", label: "Need-based" },
              { value: "location", label: "Location 1" },
            ]}
            onChange={handleFilterChange}
          />
        </div>
        <div className="w-full border-solid border-4 border-black-300 rounded-lg ml-2 h-full ">
          {filteredScholarships.map((scholarship) => (
            <div className="flex justify-center gap-4 items-center border-solid border-b-4 border-black-300 mb-3 p-3">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={scholarship.imageLink}
                  alt={scholarship.title}
                  className="w-80 object-cover max-w-full"
                />
              </div>

              <div>
                <h1 className="text-2xl">{scholarship.title}</h1>
                <p>{scholarship.description}</p>
                <p>Type: {scholarship.type}</p>
                <p>Eligibility: {scholarship.eligibility}</p>
                <p>Deadline: {scholarship.deadline}</p>
                <div className="mt-2">
                  <a
                    href={scholarship.applicationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-solid border-2  border-blue-300  rounded-md p-1"
                  >
                    Apply
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
