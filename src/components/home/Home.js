import React from "react";
import { Link } from "react-router-dom";
import Banner from "../banner/Banner";
import LatestFeed from "../latestFeed/LatestFeed";
const Home = () => {
  return (
    <div className="mx-35 p-7">
      <Banner />
      <div className="mt-3">
        <h3 className="text-xl mb-2">Explore:</h3>
        <div className="grid grid-cols-4 gap-1 ">
          <div className=" border-2 border-blue-200 hover:bg-blue-400 text-black hover:text-white px-4 py-2 rounded ">
            <Link
              to="/hackathons"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Compete in Hackathons
            </Link>
          </div>
          <div className=" border-2 border-blue-200 hover:bg-blue-400 text-black hover:text-white px-4 py-2 rounded ">
            <Link
              to="/scholarships"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Apply for Scholarhips
            </Link>
          </div>
          <div className=" border-2 border-blue-200 hover:bg-blue-400 text-black hover:text-white px-4 py-2 rounded ">
            <Link
              to="/internships"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Internships
            </Link>
          </div>
          <div className=" border-2 border-blue-200 hover:bg-blue-400 text-black hover:text-white px-4 py-2 rounded ">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Create Resume
            </Link>
          </div>
        </div>

        {/* latest opportunites section */}
        <div>
          <div className="my-5"><h3 className="text-xl">Latest and upcomming HACKATHONS</h3></div>
          <div className="flex flex-wrap ">
            <div className="w-1/3 mb-3">
              <LatestFeed
                titleType="Hackathon"
                title="1Password Hackathon"
                desc="Unleash your potential and make a lasting impact in the open-source world by participating in this hackathon2."
                registerLink="https://hashnode.com/hackathons/1password"
                coverImg="https://blog.1password.com/posts/2023/2023-1password-hashnode-hackathon/header.png"
              />
            </div>
            <div className="w-1/3 mb-3">
              <LatestFeed
                registerLink="https://hashnode.com/hackathons/appwrite"
                coverImg="https://cdn.hashnode.com/res/hashnode/image/upload/v1683863785104/ZxY0JVG0R.png?auto=format"
              />
            </div>

            <div className="w-1/3 mb-3">
              <LatestFeed
                registerLink="https://devfolio.co/hackathons"
                coverImg="https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fcontent%2Fa1f504bee74b4f19be305d409aa4fc16%2F630b3009-0ad9-407c-acc8-7eec7c928347.png&w=1440&q=75"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="my-5">
            <h2 className="text-xl">Latest INTERNSHIP opportunites </h2>
          </div>
          <div className="flex flex-wrap ">
            <div className="w-1/3 mb-3">
              <LatestFeed
                titleType="Hackathon"
                title="1Password Hackathon"
                desc="Unleash your potential and make a lasting impact in the open-source world by participating in this hackathon2."
                registerLink="https://hashnode.com/hackathons/1password"
                coverImg="https://blog.1password.com/posts/2023/2023-1password-hashnode-hackathon/header.png"
              />
            </div>
            <div className="w-1/3 mb-3">
              <LatestFeed
                registerLink="https://hashnode.com/hackathons/appwrite"
                coverImg="https://cdn.hashnode.com/res/hashnode/image/upload/v1683863785104/ZxY0JVG0R.png?auto=format"
              />
            </div>

            <div className="w-1/3 mb-3">
              <LatestFeed
                registerLink="https://devfolio.co/hackathons"
                coverImg="https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fcontent%2Fa1f504bee74b4f19be305d409aa4fc16%2F630b3009-0ad9-407c-acc8-7eec7c928347.png&w=1440&q=75"
              />
            </div>
            <div className="w-1/3 mb-3">
              <LatestFeed registerLink="https://1password.com" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
