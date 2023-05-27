import React, { useState, useEffect,} from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../../components/popup/Popup";

const Profile = () => {
  const [showEducationPopup, setShowEducationPopup] = useState(false);
  const [education, setEducation] = useState("");
  const [displayEducation, setDisplayEducation] = useState("");

  const [showSkillsPopup, setShowSkillsPopup] = useState(false);
  const [skills, setSkills] = useState("");
  const [displaySkills, setDisplaySkills] = useState("");

  const [showExperience, setShowExperience] = useState(false);
  const [experience, setExperience] = useState("");
  const [displayExperience, setDisplayExperience] = useState("");

  const [showProject, setShowProject] = useState(false);
  const [projects, setProjects] = useState("");
  const [displayProjects, setDipslayProjects] = useState("");

  //
  const SaveAll = () => {
    const data = {
      education: education,
      skills: skills,
      experience: experience,
      projects: projects,
    };
    console.log("savedData:", data);
  };
  // For Education
  const handleSaveEducation = () => {
    setShowEducationPopup(false);
    console.log("Education value:", education);
    setDisplayEducation(education || "");
  };

  const handleCancelEducation = () => {
    setShowEducationPopup(false);
    setEducation("");
  };

  // For Skills
  const handleSaveSkills = () => {
    setShowSkillsPopup(false);
    console.log("Skills value:", skills);
    setDisplaySkills(skills || "");
  };

  const handleCancelSkills = () => {
    setShowSkillsPopup(false);
    setSkills("");
  };

  // For Experience
  const handleSaveExperiences = () => {
    setShowExperience(false);
    console.log("Experiences value", experience);
    setDisplayExperience(experience || "");
  };

  const handleCancelExperiences = () => {
    setShowExperience(false);
    setExperience("");
  };

  // For Projects
  const handleSaveProjects = () => {
    setShowProject(false);
    console.log("Projects value", projects);
    setDipslayProjects(projects || "");
  };

  const handleCancelProjects = () => {
    setShowProject(false);
    setProjects("");
  };

  const checkPopUpOnOff = (value) => {
    if (value === "edu") {
      setShowEducationPopup(true);
      setShowSkillsPopup(false);
      setShowExperience(false);
      setShowProject(false);
    } else if (value === "skill") {
      setShowEducationPopup(false);
      setShowSkillsPopup(true);
      setShowExperience(false);
      setShowProject(false);
    } else if (value === "exp") {
      setShowEducationPopup(false);
      setShowSkillsPopup(false);
      setShowExperience(true);
      setShowProject(false);
    } else {
      setShowEducationPopup(false);
      setShowSkillsPopup(false);
      setShowExperience(false);
      setShowProject(true);
    }
  };

  const initializeState = () => {
    console.log("i:", JSON.parse(localStorage.getItem("user")));
    return JSON.parse(localStorage.getItem("user")) ?? 0;
  };
  const [userDetail, setuserDetail] = useState(initializeState());

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setuserDetail(user);
    }
  }, []);

  const navigate = useNavigate();
  const doLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate('/login');
  };



  return (
    <div className="h-full w-full">
      <div className="flex mt-5 ml-7">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-center')">
          <img
            src="https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="w-full h-full object-cover"
            alt="Profile"
          />
        </div>

        <div>
          {" "}
          <h1 className="mt-7 ml-5 font-bold text-xl">
            {" "}
            {userDetail.firstName} {userDetail.lastName}
          </h1>
        </div>
      </div>
      <div className="h-full w-full  p-9 space-y-5">
        <div>
          <form className="h-24 border-solid border-2 border-sky-200 rounded-lg flex justify-between">
            <h1 className="ml-2 text-xl">Education:</h1>
            <div className="flex w-full ">
              <h5 className="p-1">{displayEducation}</h5>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-2 mt-1 w-6 h-6"
              onClick={() => checkPopUpOnOff("edu")}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </form>
          {showEducationPopup && (
            <Popup
              title="Add Education"
              onChange={(e) => setEducation(e.target.value)}
              onCancel={handleCancelEducation}
              onSave={handleSaveEducation}
            />
          )}
        </div>

        <div>
          <form className="h-20 border-solid border-2 border-sky-600 rounded-lg flex justify-between">
            <h1 className="ml-2 text-xl">Skills:</h1>
            <div className="flex w-full">
              <h5 className="p-1">{displaySkills}</h5>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-2 mt-1 w-6 h-6"
              onClick={() => checkPopUpOnOff("skill")}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </form>
          {showSkillsPopup && (
            <Popup
              title="Add Skills"
              onChange={(e) => setSkills(e.target.value)}
              onCancel={handleCancelSkills}
              onSave={handleSaveSkills}
            />
          )}
        </div>
        <div>
          <form className="h-20 border-solid border-2 border-sky-600 rounded-lg flex justify-between">
            <h1 className="ml-2 text-xl">Experience:</h1>
            <div className="flex w-full">
              <h5 className="p-1">{displayExperience}</h5>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-2 mt-1 w-6 h-6"
              onClick={() => checkPopUpOnOff("exp")}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </form>
          {showExperience && (
            <Popup
              title="Add Expreiences"
              onChange={(e) => setExperience(e.target.value)}
              onCancel={handleCancelExperiences}
              onSave={handleSaveExperiences}
            />
          )}
        </div>
        <div>
          <form className="h-20 border-solid border-2 border-sky-600 rounded-lg flex justify-between">
            <h1 className="ml-2 text-xl">Project:</h1>
            <div className="flex w-full">
              <h5 className="p-1">{displayProjects}</h5>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-2 mt-1 w-6 h-6"
              onClick={() => checkPopUpOnOff()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </form>
          {showProject && (
            <Popup
              title="Add Projects"
              onChange={(e) => setProjects(e.target.value)}
              onCancel={handleCancelProjects}
              onSave={handleSaveProjects}
            />
          )}
        </div>
      </div>
      <div className="flex justify-around w-full h-full">
        <button
          className="justify-center h-12 w-24 bg-sky-600 rounded-lg text-white hover:bg-sky-700 active:bg-sky-800 focus:outline-none focus:ring focus:ring-violet-300"
          onClick={SaveAll}
        >
          Save
        </button>
        <button onClick={doLogout} className="m-0 p-0 ">Logout</button>
      </div>
    </div>
  );
};

export default Profile;
