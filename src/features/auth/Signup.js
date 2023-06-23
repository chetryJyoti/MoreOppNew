/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../auth/Signup.css";
import { signUp } from "../../services/userService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import signupSVG from "../../assets/undrawSignup1.svg";
const Signup = () => {
  const [data, setData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  //handle change
  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  //navigating the use to login page
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  //submitting the form
  const submitForm = (event) => {
    event.preventDefault();
    console.log("Signup_data:", data);
    //data validate client side

    //call api1
    signUp(data)
      .then((r) => {
        console.log(r);
        console.log("success log");
        toast.success("SignUp successfull!", {
          position: "bottom-center",
          autoClose: 500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setData({
          username: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
        });
        setTimeout(() => {
          navigateToLogin();
        }, 1000);
      })
      .catch((error) => {
        console.log("user already exists");
        toast.error("User already exists", {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };
  return (
     <div className="mx-35 p-5 flex items-center gap-10 justify-center ">
      <img className="h-80 mr-10" src={signupSVG} alt="Signup_img" />
      <div className="signup_page ml-6">
        <h1>SignUp</h1>
        <form onSubmit={submitForm}>
          <div className="cont3">
            <label for="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="abc123"
              name="uname"
              required
              onChange={(e) => handleChange(e, "username")}
              value={data.username}
            />
          </div>
          <div className="cont3">
            <label for="fname">
              <b>First Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              name="fname"
              required
              onChange={(e) => handleChange(e, "firstName")}
              value={data.firstName}
            />
          </div>
          <div className="cont3">
            <label for="lname">
              <b>Last Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              name="lname"
              required
              onChange={(e) => handleChange(e, "lastName")}
              value={data.lastName}
            />
          </div>
          <div className="cont3">
            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="xyz@gamil.com"
              name="email"
              required
              onChange={(e) => handleChange(e, "email")}
              value={data.email}
            />
          </div>
          <div className="cont3">
            <label for="pwd">
              <b>PhoneNumber</b>
            </label>
            <input
              type="number"
              placeholder="number"
              name="pnumber"
              required
              onChange={(e) => handleChange(e, "phone")}
              value={data.phone}
            />
          </div>
          <div className="cont3">
            <label for="pwd">
              <b>Set Password</b>
            </label>
            <input
              placeholder="Enter Password"
              name="pwd"
              required
              onChange={(e) => handleChange(e, "password")}
              value={data.password}
            />
          </div>
          <div className="cont4">
            <button type="submit">SignUp</button>
          </div>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        {/* Same as */}
        <ToastContainer />
        <p className="text-center">
          Already have an account ?
          <Link to="/Login" style={{ textDecoration: "none" }}>
            <span className="text-blue-500 ml-2">Login</span>
          </Link>
        </p>
      </div>
    </div>
    
  );
};

export default Signup;
