"use client";

const ExpandedVendorTile = () => {
  return (
    <div className="w-[78%] h-[98vh] my-[1vh] bg-white flex items-center  justify-center rounded-2xl">
    <div className="h-[600px] w-[80%] rounded-2xl shadow-2xl ">
       <div className="bg-gradient-to-r from-[#8fbcec] to-[#fdf8e3] rounded-t-2xl mx-auto h-[100px] ">
       </div>
      <div className="h-[80%]  mx-auto bg-white p-8">
        <div className="h-[100%] flex flex-col justify-between">
          <div className="flex flex-col">
          <h1 id="title" className="text-2xl font-semibold">
              Cab Service (OLA) - Demo User
            </h1>
          <div className="header flex justify-start my-4">
            <div className="info text-right">
              <div className="inline-block">
                <span className="text-gray-500">Location: </span>
                <span className="text-[12px] bg-blue-500 text-white  px-3 py-1 rounded-full font-semibold">Pune</span>
              </div>
              <div className="inline-block ml-4">
                <span className="text-gray-500">Budget:</span>{" "}
                <span className="bg-blue-500 text-white px-3 py-1 text-[12px] rounded-full font-semibold">3000</span> - {" "}
                <span className="bg-blue-500 text-white px-3 py-1 text-[12px] rounded-full font-semibold">4000</span>
                
              </div>
            </div>
          </div>
          <p className="mt-4">{'adbhksbfsfksjnfjdvnkjbwgywdhdbasbdcjsabsgdudjsasbcsgieygdsdbhbchj'}</p>
          </div>
         
          <div className="flex  flex-col items-end mt-4">
            <div className="text-right">
              <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded mr-2">
                Accept Request
              </button> 
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ExpandedVendorTile;
