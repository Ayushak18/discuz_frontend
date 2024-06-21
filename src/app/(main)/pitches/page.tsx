"use client";
import { Button } from "@/components/ui/button";
import { CardWithForm } from "../page-components/Card";
import SideNav from "../page-components/Side-Nav";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import "../../../../public/style/scroll-bar.css";
import "../../../../public/style/spinner.css";
import { Separator } from "@/components/ui/separator";
import ExpandedTileEdit from "../page-components/ExpandedPageEdit";
import { useEffect, useState } from "react";

const Pitches = () => {
  const [userData, setUserData] = useState<any>(undefined);

  useEffect(() => {
    let user: any = sessionStorage.getItem("userData");
    user = JSON.parse(user);
    setUserData(user);
  }, []);

  const [showTile, setShowTile] = useState(false);
  const [reqData, setReqData] = useState(undefined);

  // console.log(userData?.user?.email);

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["pitches"],
    queryFn: async () => {
      const response = await axios.post(
        `http://localhost:3000/virtual_pitch/email`,
        {
          company_email: `${userData?.user?.email}`,
        }
      );
      return response.data;
    },
  });

  // console.log("Pitches");
  // console.log(data);

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
            <>
              <div className="flex justify-around">
                <SideNav />
                <ExpandedTileEdit reqData={reqData} setShowTile={setShowTile} />
              </div>
            </>
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
                  <Separator className="bg-[#d7d7d7] w-[98%] mx-auto h-[2px]" />
                  <div className="flex flex-row overflow-y-scroll no-scrollbar h-[87vh] mx-auto w-[92%]">
                    <div className="flex flex-row  justify-between flex-wrap">
                      {/* {data?.data?.response?.requirements.map((content:any) => {
                    <CardWithForm image={content.imgPath} isRequested={!content.isAccepted} title={content.title} description={content.description} />
                  })} */}
                      {data?.data?.map((content: any) => {
                        return (
                          <CardWithForm
                            image={content.imgPath || "/images/image.png"}
                            isRequested={false}
                            title={content.pitch_title}
                            description={content.product_details}
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
          </>
        )}
      </>
    );
  }
};

export default Pitches;
