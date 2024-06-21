import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter, usePathname } from "next/navigation";

let userData: any = sessionStorage.getItem("userData");
userData = JSON.parse(userData);

export const ContentTile = ({ content }: { content: any }) => {
  const router = useRouter();
  const pathname = usePathname();
  // console.log(content?._id);
  const { mutate, isError, isSuccess, data }: any = useMutation({
    mutationFn: (pitch_id) => {
      return axios
        .get(`http://localhost:3000/virtual_pitch/accept/${pitch_id}`)
        .then((res) => res.data);
    },
  });

  console.log(data);

  const notify = () =>
    toast.info("Success!!!", {
      toastId: "success1",
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const errorToast = () => {
    toast.error("Something went wrong!", {
      toastId: "error1",
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  if (isSuccess) {
    notify();
    setTimeout(() => {
      // router.push("/client_dashboard");
    }, 2000);
  } else if (isError) {
    errorToast();
  }

  return (
    <>
      <Accordion
        type="single"
        className="my-2 border-2 border-gray-200 rounded-2xl"
        collapsible
      >
        <AccordionItem
          className="p-2 items-center rounded-2xl bg-white mx-auto py-4 w-[900px]"
          value="item-1"
        >
          <div className="flex justify-between w-[100%]">
            <img
              src="./display-picture/display.png"
              className="w-16 mx-4 h-16 my-auto rounded-full"
            ></img>
            <AccordionTrigger className="w-[780px]">
              <p className=" line-clamp-1 mr-8">
                {content?.pitch_title || content?.product}
              </p>
            </AccordionTrigger>
          </div>

          <AccordionContent className="px-4 mt-8">
            <div className="header flex justify-start my-4">
              <div className="info text-right">
                <div className="inline-block">
                  <span className="text-gray-500">Location: </span>
                  <span className="text-[12px] bg-blue-500 text-white  px-3 py-1 rounded-full font-semibold">
                    {content?.place || "India"}
                  </span>
                </div>
                <div className="inline-block ml-4">
                  <span className="text-gray-500">Budget:</span>{" "}
                  <span className="bg-blue-500 text-white px-3 py-1 text-[12px] rounded-full font-semibold">
                    {content?.budget_min || content?.budget_min}
                  </span>{" "}
                  -{" "}
                  <span className="bg-blue-500 text-white px-3 py-1 text-[12px] rounded-full font-semibold">
                    {content?.budget_max || content?.budget_max}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-justify">
              {content?.product_details || content?.product_desc}
            </p>
            <div className="flex  flex-col items-end mt-4">
              {userData?.user?.role === "Client" &&
              !pathname.includes("client_dashboard") ? (
                <Button
                  onClick={() => mutate(content?._id)}
                  className="bg-blue-500 hover:bg-green-500 rounded-2xl text-white"
                >
                  Accept
                </Button>
              ) : (
                <></>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <ToastContainer />
    </>
  );
};

export default ContentTile;
