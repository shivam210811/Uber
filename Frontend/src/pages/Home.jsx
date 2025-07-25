import React, { useRef, useState } from 'react';
import uberlogo from '../assets/uberlogo.png';
import Map from '../assets/map.png';

import  {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedVehicle from '../components/ConfirmedVehicle';
import LookingforDriver from '../components/LookingforDriver';
import WaitingForDriver from '../components/WaitingForDriver';


const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination]= useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const vehiclePanelOpenRef = useRef(null)
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  useGSAP(function(){
   if(panelOpen){
     gsap.to(panelRef.current,{
      height:'70%',
      padding:24,
      opacity:'1'
    })
    gsap.to(panelCloseRef.current,{
      opacity:1
    })
   }else{
    gsap.to(panelRef.current,{
      height:'0%',
      opacity:'0',
      padding:0
    })
     gsap.to(panelCloseRef.current,{
      opacity:'0%'
    })
   }
  },[panelOpen])

  useGSAP(function(){
    if(confirmRidePanel){
    gsap.to(confirmRidePanelRef.current,{
      transform:'translateY(0)',
      duration:0.5,
    })
  } else{
    gsap.to(confirmRidePanelRef.current,{
      transform:'translateY(100%)',
      duration:0.5,
    })
  }
  },[confirmRidePanel])


  useGSAP(function(){
    if(vehiclePanelOpen){
    gsap.to(vehiclePanelOpenRef.current,{
      transform:'translateY(0)',
      duration:0.5,
    })
  } else{
    gsap.to(vehiclePanelOpenRef.current,{
      transform:'translateY(100%)',
      duration:0.5,
    })
  }
  },[vehiclePanelOpen])

    useGSAP(function(){
    if(vehicleFound){
    gsap.to(vehicleFoundRef.current,{
      transform:'translateY(0)',
      duration:0.5,
    })
  } else{
    gsap.to(vehicleFoundRef.current,{
      transform:'translateY(100%)',
      duration:0.5,
    })
  }
  },[vehicleFound])

   useGSAP(function(){
    if(waitingForDriver){
    gsap.to(waitingForDriverRef.current,{
      transform:'translateY(0)',
      duration:0.5,
    })
  } else{
    gsap.to(waitingForDriverRef.current,{
      transform:'translateY(100%)',
      duration:0.5,
    })
  }
  },[waitingForDriver])

  return (
    <div className='h-screnn relative overflow-hidden'>
      <img src={uberlogo} alt="" className='w-16 absolute left-5 top-5'/>
      <div className='h-screen w-screen'>
        {/* //image for temporary use */}
        <img src={Map} alt="" className='h-full w-full object-cover'/>
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full '>
       <div className='h-[30%] p-6 bg-white relative'>
        <h5 ref={panelCloseRef} onClick={()=>{
          setPanelOpen(false)
        }} className='absolute opacity-0 top-6 text-2xl right-6'>  <i className="ri-arrow-down-wide-line"></i></h5>
         <h4 className='text-2xl font-semibold'>Find a Trip</h4>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <div className='line absolute h-16 w-1 top-[40%] left-7 bg-gray-900 rounded-full'></div>
          <input
          onClick={()=>{
            setPanelOpen(true)
          }}
           value={pickup} onChange={(e)=>{
            setPickup(e.target.value)
          }} className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type='text' placeholder='Add a pickuplocation'/>
          <input 
          onClick={()=>{
            setPanelOpen(true)
          }}
          value={destination} onChange={(e)=>{
            setDestination(e.target.value)
          }}  className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type='text' placeholder='Enter your Destination'/>
        </form>
       </div>
       <div ref={panelRef} className='h-[0%]  bg-white '>
        <LocationSearchPanel panelOpen={panelOpen} setPanelOpen={setPanelOpen} vehiclePanelOpen={vehiclePanelOpen} setVehiclePanelOpen={setVehiclePanelOpen}/>
       </div>
        </div>
        <div ref={vehiclePanelOpenRef} className='fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white translate-y-full'>
          <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
        </div>
         <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white translate-y-full'>
          <ConfirmedVehicle setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
        </div>
        <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white translate-y-full'>
          <LookingforDriver setVehicleFound={setVehicleFound} />
        </div>
         <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white translate-y-full'>
          <WaitingForDriver  waitingForDriver={waitingForDriver}/>
        </div>
    </div>
  );
}

export default Home;
