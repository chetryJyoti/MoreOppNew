import React, { useState, useEffect } from "react";
import Filter from "../../components/filter/Filter";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

const Scholarships = () => {

  const [scholarshipsData, setScholarshipsData] = useState([]); // Scholarships data from API
  const [filteredScholarships, setFilteredScholarships] = useState([]); // Filtered scholarships based on selected filters
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchScholarshipsData = async () => {
    await axios
      .get(process.env.REACT_APP_SCHOLARSHIP_LINK, {
        headers: {
          Authorization: `Bearer ${
            localStorage.getItem("token")
              ? JSON.parse(localStorage.getItem("token"))
              : null
          }`,
        },
      })
      .then((response) => {
        const data = response.data;
        setScholarshipsData(data);
        setFilteredScholarships(data); // Set filtered Internships to all Internships by default
        setIsLoading(false);
        console.log("scholarships:", response.data);
      });
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
      // Apply search query filter
      const searchFilteredData = filteredData.filter((scholarship) => {
        const title = scholarship.title.toLowerCase();
        const description = scholarship.description.toLowerCase();
        const query = searchQuery.toLowerCase();
        return title.includes(query) || description.includes(query);
      });
      setFilteredScholarships(searchFilteredData); // Set filtered scholarships to state
    }
  };
  const handleSearch = () => {
    const filteredData = scholarshipsData.filter((scholarship) =>
      scholarship.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredScholarships(filteredData);
  };
  return (
    <div className="mx-35 p-7 ">
      <div className="flex">
        <div className="border-4 border-solid border-gray-200 rounded-md w-full mb-2 mr-1">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 rounded-md focus:outline-none focus:border-gray-400 focus:ring-gray-500 focus:ring-1"
          />
        </div>

        <button onClick={handleSearch} className="rounded-md h-11 ">
          Search
        </button>
      </div>
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

        <div className="w-full  ml-2 h-full ">
          {isLoading && (
            <div className="flex text-center items-center justify-center">
              <ClipLoader
                size={28}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              Loading...
            </div>
          )}

          {!isLoading &&
            filteredScholarships.map((scholarship) => (
              <div className="flex justify-center gap-4 items-center border-solid border-4 border-black-300 rounded-lg mb-3 p-3">
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
