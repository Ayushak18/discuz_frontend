"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Pitch: React.FC = () => {
  const router = useRouter();
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["requirements-requests"],
    queryFn: () =>
      axios.get(`http://localhost:3000/requirements/6671e14dd6e73c6d3c43471f`),
  });

  // To Post the Pitch to a particular Requirement
  const {
    mutate,
    isError,
    isSuccess,
    data: PitchData,
  }: any = useMutation({
    mutationFn: (pitch) => {
      return axios
        .post("http://localhost:3000/virtual_pitch/post", pitch)
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

  let user: any = sessionStorage.getItem("userData");
  user = JSON.parse(user);

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
        <form
          className="w-[100%]"
          onSubmit={(event: any) => {
            event.preventDefault();
            // alert("Form Submitted");
            // console.log(event.target.pitch_title.value);
            // console.log(event.target.location.value);
            // console.log(event.target.price_min.value);
            // console.log(event.target.price_max.value);
            // console.log(event.target.pitch_brief.value);
            mutate({
              company_name: user?.user?.name,
              company_email: user?.user?.email,
              place: event.target.location.value,
              budget_min: event.target.price_min.value,
              budget_max: event.target.price_max.value,
              product_details: event.target.pitch_brief.value,
              requirement_id: data?.data?._id,
              pitch_title: event.target.pitch_title.value,
            });
          }}
          action=""
        >
          <div className="w-[65%] mx-auto mt-4 mb-4">
            <div className="flex flex-row mt-[4%]">
              {/* <div className="mr-auto w-[45%]">
                <Label className="text-[#D9D9D9] text-[12px]" htmlFor="company">
                  Company
                </Label>
                <Input
                  name="company_name"
                  id="company"
                  className="bg-[#D9D9D9] mt-[5px] rounded"
                  type="text"
                />
              </div> */}
              <div className="w-full">
                <Label className="text-[#D9D9D9] text-[12px]" htmlFor="title">
                  Pitch Title
                </Label>
                <Input
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
                id="pitch"
                name="pitch_brief"
                className="bg-[#D9D9D9] mt-[10px] rounded w-full h-[72px] p-2 resize-none"
                rows={3}
              ></textarea>
            </div>
            <div className="flex mt-[6%]">
              {/* <div >
                <Label className="text-[#D9D9D9] text-[12px]" htmlFor="files">
                  Upload Files
                </Label>
                <Input
                  id="files"
                  className="bg-[#D9D9D9] w-[45%] mt-[10px] rounded"
                  type="file"
                  multiple
                />
              </div> */}
            </div>
            <div className="flex flex-col mx-auto">
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
