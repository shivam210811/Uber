import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uberlogo from "../assets/uberlogo.png";
import axios from "axios";
import {UserDataContext} from "../context/userContext";


const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [UserData, setUserData] = useState({});


  const navigate = useNavigate();
  const {user, setUser} = React.useContext(UserDataContext)
  const submitHandler = async (e) => {
    e.preventDefault(e);
    const newUser = {
      fullName:{
         firstName:firstName,
        lastName:lastName
      },
      email: email,
      password: password,
     
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
    if(response.status === 201){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)

      navigate('/home')
    }
 
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          src={uberlogo}
          alt="logo"
          className="w-16 mb-5"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">Enter your Name</h3>
          <div className="flex gap-4">
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="bg-[#eeeeee] mb-5 rounded px-4 border w-1/2 text-lg placeholder:text-base py-2 "
              type="text"
              required
              placeholder="First Name"
            />
            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="bg-[#eeeeee] mb-5 rounded px-4 border w-1/2 text-lg placeholder:text-base py-2 "
              type="text"
              required
              placeholder="Last Name"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">Whats your Email</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 border w-full text-lg placeholder:text-base py-2 "
            type="email"
            required
            placeholder="youremail@examole.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter your Password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 border w-full text-lg placeholder:text-base py-2 "
            type="password"
            required
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-bold mb-7 rounded px-4  w-full text-lg placeholder:text-base py-2 ">
            Create Account
          </button>

          <p className="text-center">
           Already have an Account?
            <Link to="/login" className="text-blue-600">
              login here
            </Link>
          </p>
        </form>
      </div>
     <p className="text-[10px] leading-tight">By proceeding to consent to get calls, whatsapp or sms messages, including by automated means from uber and its affiliates to the number provided</p>
    </div>
  );
};

export default UserSignup;
