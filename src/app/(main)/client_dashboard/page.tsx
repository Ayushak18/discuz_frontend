"use client";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Messages from "../page-components/Messages";
import Requests from "../page-components/Requests";
import ContentTile from "../page-components/content-tile";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { CardWithForm } from "../page-components/Card";
import SideNav from "../page-components/Side-Nav";
import "../../../../public/style/scroll-bar.css";

const Dashboard = () => {
  // const router = useRouter();
  // if (!sessionStorage.getItem("userData")) {
  //   router.push("/login");
  // }

  let userData: any = sessionStorage.getItem("userData");
  userData = JSON.parse(userData);

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["requirements-requests"],
    queryFn: () =>
      axios.get(`http://3.6.132.27/api/requirements/${userData.user.email}`),
  });

  const contents = [
    {
      imgPath: "/display-picture/display.png",
      isAccepted: true,
      title: "ABC Company",
      description:
        "Description about the company and the project it is offering ...",
      date: "12 March 2024",
    },
    {
      imgPath: "/display-picture/display.png",
      isAccepted: true,
      title: "ABC Company",
      description:
        "Description about the company and the project it is offering ...",
      date: "12 March 2024",
    },
    {
      imgPath: "/display-picture/display.png",
      isAccepted: true,
      title: "ABC Company",
      description:
        "Description about the company and the project it is offering ...",
      date: "12 March 2024",
    },
    {
      imgPath: "/display-picture/display.png",
      isAccepted: true,
      title: "ABC Company",
      description:
        "Description about the company and the project it is offering ...",
      date: "12 March 2024",
    },
  ];
  if (true) {
    return (
      <div className="flex justify-around">
        <SideNav />
        <div className="w-[78%] h-[98vh] my-[1vh]">
          <div className="rounded-3xl pb-4 bg-[#fff] ">
            <div className="flex items-center w-[97%] justify-between mx-auto pt-4 mb-2">
              <h2 className="text-[#3E435D]  text-[28px] font-semibold">
                Hello Dency!
              </h2>
              <div className="flex w-[25%]">
                <Input
                  className="rounded-xl border-gray-300 placeholder:text-gray-400 border-2"
                  type="text"
                  placeholder="Search..."
                />
              </div>
            </div>
            <Separator className="bg-[#d7d7d7] w-[97%] mx-auto my-2  h-[2px]" />
            <div className="flex flex-row overflow-y-scroll no-scrollbar h-[87vh] mx-auto w-[97%]">
              <div className="flex content-start [&>*:nth-child(3n+1)]:ml-0 flex-wrap">
                {/* {data?.data?.response?.requirements.map((content:any) => {
                  <CardWithForm image={content.imgPath} isRequested={!content.isAccepted} title={content.title} description={content.description} />
                })} */}
                {contents.map((content: any) => {
                  return (
                    <CardWithForm
                      image={content.imgPath}
                      isRequested={!content.isAccepted}
                      title={content.title}
                      description={content.description}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
