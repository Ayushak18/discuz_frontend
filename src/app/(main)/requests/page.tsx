"use client";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import ContentTile from "../page-components/content-tile";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SideNav from "../page-components/Side-Nav";
import { Input } from "@/components/ui/input";
import { CardWithForm } from "../page-components/Card";
import "../../../../public/style/scroll-bar.css";
import { useState } from "react";
import ExpandedvendorTile from "../page-components/ExpandedPagePitch";

const Requests = () => {
  const router = useRouter();

  const [showTile, setShowTile] = useState(false);
  const [reqData, setReqData] = useState(undefined);

  let userData: any = sessionStorage.getItem("userData");
  userData = JSON.parse(userData);

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["requirements_for_vendor"],
    queryFn: async () => {
      const response = await axios.post(
        `http://localhost:3000/requirements/sector`,
        {
          req_sector: "IT",
        }
      );
      return response.data;
    },
  });

  if (isPending) {
    return (
      <>
        <div className="flex justify-around">
          <SideNav />
          <div className="flex w-[78%] items-center justify-center">
            <span className="loader"></span>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        {showTile ? (
          <>
            <div className="flex justify-around">
              <SideNav />
              <ExpandedvendorTile reqData={reqData} setShowTile={setShowTile} />
            </div>
          </>
        ) : (
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
                  <div className="flex flex-row  content-start flex-wrap [&>*:nth-child(3n+1)]:ml-0">
                    {data?.data?.map((content: any) => {
                      return (
                        <CardWithForm
                          image={content.imgPath || "/images/image.png"}
                          isRequested={true}
                          title={content.product}
                          description={content.product_desc}
                          setShowTile={setShowTile}
                          setReqData={setReqData}
                          data={content}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
};

export default Requests;
