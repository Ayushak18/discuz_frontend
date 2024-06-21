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
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ExpandedVendorTile from "../page-components/ExpandedPageEdit";

const Dashboard = () => {
  const getUserDataFromCookie = () => {
    const userData = Cookies.get("userData");
    return userData ? JSON.parse(userData) : null;
  };

  const [showTile, setShowTile] = useState(false);
  const [reqData, setReqData] = useState(undefined);

  const pathname = usePathname();

  let userData: any = getUserDataFromCookie();

  // console.log(userData?.user?.email);

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["accepted_pitches_for_vendor"],
    queryFn: async () => {
      const response = await axios.post(
        `https://discuz-backend.onrender.com/virtual_pitch/email`,
        {
          company_email: userData?.user?.email,
        }
      );
      return response.data;
    },
  });

  // console.log(data?.data[0]);

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
              <ExpandedVendorTile reqData={reqData} setShowTile={setShowTile} />
            </div>
          </>
        ) : (
          <>
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
                    <div className="flex flex-row  justify-between flex-wrap">
                      {data?.data?.map((content: any) => {
                        if (
                          userData?.user?.role === "Vendor" &&
                          pathname.includes("vendor_dashboard") &&
                          content.isAccepted
                        ) {
                          // console.log(content.isAccepted);
                          return (
                            <CardWithForm
                              image={content.imgPath || "/images/image.png"}
                              isRequested={false}
                              title={content.product || content.pitch_title}
                              description={
                                content.product_desc || content.product_details
                              }
                              setShowTile={setShowTile}
                              data={content}
                              setReqData={setReqData}
                            />
                          );
                        } else if (!pathname.includes("vendor_dashboard")) {
                          return (
                            <CardWithForm
                              image={content.imgPath || "/images/image.png"}
                              isRequested={false}
                              title={content.product || content.pitch_title}
                              description={
                                content.product_desc || content.product_details
                              }
                              setShowTile={setShowTile}
                              data={content}
                              setReqData={setReqData}
                            />
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
};

export default Dashboard;
