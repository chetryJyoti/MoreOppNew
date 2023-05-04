import React, { useState, useEffect } from "react";
import Filter from "../../components/filter/Filter";
import ClipLoader from "react-spinners/ClipLoader";
const Hackathons = () => {
  const HACKATHON_URL = "http://localhost:8090/hackathons/";
  // const HACKATHON_URL = process.env.HACKATHON_URL;
  const [hackathonsData, setHackathonsData] = useState([]); // Hackathons data from API
  const [filteredHackathons, setFilteredHackathons] = useState([]); // Filtered hackathons based on selected filters
  const [isLoading, setIsLoading] = useState(true);

  const fetchHackathonsData = async () => {
    try {
      const response = await fetch(HACKATHON_URL);
      const data = await response.json();
      console.log("data:", data);
      setHackathonsData(data);
      setFilteredHackathons(data); // Set filtered hackathons to all hackathons by default
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch hackathons data:", error);
    }
  };

  useEffect(() => {
    fetchHackathonsData(); // Fetch hackathons data when the component mounts
  }, []);
  const handleFilterChange = (selectedFilters) => {
    // Filter hackathons based on selected filters, or show all hackathons if no filters selected
    if (selectedFilters.length === 0) {
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
      setFilteredHackathons(filteredData); // Set filtered hackathons to state
    }
  };
  return (
    <div className="mx-35 p-7 ">
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

        <div className="w-full border-solid border-4 border-black-300 rounded-lg ml-2 h-full ">
          {isLoading && (
            <div className="flex text-center items-center justify-center">
              <ClipLoader
                size={28}
                aria-label="Loading Spinner"
                data-testid="loader"
                />
                 Loding...
            </div>
          )}

          {!isLoading &&
            filteredHackathons.map((hackathon) => (
              <div key={hackathon.hId} className="flex gap-4 items-center border-solid border-b-4 border-black-300 mb-3 p-3">
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
                  <p>Eligibility: {hackathon.eligibility}</p>
                  <p>Status: {hackathon.active ? "Active" : "Inactive"}</p>
                  <p>Last day to register: {hackathon.lastDayToRegister}</p>
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
