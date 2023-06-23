import React, { useState, useEffect } from "react";
import Filter from "../../components/filter/Filter";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

const Internships = () => {
  const [InternshipsData, setInternshipsData] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchInternshipsData = async () => {
    await axios
      .get(process.env.REACT_APP_INTERNSHIP_LINK, {
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
        setInternshipsData(data);
        setFilteredInternships(data); // Set filtered Internships to all Internships by default
        setIsLoading(false);
        console.log("internships:", response.data);
      });
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
      // Apply search query filter
      const searchFilteredData = filteredData.filter((Internship) => {
        const title = Internship.internshipTitle.toLowerCase();
        const description = Internship.description.toLowerCase();
        const query = searchQuery.toLowerCase();
        return title.includes(query) || description.includes(query);
      });
      setFilteredInternships(searchFilteredData); // Set filtered Internships to state
    }
  };
  const handleSearch = () => {
    const filteredData = InternshipsData.filter((Internship) =>
      Internship.internshipTitle
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setFilteredInternships(filteredData);
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

        <div className="w-full rounded-lg ml-2 h-full ">
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
            filteredInternships.map((Internship) => (
              <div
                key={Internship.inId}
                className="flex  gap-4 items-center border-solid border-4 border-black-300 mb-3 p-3 rounded-lg"
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
                  <p>
                    <strong className="text-green-400">Status: </strong>
                    {Internship.active ? "Active" : "Inactive"}
                  </p>
                  <p>
                    <strong>Register Before:</strong>{" "}
                    {Internship.lastDayToRegister}
                  </p>
                  <p>
                    <strong>Stipend:</strong> {Internship.stipend}
                  </p>
                  <p>
                    <strong>WorkLocation:</strong> {Internship.workLocation}
                  </p>
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
