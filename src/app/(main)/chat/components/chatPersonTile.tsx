"use client";
import Cookies from "js-cookie";

const ChatPersonTile = () => {
  const getUserDataFromCookie = () => {
    const userData = Cookies.get("userData");
    return userData ? JSON.parse(userData) : null;
  };

  let userData: any = getUserDataFromCookie();
  return (
    <>
      <div className="flex items-center w-[100%] p-4 text-[#fff] bg-[#21262d] border-2 rounded-2xl my-2 cursor-pointer">
        <div>
          <img
            src={"/display-picture/display.png"}
            className="w-10 h-10 rounded-full"
            alt="Project Logo"
          ></img>
        </div>
        <div className="w-[80%] mx-4">
          <h1 className="">
            {userData?.user?.role === "Client" ? "ABC" : "XYZ PVT LTD"}
          </h1>
          <p className="truncate-4 text-[12px]">You: Loading...</p>
        </div>
        <div className="w-fit">
          <h1>Fri</h1>
        </div>
      </div>
    </>
  );
};

export default ChatPersonTile;
