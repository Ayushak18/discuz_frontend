"use client";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import ContentTile from "../page-components/content-tile";
import Pitches from "../page-components/Pitches";
import SideNav from "../page-components/Side-Nav";

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
      <div className="flex">
        <SideNav />
        <div className="w-full mx-2 flex flex-col items-center">
          <div className="w-full ml-2 bg-[#fff] h-[50vh] my-2 rounded-3xl p-4">
            <h2 className="text-[#717171] text-[28px] font-bold"> Dashboard</h2>
            <Separator className="bg-[#d7d7d7] my-2 mx-auto h-[0.2rem] text-center " />
            <div className="flex flex-col h-[90%] w-[100%]">
              <div className="flex flex-col flex-wrap w-[100%] h-[90%] m-0">
                {contents.map((content) => {
                  return <ContentTile content={content} />;
                })}
              </div>
              <div className="h-[10%] flex items-center justify-center m-0">
                <Button className="flex mb-8 justify-center items-center">
                  <p className="font-bold text-gray-500">Load More</p>
                  <img
                    src={"/dashboard-vendor/downarrow.svg"}
                    className="w-4 h-4 ml-2"
                  ></img>
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Pitches />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
