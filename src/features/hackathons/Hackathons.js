import React, { useState, useEffect } from "react";
import Filter from "../../components/filter/Filter";
import "./hackathon.css";
const Hackathons = () => {
  const HACKATHON_URL = "http://localhost:8090/hackathons/";
  const [hackathonsData, setHackathonsData] = useState([]); // Hackathons data from API
  const [filteredHackathons, setFilteredHackathons] = useState([]); // Filtered hackathons based on selected filters

  const fetchHackathonsData = async () => {
    // Fetch hackathons data from API and set it to hackathonsData state
    try {
      const response = await fetch(HACKATHON_URL); // Replace with your API endpoint
      const data = await response.json();
      console.log("data:", data);
      setHackathonsData(data);
      setFilteredHackathons(data); // Set filtered hackathons to all hackathons by default
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
    <div className="container">
      <div className="common_container">
        <Filter
          filters={[
            { value: "Active", label: "Live" },
            { value: "Btech", label: "Btech" },
            { value: "Ungergrade", label: "Undergrad" },
            { value: "location", label: "Location 1" },
          ]}
          onChange={handleFilterChange}
        />
        <div className="common_con-item">
          {filteredHackathons.map((hackathon) => (
            <div className="card">
              <img src={hackathon.bannerImgLink} alt={hackathon.title} />
              <div>
                <h2>{hackathon.title}</h2>
                <p>{hackathon.description}</p>
                <p>Eligibility: {hackathon.eligibility}</p>
                <p>Status: {hackathon.active ? "Active" : "Inactive"}</p>
                <p>Last day to register: {hackathon.lastDayToRegister}</p>
                <a
                  href={hackathon.linkToRegister}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hackathons;
