"use client";

import { Button } from "@/components/ui/button";
import ContentTile from "../content-tile";
import { useRouter, usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

// export const PitchTile = (props: any) => {
//   const { record } = props;

//   return (
//     <>
//       <div className="h-[200px] w-[80%] rounded-2xl shadow-2xl my-8">
//         <div className="bg-gradient-to-r from-[#8fbcec] to-[#fdf8e3] rounded-t-2xl mx-auto h-[50px] "></div>
//         <div className="h-[80%]  mx-auto bg-white p-8">
//           <div className="h-[100%] flex flex-col justify-between">
//             <div className="flex flex-col">
//               <h1 id="title" className="text-2xl font-semibold">
//                 {record?.pitch?.pitch_title}
//               </h1>
//               <div className="header flex justify-start my-4">
//                 <div className="info text-right">
//                   <div className="inline-block">
//                     <span className="text-gray-500">Location: </span>
//                     <span className="text-[12px] bg-blue-500 text-white  px-3 py-1 rounded-full font-semibold">
//                       {record?.pitch?.place || "India"}
//                     </span>
//                   </div>
//                   <div className="inline-block ml-4">
//                     <span className="text-gray-500">Budget:</span>{" "}
//                     <span className="bg-blue-500 text-white px-3 py-1 text-[12px] rounded-full font-semibold">
//                       {record?.pitch?.budget_min}
//                     </span>{" "}
//                     -{" "}
//                     <span className="bg-blue-500 text-white px-3 py-1 text-[12px] rounded-full font-semibold">
//                       {record?.pitch?.budget_max}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <p className="">{record?.pitch?.product_details}</p>
//             </div>

//             {/* <div className="flex  flex-col items-end mt-4">
//               <div className="text-right">
//                 <button
//                   // onClick={() => setShowTile(false)}
//                   className="bg-blue-100 text-blue-500 px-4 py-2 rounded mr-2"
//                 >
//                   Back
//                 </button>
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const ExpandedTileEdit = (props: any) => {
  const { setShowTile, reqData } = props;
  const pathname = usePathname();
  const getUserDataFromCookie = () => {
    const userData = Cookies.get("userData");
    return userData ? JSON.parse(userData) : null;
  };

  let userData: any = getUserDataFromCookie();

  // console.log(reqData?.requirement_id);

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["requirement-of-the-pitch"],
    queryFn: async () => {
      if (reqData?.requirement_id) {
        const response = await axios.get(
          `http://localhost:3000/requirements/${reqData?.requirement_id}`
        );
        return response.data;
      }
      return;
    },
  });

  const router = useRouter();

  return (
    <>
      <div className="w-[78%] min-h-[98vh] h-fit my-[1vh] bg-white flex flex-col items-center  justify-center rounded-2xl ">
        <div className="h-fit w-[900px] rounded-2xl shadow-2xl mb-4 mt-10">
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
                  {pathname.includes("client_dashboard") ? (
                    <></>
                  ) : (
                    <Button className="bg-blue-500 mx-4 hover:bg-green-500 rounded-2xl text-white">
                      Edit
                    </Button>
                  )}

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

        {reqData?.pitches?.map((record: any) => {
          if (
            record.isAccepted === false &&
            pathname.includes("/requirements")
          ) {
            return (
              <>
                <ContentTile content={record} />
              </>
            );
          } else if (
            record.isAccepted === true &&
            pathname.includes("/client_dashboard")
          ) {
            return (
              <>
                <ContentTile content={record} />
              </>
            );
          }
        })}
        {data ? (
          <>
            <ContentTile content={data} />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ExpandedTileEdit;
