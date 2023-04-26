import React from "react";
import { Link } from "react-router-dom";
import Banner from "../banner/Banner";
const Home = () => {
  return (
    <div className="mx-35 p-7">
      <Banner />
      <div>
        <h3>Explore:</h3>
        <div className="flex justify-between ">
          <div>Learning Curves</div>
          <div className="border-solid border-2 border-sky-500 rounded-md p-2">
            <Link
              to="/hackathons"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Compete in Hackathons all around the globe
            </Link>
          </div>
          <div>Apply for Scholarhips</div>
          <div>Internships</div>
          <div>Create Resume powered by ChatGpt</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
