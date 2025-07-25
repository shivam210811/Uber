import React from 'react';

const LocationSearchPanel = (props) => {

  //sample array for location data
  const locations = [
    'Sector 32, A Vardhman Colony Chandigarh Road',
    'Sector 17, Chandigarh',
    'Sector 22, Chandigarh',
    'Sector 35, Chandigarh',
    'Sector 35, Mohali',
    'Sector 74, Mohali',
    'Sector 91, Sahibjada ajit singh nagar',
  ];
  return (
    <div>
      {/* this is just a sample data */}

      {
        locations.map(function(elem){
          return (
            <div onClick={()=>{
              props.setVehiclePanelOpen(true);
              props.setPanelOpen(false);
            }} className='flex gap-4 border-2 p-3 rounded-xl border-gray-100 active:border-black items-center my-2 justify-start'>
              <h2 className='bg-[#eee] h-10 flex items-center justify-center w-16 rounded-full'><i className='ri-map-pin-fill'/></h2>
              <h4 className='text-lg font-medium'>{elem}</h4>
            </div>
          );        
        })
      }
      
    </div>
  );
}

export default LocationSearchPanel;
