import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [UserData, setUserData] = useState({});
  

  const submitHandler = (e) => {
    e.preventDefault(e);
    setUserData({
      fullName:{
         firstName:firstName,
        lastName:lastName
      },
      email: email,
      password: password,
     
    });
 
    setEmail("");
    setPassword("");
    setFirstName('');
    setLastName("");
    
  };
  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between">
      <div>
        <img
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="logo"
          className="w-16 mb-5"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's Our Captain's Name</h3>
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

          <h3 className="text-lg font-medium mb-2">What's Our Captain's Email</h3>
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
            Signup
          </button>

          <p className="text-center">
           Already have an Account?
            <Link to="/captain-login" className="text-blue-600">
              login here
            </Link>
          </p>
        </form>
      </div>
     <p className="text-[10px] leading-tight">this site is protected by reCAPTCHA and the <span className='underline'>google privacy policy</span> and <span className='underline'>term of services</span> apply</p>
    </div>
  );
};

export default CaptainSignup;
