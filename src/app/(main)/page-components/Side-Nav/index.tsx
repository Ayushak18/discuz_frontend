import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const SideNav = () => {
  return (
    <>
      <div className="bg-[#fff] w-[18%] h-[100vh] m-[1rem] rounded-3xl py-[1rem]">
        <div className="flex items-center justify-center">
          <Image
            src={"/Project_Logo.svg"}
            width={50}
            height={100}
            alt="Project Logo"
          ></Image>
          <h1 className="text-[#717171] text-[30px] ml-[10px] font-bold">
            Discuz Pro
          </h1>
        </div>
        <Separator className="bg-[#d7d7d7] w-[90%] mx-auto h-[0.2rem] text-center " />
        {/* Side Nav Buttons */}
        <div>
          <div className="py-[0.5rem] px-[1rem] shadow-lg cursor-pointer  rounded-2xl text-[#676767] mx-[1.5rem] my-[1.5rem] flex items-center">
            <Image
              src={"/dashboard-vendor/home.svg"}
              width={30}
              height={100}
              alt="Home Logo"
            ></Image>
            <Button className="text-[18px] font-bold">Home</Button>
          </div>
          <div className="py-[0.5rem] px-[1rem] shadow-lg cursor-pointer  rounded-2xl  text-[#676767] mx-[1.5rem] my-[1.5rem] flex items-center">
            <Image
              src={"/dashboard-vendor/dashboard.svg"}
              width={30}
              height={100}
              alt="Dashboard Logo"
            ></Image>
            <Button className="text-[18px] font-bold">Dashboard</Button>
          </div>
          <div className="py-[0.5rem] px-[1rem] shadow-lg cursor-pointer bg-[#1A88E1]  rounded-2xl text-[#ffffff] mx-[1.5rem] my-[1.5rem] flex items-center">
            <Image
              src={"/dashboard-vendor/settings.svg"}
              width={30}
              height={100}
              alt="Settings Logo"
            ></Image>
            <Button className="text-[18px] font-bold">Settings</Button>
          </div>
          <div className="py-[0.5rem] px-[1rem] shadow-lg cursor-pointer  rounded-2xl text-[#676767] mx-[1.5rem] my-[1.5rem] flex items-center">
            <Image
              src={"/dashboard-vendor/chat.svg"}
              width={30}
              height={100}
              alt="Chat Logo"
            ></Image>
            <Button className="text-[18px] font-bold">Chats</Button>
          </div>
          <div className="py-[0.5rem] px-[1rem] shadow-lg cursor-pointer  rounded-2xl text-[#676767] mx-[1.5rem] my-[1.5rem] flex items-center">
            <Image
              src={"/dashboard-vendor/requests.svg"}
              width={30}
              height={100}
              alt="Requests Logo"
            ></Image>
            <Button className="text-[18px] font-bold">Requests</Button>
          </div>
          <div className="py-[0.5rem] px-[1rem] shadow-lg cursor-pointer  rounded-2xl text-[#676767] mx-[1.5rem] my-[1.5rem] flex items-center">
            <Image
              src={"/dashboard-vendor/profile.svg"}
              width={30}
              height={100}
              alt="Profile Logo"
            ></Image>
            <Button className="text-[18px] font-bold">Profile</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
