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
import { Input } from "@/components/ui/input"
import { CardWithForm } from "../page-components/Card";

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
      <>
        <div className="w-[99%] h-[100%] ">
          <div className="h-[98%] my-[1.5%] rounded-xl bg-[#fff] ">
            <div className="flex items-center w-[92%] justify-between mx-auto pt-4 mb-2">
              <h2 className="text-[#3E435D]  text-[28px] font-semibold">
                Hello Dency!
              </h2>
              <div className="flex w-[25%]">
                 <Input className="rounded-xl border-gray-300 placeholder:text-gray-400 border-2" type="text" placeholder="Search..." />
              </div>
            </div>
            <div className="flex flex-row h-[95%]  mx-auto w-[92%]">
              <div className="flex flex-row  justify-between flex-wrap">
                {/* {data?.data?.response?.requirements.map((content:any) => {
                  <CardWithForm image={content.imgPath} isRequested={!content.isAccepted} title={content.title} description={content.description} />
                })} */}
                {contents.map((content:any) => {
                  return  <CardWithForm image={content.imgPath} isRequested={!content.isAccepted} title={content.title} description={content.description} />
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Dashboard;
