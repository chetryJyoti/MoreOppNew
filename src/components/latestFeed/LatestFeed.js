import React from "react";

const LatestFeed = ({ titleType, title, desc, registerLink, coverImg }) => {
  return (
    <div className="flex justify-between">
      <a href={registerLink} target="_blank" rel="noopener noreferrer">
        <div
          className="bg-blue-100 rounded-lg shadow-lg p-6 relative"
          style={{
            width: "400px",
            height: "200px",
            backgroundImage: `url(${coverImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </a>
    </div>
  );
};

export default LatestFeed;
