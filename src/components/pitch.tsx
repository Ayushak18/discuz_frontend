"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const Pitch = ({ params }: { params: any }) => {
  console.log(params?.id);
  const router = useRouter();
  const [pitchBrief, setPitchBrief] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["requirements-requests"],
    queryFn: () =>
      axios.get(`https://discuz-backend.onrender.com/requirements/${params?.id}`),
  });

  // To Post the Pitch to a particular Requirement
  const { mutate, isError, isSuccess }: any = useMutation({
    mutationFn: (pitch) => {
      return axios
        .post("https://discuz-backend.onrender.com/virtual_pitch/post", pitch)
        .then((res) => res.data);
    },
  });

  const notify = () =>
    toast.info("Pitch Created Successfully!", {
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
      router.push("/pitches");
    }, 2000);
  } else if (isError) {
    errorToast();
  }

  const getUserDataFromCookie = () => {
    const userData = Cookies.get("userData");
    return userData ? JSON.parse(userData) : null;
  };

  let userData: any = getUserDataFromCookie();

  const validateInput = (input: string) => {
    const wordCount = input.trim().split(/\s+/).length;
    return wordCount >= 100;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (validateInput(pitchBrief)) {
      setValidationMessage("");
      mutate({
        company_name: userData?.user?.name,
        company_email: userData?.user?.email,
        place: event.target.location.value,
        budget_min: event.target.price_min.value,
        budget_max: event.target.price_max.value,
        product_details: pitchBrief,
        requirement_id: data?.data?._id,
        pitch_title: event.target.pitch_title.value,
        isAccepted: false,
      });
    } else {
      setValidationMessage("Input must be at least 100 words.");
    }
  };

  return (
    <>
      <div className="w-[80%] m-auto flex flex-col h-full items-center">
        <div className="text-center">
          <h2 className="text-[#D9D9D9] my-[14%] text-[20px] font-medium">
            <span className="text-[16px]">Create Your </span>
            <span className="text-blue-500 font-bold text-[22px]">Vi</span>
            rtual{" "}
            <span className="text-blue-500 font-bold text-[22px]">Pi</span>tch
          </h2>
        </div>

        <div className="w-[65%] text-justify p-2 px-4 border-2 border-gray-400 rounded-2xl text-[#fff]">
          <p className="text-gray-300 text-start">
            Requirement:{" "}
            <span className="text-[14px] text-blue-500 font-medium">
              {data?.data?.product}
            </span>
          </p>

          <p className="line-clamp-2 text-gray-300 text-[12px] my-2">
            {data?.data?.product_desc}
          </p>
        </div>

        {/* Form Section */}
        <form className="w-[100%]" onSubmit={handleSubmit}>
          <div className="w-[65%] mx-auto mt-4 mb-4">
            <div className="flex flex-row mt-[4%]">
              <div className="w-full">
                <Label className="text-[#D9D9D9] text-[12px]" htmlFor="title">
                  Pitch Title
                </Label>
                <Input
                  required
                  name="pitch_title"
                  id="title"
                  className="bg-[#D9D9D9] mt-[5px] rounded"
                  type="text"
                />
              </div>
            </div>
            <div className="w-full mt-4">
              <Label className="text-[#D9D9D9] text-[12px]" htmlFor="location">
                Location
              </Label>
              <Input
                required
                id="location"
                className="bg-[#D9D9D9] mt-[5px] rounded"
                type="text"
              />
            </div>
            <div className="flex flex-row mt-[4%]">
              <div className="mr-auto  w-[45%]">
                <Label className="text-[#D9D9D9] text-[12px]" htmlFor="price">
                  Price Min
                </Label>
                <Input
                  required
                  name="price_min"
                  id="price"
                  className="bg-[#D9D9D9] mt-[5px] rounded"
                  type="number"
                />
              </div>
              <div className="w-[45%]">
                <Label
                  className="text-[#D9D9D9] text-[12px]"
                  htmlFor="location"
                >
                  Price Max
                </Label>
                <Input
                  required
                  name="price_max"
                  className="bg-[#D9D9D9] mt-[5px] rounded"
                  type="number"
                />
              </div>
            </div>

            <div className="flex flex-col mx-auto mt-[6%]">
              <Label className="text-[#D9D9D9] text-[12px]" htmlFor="pitch">
                Brief Pitch
              </Label>
              <textarea
                required
                id="pitch"
                name="pitch_brief"
                className="bg-[#D9D9D9] mt-[10px] rounded w-full h-[72px] p-2 resize-none"
                rows={3}
                value={pitchBrief}
                onChange={(e) => setPitchBrief(e.target.value)}
              ></textarea>
              {validationMessage && (
                <p className="text-red-500 text-sm">{validationMessage}</p>
              )}
            </div>
            <div className="flex flex-col mx-auto mt-[6%]">
              <Button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
        <Button
          onClick={() => router.push("/requests")}
          className="bg-red-500 w-[65%] hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </Button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Pitch;
