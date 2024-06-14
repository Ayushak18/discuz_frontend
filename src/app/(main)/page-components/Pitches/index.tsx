import { Separator } from "@/components/ui/separator";
import ContentTile from "../content-tile";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Pitches = (props: any) => {
  //   const data = props;
  //   console.log("From Pitches");
  //   console.log(data?.content?.data);

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
      <div className="w-full ml-1 bg-[#fff] h-[46vh] my-2 rounded-3xl p-4">
        <div className="flex justify-between">
          <h2 className="text-[#717171] text-[28px] font-bold"> My Pitches</h2>
          <Image
            className="cursor-pointer"
            src={"/dashboard-vendor/expand.svg"}
            width={20}
            height={90}
            alt="Project Logo"
          ></Image>
        </div>
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
    </>
  );
};

export default Pitches;
