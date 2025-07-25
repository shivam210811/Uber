import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/captainContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setvehicleColor] = useState("");
  const [vehiclecapacity, setVehicleCapacity] = useState("");
  const [vehicleplate, setVehiclePlate] = useState("");
  const [vehiclevehicleType, setVehicleVehicleType] = useState("");

  const {captain, setCaptain} = React.useContext(CaptainDataContext);

  

  const submitHandler = async (e) => {
    e.preventDefault(e);
    const captainData = {
      fullName:{
         firstName:firstName,
        lastName:lastName
      },
      email: email,
      password: password,
      vehicle:{
        color: vehicleColor,
        capacity: Number(vehiclecapacity),
        plate: vehicleplate,
        vehicleType: vehiclevehicleType
      }
     
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
    if(response.status === 201){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }
 
    setEmail("");
    setPassword("");
    setFirstName('');
    setLastName("");
    setvehicleColor("");
    setVehicleCapacity("");   
    setVehiclePlate("");
    setVehicleVehicleType("");    
    
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
          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-4 mb-5">
            <input
              value={vehicleColor}
              onChange={(e) => setvehicleColor(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 border w-1/3 text-lg placeholder:text-base py-2"
              type="text"
              required
              placeholder="Vehicle Color"
            />
            <input
              value={vehiclecapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 border w-1/3 text-lg placeholder:text-base py-2"
              type="number"
              min="1"
              required
              placeholder="Capacity"
            />
            <input
              value={vehicleplate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 border w-1/3 text-lg placeholder:text-base py-2"
              type="text"
              required
              placeholder="Plate Number"
            />
          </div>
          <div className="mb-7">
            <label className="block mb-2 text-lg font-medium">Vehicle Type</label>
            <select
              value={vehiclevehicleType}
              onChange={(e) => setVehicleVehicleType(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 border w-full text-lg py-2"
              required
            >
              <option value="" disabled>Select type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>             
              <option value="motorCycle">Motorcycle</option> {/* ✅ lowercase value */}
          </select>
          </div>
          <button className="bg-[#111] text-white font-bold mb-7 rounded px-4  w-full text-lg placeholder:text-base py-2 ">
            Create Captain Account
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
