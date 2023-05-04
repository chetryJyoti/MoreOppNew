import React, { useState, useEffect } from "react";
import Filter from "../../components/filter/Filter";

const Internships = () => {
  const INTERNSHIP_URL = "http://localhost:8090/internships/";
  const [InternshipsData, setInternshipsData] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);

  const fetchInternshipsData = async () => {
    try {
      const response = await fetch(INTERNSHIP_URL);
      const data = await response.json();
      console.log("data:", data);
      setInternshipsData(data);
      setFilteredInternships(data); // Set filtered Internships to all Internships by default
    } catch (error) {
      console.error("Failed to fetch Internships data:", error);
    }
  };

  useEffect(() => {
    fetchInternshipsData(); // Fetch Internships data when the component mounts
  }, []);
  const handleFilterChange = (selectedFilters) => {
    // Filter Internships based on selected filters, or show all Internships if no filters selected
    if (selectedFilters.length === 0) {
      setFilteredInternships(InternshipsData);
    } else {
      const filteredData = InternshipsData.filter((Internship) => {
        // Customize the condition based on your filter criteria
        return (
          selectedFilters.includes(Internship.status) ||
          selectedFilters.includes(Internship.eligibility) ||
          selectedFilters.includes(Internship.location) ||
          selectedFilters.includes(Internship.workLocation)
        );
      });
      setFilteredInternships(filteredData); // Set filtered Internships to state
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
              { value: "Mtech", label: "Mtech" },
              // { value: "stipend", label: "Stipend" },
              { value: "WFO", label: "WFO" },
              { value: "OFFICE", label: "OFFICE" },
            ]}
            onChange={handleFilterChange}
          />
        </div>

        <div className="w-full border-solid border-4 border-black-300 rounded-lg ml-2 h-full ">
          {filteredInternships.map((Internship) => (
            <div
              key={Internship.inId}
              className="flex  gap-4 items-center border-solid border-b-4 border-black-300 mb-3 p-3"
            >
              <div className="w-70 h-44">
                <img
                  src={Internship.bannerImgLink}
                  alt={Internship.internshipTitle}
                  className="object-cover w-full h-full rounded-lg "
                />
              </div>

              <div>
                <h1 className="text-2xl">{Internship.internshipTitle}</h1>
                {/* <p>{Internship.description}</p> */}
                <p>
                  <strong>Eligibility: </strong> {Internship.eligibility}
                </p>
                <p><strong className="text-green-400">Status: </strong>{Internship.active ? "Active" : "Inactive"}</p>
                <p><strong>Register Before:</strong> {Internship.lastDayToRegister}</p>
                <p><strong>Stipend:</strong> {Internship.stipend}</p>
                <p><strong>WorkLocation:</strong> {Internship.workLocation}</p>
                <div className="mt-2">
                  <a
                    href={Internship.linkToRegister}
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

export default Internships;
