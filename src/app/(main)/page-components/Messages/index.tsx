import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import ContentTile from "../content-tile";

const Messages = () => {
  const msgs =[ {
    imgPath: '/display-picture/display.png',
    title: 'ABC Company',
    description: 'Description about the company and the project it is offering ...',
    date: '12 March 2024',
    width:'95%',
  },
  {
    imgPath: '/display-picture/display.png',
    title: 'ABC Company',
    description: 'Description about the company and the project it is offering ...',
    date: '12 March 2024',
    width: '95%',
  },
];
  return (
    <>
      <div className="m-[1rem] ml-0 mt-0 px-[1.5rem] py-[1rem] h-[47vh] rounded-xl w-[50%] bg-[#fff]">
        <div className="flex items-center justify-between mb-[0.3rem]">
          <h2 className="text-[#717171] text-[28px] font-bold">Messages</h2>
          <Image
            className="cursor-pointer"
            src={"/dashboard-vendor/expand.svg"}
            width={20}
            height={90}
            alt="Project Logo"
          ></Image>
        </div>
        <Separator className="bg-[#d7d7d7] mx-auto h-[0.2rem] text-center " />
        <div className="flex flex-col flex-wrap w-[100%] h-[100%] overflow-hidden my-[2%] py-[1%]">
              {msgs.map((msg)=>{
                return <ContentTile content={msg}/>
              })}            
          </div>
      </div>
    </>
  );
};

export default Messages;
