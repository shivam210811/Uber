import React, { useRef, useState } from 'react';
import uberlogo from '../assets/uberlogo.png';
import car from '../assets/car.jpeg';
import Map from '../assets/map.png';
import whitecar from '../assets/white.png';
import auto from '../assets/auto.jpeg';
import bike from '../assets/bike.jpeg';
import  {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';


const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination]= useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const vehiclePanelOpenRef = useRef(null)

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
        <div ref={vehiclePanelOpenRef} className='fixed w-full z-10 bottom-0 px-3 py-8 bg-white translate-y-full'>
          <h2 className='text-xxl font-semibold mb-5'>Choose a Vehicle</h2>
          <div className='border-2 mb-2 active:border-black rounded-xl flex w-full items-center p-3 justify-between'>
            <img src={car} alt="" className='h-12'/>
            <div className='w-1/2 ml-2'>
              <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, compact ride</p>
            </div>
            <h2 className='text-lg font-semibold'><i className="ri-money-rupee-circle-line"></i>293.20</h2>
          </div>
          {/* another car */}
          <div className='border-2 mb-2 active:border-black rounded-xl flex w-full items-center p-3 justify-between'>
            <img src={whitecar} alt="" className='h-12'/>
            <div className='w-1/2 ml-2'>
              <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, compact ride</p>
            </div>
            <h2 className='text-lg font-semibold'><i className="ri-money-rupee-circle-line"></i>293.20</h2>
          </div>
           {/* another car */}
          <div className='border-2 mb-2 active:border-black rounded-xl flex w-full items-center p-3 justify-between'>
            <img src={bike} alt="" className='h-12'/>
            <div className='w-1/2 ml-2'>
              <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>1</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle ride</p>
            </div>
            <h2 className='text-lg font-semibold'><i className="ri-money-rupee-circle-line"></i>65</h2>
          </div>
           {/* another car */}
          <div className='border-2 mb-2 active:border-black rounded-xl flex w-full items-center p-3 justify-between'>
            <img src={auto} alt="" className='h-12'/>
            <div className='w-1/2 ml-2'>
              <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-fill"></i>3</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, auto ride</p>
            </div>
            <h2 className='text-lg font-semibold'><i className="ri-money-rupee-circle-line"></i>165</h2>
          </div>
        </div>
    </div>
  );
}

export default Home;
