"use client";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Messages from "../page-components/Messages";
import { Button } from "@/components/ui/button";
import ContentTile from "../page-components/content-tile";
import { useRouter } from "next/navigation";
import Pitches from "../page-components/Pitches";

const Dashboard = () => {
  const contents = [
    {
      imgPath: "/display-picture/display.png",
      title: "ABC Company",
      description:
        "Description about the company and the project it is offering ...",
      date: "12 March 2024",
      width: "47%",
    },
    {
      imgPath: "/display-picture/display.png",
      title: "ABC Company",
      description:
        "Description about the company and the project it is offering ...",
      date: "12 March 2024",
      width: "47%",
    },
    {
      imgPath: "/display-picture/display.png",
      title: "ABC Company",
      description:
        "Description about the company and the project it is offering ...",
      date: "12 March 2024",
      width: "47%",
    },
    {
      imgPath: "/display-picture/display.png",
      title: "ABC Company",
      description:
        "Description about the company and the project it is offering ...",
      date: "12 March 2024",
      width: "47%",
    },
  ];
  return (
    <>
      <div className="w-[80%]">
        <div className="m-[1rem] ml-0 px-[2%] py-[1%] h-[50vh] rounded-xl bg-[#fff]">
          <div className="flex items-center justify-between mb-[0.3rem]">
            <h2 className="text-[#717171] text-[28px] font-bold">Dashboard</h2>
            {/* <Image
              className="cursor-pointer"
              src={"/dashboard-vendor/add.svg"}
              width={35}
              height={100}
              alt="Project Logo"
            ></Image> */}
          </div>
          <Separator className="bg-[#d7d7d7] mx-auto h-[0.2rem] text-center " />
          <div className="flex flex-col h-[90%] w-[100%]">
            <div className="flex flex-col flex-wrap w-[100%] h-[90%] m-0">
              {contents.map((content) => {
                return <ContentTile content={content} />;
              })}
            </div>
            <div className="h-[10%] flex items-center justify-center m-0">
              <Button className="flex justify-center items-center">
                <p className="font-bold text-gray-500">Load More</p>
                <img
                  src={"/dashboard-vendor/downarrow.svg"}
                  className="w-4 h-4 ml-2"
                ></img>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex">
          {/* <Messages /> */}
          <Pitches />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
