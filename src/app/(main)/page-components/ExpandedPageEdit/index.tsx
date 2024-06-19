"use client";

import { Button } from "@/components/ui/button";
import ContentTile from "../content-tile";
import { useRouter } from "next/navigation";

export const PitchTile = (props: any) => {
  const { record } = props;

  return (
    <>
      <div className="h-[200px] w-[80%] rounded-2xl shadow-2xl my-8">
        <div className="bg-gradient-to-r from-[#8fbcec] to-[#fdf8e3] rounded-t-2xl mx-auto h-[50px] "></div>
        <div className="h-[80%]  mx-auto bg-white p-8">
          <div className="h-[100%] flex flex-col justify-between">
            <div className="flex flex-col">
              <h1 id="title" className="text-2xl font-semibold">
                {record?.pitch?.pitch_title}
              </h1>
              <div className="header flex justify-start my-4">
                <div className="info text-right">
                  <div className="inline-block">
                    <span className="text-gray-500">Location: </span>
                    <span className="text-[12px] bg-blue-500 text-white  px-3 py-1 rounded-full font-semibold">
                      {record?.pitch?.place || "India"}
                    </span>
                  </div>
                  <div className="inline-block ml-4">
                    <span className="text-gray-500">Budget:</span>{" "}
                    <span className="bg-blue-500 text-white px-3 py-1 text-[12px] rounded-full font-semibold">
                      {record?.pitch?.budget_min}
                    </span>{" "}
                    -{" "}
                    <span className="bg-blue-500 text-white px-3 py-1 text-[12px] rounded-full font-semibold">
                      {record?.pitch?.budget_max}
                    </span>
                  </div>
                </div>
              </div>
              <p className="">{record?.pitch?.product_details}</p>
            </div>

            {/* <div className="flex  flex-col items-end mt-4">
              <div className="text-right">
                <button
                  // onClick={() => setShowTile(false)}
                  className="bg-blue-100 text-blue-500 px-4 py-2 rounded mr-2"
                >
                  Back
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

const ExpandedTileEdit = (props: any) => {
  const { setShowTile, reqData } = props;
  let userData: any = sessionStorage.getItem("userData");
  userData = JSON.parse(userData);

  // console.log(reqData);

  const router = useRouter();

  return (
    <>
      <div className="w-[78%] first-line: h-[98vh] my-[1vh] bg-white flex flex-col items-center  justify-center rounded-2xl overflow-y-scroll">
        <div className="h-[600px] w-[900px] rounded-2xl shadow-2xl mt-10">
          <div className="bg-gradient-to-r from-[#8fbcec] to-[#fdf8e3] rounded-t-2xl mx-auto h-[100px] "></div>
          <div className="h-[80%]  mx-auto bg-white p-8">
            <div className="h-[100%] flex flex-col justify-between">
              <div className="flex flex-col">
                <h1 id="title" className="text-2xl font-semibold">
                  {reqData?.product || reqData?.pitch_title}
                </h1>
                <div className="header flex justify-start my-4">
                  <div className="info text-right">
                    <div className="inline-block">
                      <span className="text-gray-500">Location: </span>
                      <span className="text-[12px] bg-blue-500 text-white  px-3 py-1 rounded-full font-semibold">
                        {reqData?.Location || "India"}
                      </span>
                    </div>
                    <div className="inline-block ml-4">
                      <span className="text-gray-500">Budget:</span>{" "}
                      <span className="bg-blue-500 text-white px-3 py-1 text-[12px] rounded-full font-semibold">
                        ₹ {reqData?.budget_min}
                      </span>{" "}
                      -{" "}
                      <span className="bg-blue-500 text-white px-3 py-1 text-[12px] rounded-full font-semibold">
                        ₹ {reqData?.budget_max}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-4">
                  {reqData?.product_desc || reqData?.product_details}
                </p>
              </div>

              <div className="flex  flex-col items-end mt-4">
                <div className="text-right">
                  <Button className="bg-blue-500 mx-4 hover:bg-green-500 rounded-2xl text-white">
                    Edit
                  </Button>
                  <Button
                    onClick={() => setShowTile(false)}
                    className="bg-blue-100 hover:bg-blue-100 text-blue-500 rounded-2xl mr-2"
                  >
                    Back
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {reqData?.pitches?.map((record: any) => {
          return (
            <>
              <ContentTile content={record} />
            </>
          );
        })} */}
      </div>
    </>
  );
};

export default ExpandedTileEdit;
