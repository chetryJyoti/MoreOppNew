import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Banner from "../banner/Banner";
const Home = () => {
  return (
    <div className="container">
      <div className="home_con">
        <Banner />
        <div className="home_body">
          <h3>Explore:</h3>
          <div className="home_body_item">
            <div>Learning Curves</div>
            <div>
              <Link
                to="/hackathons"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Compete in Hackathons
              </Link>
            </div>
            <div>Apply for Scholarhips</div>
            <div>Internships</div>
            <div>Create Resume powered by ChatGpt</div>
            <h1 className="text-3xl font-bold underline bg-green">Hello world!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
