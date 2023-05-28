import React, { useEffect, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./navStyles.css";
import { getCurrentUserName } from "../../features/auth/authService";
const Navbar = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    setTimeout(() => {
      const userFound = getCurrentUserName();
      if (userFound != null) {
        setUser(userFound);
      }else{
        setUser(null)
      }
    }, 100);
  }, []);
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
      <Link to="/home" className="site-title">
        Know Opportunities
      </Link>
      <ul>
        <CustomLink to="/hackathons">Hackathons</CustomLink>
        <CustomLink to="/scholarships">Scholarships</CustomLink>
        <CustomLink to="/internships">Internships</CustomLink>
        <CustomLink to="/about">AboutUs</CustomLink>
        {/* we dont have user */}
        {user == null && (
          <div className="flex gap-3">
            <CustomLink to="/">Signup</CustomLink>
            <CustomLink to="/login">Login</CustomLink>
          </div>
        )}

        {/* we have user */}
        {user !== null && (
          <div className="flex" >
            <CustomLink to="/profile">Profile</CustomLink>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
