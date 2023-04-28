import React from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Hackathons from "./features/hackathons/Hackathons";
import Internships from "./features/internships/Internships";
import Scholarships from "./features/scholarships/Scholarships";
import Signup from "./features/auth/Signup";
import Profile from "./features/profile/Profile"
const App = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </>
  );
};

export default App;
