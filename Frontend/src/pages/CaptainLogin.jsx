import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
import axios from 'axios';
import { CaptainDataContext } from "../context/captainContext";


const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {captain, setCaptain}= React.useContext(CaptainDataContext);
  const navigate = useNavigate();

 const submitHandler = async (e) => {
  e.preventDefault();

  const captain = {
    email,
    password,
  };

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captain
    );

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }
  } catch (error) {
    const msg = error.response?.data?.message || "Login failed. Please try again.";
    alert(msg); // Or use a toast for better UI
  }

  setEmail("");
  setPassword("");
};

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="logo" className="w-16 mb-10" />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
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
            Login
          </button>

          <p className="text-center">
           Join a fleet{" "}
            <Link to="/captain-signup" className="text-blue-600">
              Register as a Captain
            </Link>{" "}
          </p>
        </form>
      </div>
      <Link to='/login' className="flex items-center justify-center mb-5 bg-[#d5622d] text-white font-bold rounded px-4  w-full text-lg placeholder:text-base py-2 ">
        Sign in as User
      </Link>
    </div>
  );
};

export default CaptainLogin;

