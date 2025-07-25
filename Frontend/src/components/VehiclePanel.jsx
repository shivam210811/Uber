import React from 'react';
import whitecar from '../assets/white.png';
import auto from '../assets/auto.jpeg';
import bike from '../assets/bike.jpeg';
import car from '../assets/car.jpeg';


const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className='p-3 w-full text-center absolute top-0' onClick={()=>{
            props.setVehiclePanelOpen(false);
          }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
          <h3 className='text-xxl font-semibold mb-5'>Choose a Vehicle</h3>
          <div onClick={()=>{
           props.setConfirmRidePanel(true);
          }} className='border-2 mb-2 active:border-black rounded-xl flex w-full items-center p-3 justify-between'>
            <img src={car} alt="" className='h-12'/>
            <div className='w-1/2 ml-2'>
              <h4 className='font-medium text-base'>Uber Black <span><i className="ri-user-fill"></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, compact ride</p>
            </div>
            <h2 className='text-lg font-semibold'><i className="ri-money-rupee-circle-line"></i>293.20</h2>
          </div>
          {/* another car */}
          <div onClick={()=>{
           props.setConfirmRidePanel(true);
          }}  className='border-2 mb-2 active:border-black rounded-xl flex w-full items-center p-3 justify-between'>
            <img src={whitecar} alt="" className='h-12'/>
            <div className='w-1/2 ml-2'>
              <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, compact ride</p>
            </div>
            <h2 className='text-lg font-semibold'><i className="ri-money-rupee-circle-line"></i>293.20</h2>
          </div>
           {/* another car */}
          <div onClick={()=>{
           props.setConfirmRidePanel(true);
          }}  className='border-2 mb-2 active:border-black rounded-xl flex w-full items-center p-3 justify-between'>
            <img src={bike} alt="" className='h-12'/>
            <div className='w-1/2 ml-2'>
              <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>1</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle ride</p>
            </div>
            <h2 className='text-lg font-semibold'><i className="ri-money-rupee-circle-line"></i>65</h2>
          </div>
           {/* another car */}
          <div onClick={()=>{
           props.setConfirmRidePanel(true);
          }}  className='border-2 mb-2 active:border-black rounded-xl flex w-full items-center p-3 justify-between'>
            <img src={auto} alt="" className='h-12'/>
            <div className='w-1/2 ml-2'>
              <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-fill"></i>3</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, auto ride</p>
            </div>
            <h2 className='text-lg font-semibold'><i className="ri-money-rupee-circle-line"></i>165</h2>
          </div>
    </div>
  );
}

export default VehiclePanel;
