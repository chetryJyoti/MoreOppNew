import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./navStyles.css";
const Navbar = () => {
  const CustomLink = ({ to, children, ...props }) => {
    const resolvePath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvePath.pathname, end: true });
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  };

  return (
    <nav className="nav ">
      <Link to="/" className="site-title">
        Know Opportunities
      </Link>
      <ul>
        <CustomLink to="/hackathons">Hackathons</CustomLink>
        <CustomLink to="/scholarships">Scholarships</CustomLink>
        <CustomLink to="/internships">Internships</CustomLink>
        <CustomLink to="/about">AboutUs</CustomLink>
        <CustomLink to="/signup">Signup</CustomLink>
      </ul>
    </nav>
  );
};

export default Navbar;
