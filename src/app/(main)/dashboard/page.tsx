import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Messages from "../page-components/Messages";
import Requests from "../page-components/Requests";

const Dashboard = () => {
  return (
    <>
      <div className="w-[80%]">
        <div className="m-[1rem] ml-0 px-[1.5rem] py-[1rem] h-[50vh] rounded-xl bg-[#fff]">
          <div className="flex items-center justify-between mb-[0.3rem]">
            <h2 className="text-[#717171] text-[30px] font-bold">Dashboard</h2>
            <Image
              className="cursor-pointer"
              src={"/dashboard-vendor/add.svg"}
              width={35}
              height={100}
              alt="Project Logo"
            ></Image>
          </div>
          <Separator className="bg-[#d7d7d7] mx-auto h-[0.2rem] text-center " />
        </div>
        <div className="flex">
          <Messages />
          <Requests />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
