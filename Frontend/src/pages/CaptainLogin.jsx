import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault(e);
setCaptainData({
  email:email,
  password:password
})
    console.log(captainData);

    setEmail('');    
    setPassword('');
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

