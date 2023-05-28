import React from "react";
import { Link } from "react-router-dom";
import Banner from "../banner/Banner";
const Home = () => {
  return (
    <div className="mx-35 p-7">
      <Banner />
      <div className="mt-3">
        <h3 className="text-xl mb-2">Explore:</h3>
        <div className="flex justify-between ">
          {/* <div className="border-solid border-2 border-sky-500 rounded-md p-2">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Learning Curves
            </Link>
          </div> */}
          <div className="border-solid border-2 border-sky-500 rounded-md p-2">
            <Link
              to="/hackathons"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Compete in Hackathons
            </Link>
          </div>
          <div className="border-solid border-2 border-sky-500 rounded-md p-2">
            <Link
              to="/scholarships"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Apply for Scholarhips
            </Link>
          </div>
          <div className="border-solid border-2 border-sky-500 rounded-md p-2">
            <Link
              to="/internships"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Internships
            </Link>
          </div>
          <div className="border-solid border-2 border-sky-500 rounded-md p-2">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Create Resume powered by ChatGpt
            </Link>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Home;
