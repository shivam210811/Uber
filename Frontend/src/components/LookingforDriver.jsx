import React from 'react';
import whitecar from "../assets/white.png";

const LookingforDriver = (props) => {
  return (
    <div>
        <h5
              className="p-1 text-center w-[93%] absolute top-0"
              onClick={() => {
                props.setVehicleFound(false);
              }}
            >
              <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className="text-2xl font-semibold mb-5">Looking for a Driver</h3>
            <div className="flex gap-2 justify-between flex-col items-center">
              <img src={whitecar} alt="" className="h-20" />
              <div className="w-full mt-5">
                <div className="flex items-center gap-5  p-3 border-b-2">
                 <i className="text-lg ri-map-pin-user-fill"></i>
                  <div>
                    <h3 className="text-lg font-medium">562/11-A</h3>
                    <p className="text-sm -mt-1 text-gray-600 ">
                      Vardhman colony chandigarh road, Ludhiana
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5  p-3 border-b-2">
                  <i className="text-lg ri-map-pin-2-fill"></i>
                  <div>
                    <h3 className="text-lg font-medium">562/11-A</h3>
                    <p className="text-sm -mt-1 text-gray-600 ">
                      Vardhman colony chandigarh road, Ludhiana
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-3">
                  <i className="text-lg ri-currency-line"></i>
                  <div>
                    <h3 className="text-lg font-medium">₹ 193.20</h3>
                    <p className="text-sm -mt-1 text-gray-600 ">
                      Cash
                    </p>
                  </div>
                </div>
              </div>
             
            </div>
    </div>
  );
}

export default LookingforDriver;
