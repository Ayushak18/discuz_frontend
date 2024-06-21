"use client";
import { Button } from "@/components/ui/button";
import { CardWithForm } from "../page-components/Card";
import SideNav from "../page-components/Side-Nav";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import "../../../../public/style/scroll-bar.css";
import "../../../../public/style/spinner.css";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import ExpandedVendorTile from "../page-components/ExpandedPageEdit";
import Cookies from "js-cookie";

const Requirements = () => {
  const getUserDataFromCookie = () => {
    const userData = Cookies.get("userData");
    return userData ? JSON.parse(userData) : null;
  };

  let userData: any = getUserDataFromCookie();
  // const { email, role } = userData;

  const [showTile, setShowTile] = useState(false);
  const [reqData, setReqData] = useState(undefined);

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["requirements"],
    queryFn: async () => {
      const response = await axios.post(
        `http://localhost:3000/requirements/email`,
        {
          email: `${userData?.user?.email}`,
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
                    <div className="flex w-[35%]">
                      <Input
                        className="rounded-xl border-gray-300 placeholder:text-gray-400 border-2"
                        type="text"
                        placeholder="Search..."
                      />
                      <Link href={"/post_requirement"}>
                        <Button className="cursor-pointer hover:bg-blue-500 bg-blue-500 text-[#fff] rounded-2xl ml-4">
                          Post Requirement
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <Separator className="bg-[#d7d7d7] w-[97%] mx-auto my-2  h-[2px]" />
                  <div className="flex flex-row overflow-y-scroll no-scrollbar h-[87vh] mx-auto w-[97%]">
                    <div className="flex flex-wrap content-start [&>*:nth-child(3n+1)]:ml-0">
                      {data?.data?.map((content: any) => {
                        return (
                          <CardWithForm
                            image={content.imgPath || "/images/image.png"}
                            isRequested={false}
                            title={content.product}
                            description={content.product_desc}
                            setShowTile={setShowTile}
                            data={content}
                            setReqData={setReqData}
                          />
                        );
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

export default Requirements;
