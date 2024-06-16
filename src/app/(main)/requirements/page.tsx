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

const Requirements = () => {
  let userData: any = sessionStorage.getItem("userData");
  userData = JSON.parse(userData);

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
        <div className="flex justify-around">
          <SideNav />
          <div className="w-[78%] h-[98vh] my-[1vh]">
            <div className="rounded-3xl pb-4 bg-[#fff] ">
              <div className="flex items-center w-[92%] justify-between mx-auto pt-4 mb-2">
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
              <div className="flex flex-row overflow-y-scroll no-scrollbar h-[87vh] mx-auto w-[92%]">
                <div className="flex flex-wrap content-start [&>*:nth-child(3n+1)]:ml-0">
                  {/* {data?.data?.response?.requirements.map((content:any) => {
                    <CardWithForm image={content.imgPath} isRequested={!content.isAccepted} title={content.title} description={content.description} />
                  })} */}
                  {data?.data?.map((content: any) => {
                    return (
                      <CardWithForm
                        image={content.imgPath || "/images/image.png"}
                        isRequested={false}
                        title={content.product}
                        description={content.product_desc}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Requirements;
