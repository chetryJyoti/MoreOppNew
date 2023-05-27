import React, { useState, useEffect } from "react";
import Filter from "../../components/filter/Filter";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

const Hackathons = () => {
  const HACKATHON_URL = "http://localhost:8090/hackathons/";

  const [hackathonsData, setHackathonsData] = useState([]); // Hackathons data from API
  const [filteredHackathons, setFilteredHackathons] = useState([]); // Filtered hackathons based on selected filters
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchHackathonsData = async () => {
    await axios
      .get(HACKATHON_URL, {
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
        console.log("data:", data);
        setHackathonsData(data);
        setFilteredHackathons(data); // Set filtered hackathons to all hackathons by default
        setIsLoading(false);
        console.log("hackathons:", response.data);
      });
  };

  useEffect(() => {
    fetchHackathonsData(); // Fetch hackathons data when the component mounts
  }, []);

  const handleFilterChange = (selectedFilters) => {
    // Filter hackathons based on selected filters and search query
    if (selectedFilters.length === 0 && searchQuery === "") {
      setFilteredHackathons(hackathonsData);
    } else {
      const filteredData = hackathonsData.filter((hackathon) => {
        // Customize the condition based on your filter criteria
        return (
          selectedFilters.includes(hackathon.status) ||
          selectedFilters.includes(hackathon.eligibility) ||
          selectedFilters.includes(hackathon.location)
        );
      });

      // Apply search query filter
      const searchFilteredData = filteredData.filter((hackathon) => {
        const title = hackathon.title.toLowerCase();
        const description = hackathon.description.toLowerCase();
        const query = searchQuery.toLowerCase();
        return title.includes(query) || description.includes(query);
      });

      setFilteredHackathons(searchFilteredData); // Set filtered hackathons to state
    }
  };
  const handleSearch = () => {
    const filteredData = hackathonsData.filter((hackathon) =>
      hackathon.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredHackathons(filteredData);
  };

  return (
    <div className="mx-35 p-7">
      <div className="flex">
        <div
          className="border-4 border-solid border-gray-200 rounded-md w-full mb-2 mr-1"
        >
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
              { value: "Active", label: "Live" },
              { value: "Btech", label: "Btech" },
              { value: "M tech", label: "Mtech" },
              { value: "Ungergrade", label: "Undergrad" },
              { value: "location", label: "Location 1" },
            ]}
            onChange={handleFilterChange}
          />
        </div>

        <div className="w-full border-solid  border-black-300 rounded-lg ml-2 h-full ">
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
            filteredHackathons.map((hackathon) => (
              <div
                key={hackathon.hId}
                className="flex gap-4 items-center border-solid border-4 border-black-300 mb-3 p-3 rounded-md"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={hackathon.bannerImgLink}
                    alt={hackathon.title}
                    className="w-80 object-cover max-w-full"
                  />
                </div>

                <div>
                  <h1 className="text-2xl">{hackathon.title}</h1>
                  <p>{hackathon.description}</p>
                  <p>
                    <span className="text-blue-400">Eligibility: </span>
                    {hackathon.eligibility}
                  </p>
                  <p>
                    <span className="text-blue-400">Status: </span>
                    {hackathon.active ? "Active" : "Inactive"}
                  </p>
                  <p>
                    <span className="text-red-400">Register Before: </span>{" "}
                    {hackathon.lastDayToRegister}
                  </p>
                  <div className="mt-2">
                    <a
                      href={hackathon.linkToRegister}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-solid border-2  border-blue-300  rounded-md p-1"
                    >
                      Register
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

export default Hackathons;
