"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";

const Requirement: React.FC = () => {
  const notify = () =>
    toast.info("Requirement Created Successfully!", {
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

  const error = () => {
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
  let user: any = sessionStorage.getItem("userData");
  user = JSON.parse(user);
  const { mutate, isError, isSuccess, isPending, data }: any = useMutation({
    mutationFn: (requirement) => {
      return axios
        .post("http://3.6.132.27/api/requirements/post", requirement)
        .then((res) => res.data);
    },
  });

  if (isSuccess) {
    notify();
    setTimeout(() => {
      router.push("/client_dashboard");
    }, 2000);
  } else if (isError) {
    error();
  }

  const router = useRouter();
  return (
    <>
      {" "}
      <div className="w-[80%] m-auto flex mb-4 flex-col h-full items-center">
        <div className="text-center flex justify-center">
          <h2 className="text-[#D9D9D9]  w-[60%]  mt-[2%] text-[20px] font-medium">
            Post your requirement and get access to services across the world
          </h2>
        </div>

        {/* Form Section */}
        <div className="w-[65%] mx-auto my-[3%]">
          <form
            onSubmit={(event: any) => {
              event.preventDefault();
              mutate({
                email: user.user.email,
                product: event.target.product.value,
                product_desc: event.target.description.value,
                budget_min: event.target.min_budget.value,
                budget_max: event.target.max_budget.value,
                isAccepted: false,
                sector: event.target.sector.value,
              });

              // console.log(user.user.email);
              // console.log(event.target.product.value);
              // console.log(event.target.description.value);
              // console.log(event.target.min_budget.value);
              // console.log(event.target.max_budget.value);
            }}
          >
            <div className="flex flex-col mx-auto mt-[6%]">
              <Label className="text-[#D9D9D9]" htmlFor="requirement">
                Required service/product
              </Label>
              <textarea
                name="product"
                id="requirement"
                className="bg-[#D9D9D9] mt-[10px] rounded w-full h-[60px] p-2 resize-none"
              ></textarea>
              <Label className="text-[#D9D9D9] mt-[5%]" htmlFor="text">
                Description
              </Label>
              <textarea
                name="description"
                id="description"
                className="bg-[#D9D9D9] mt-[10px]  rounded w-full p-2 resize-none"
                rows={3}
              ></textarea>
            </div>
            <div className="mt-[1.5rem]">
              <Label className="text-[#D9D9D9] ">Sector</Label>
              <Select required name="sector">
                <SelectTrigger className="text-black bg-[#D9D9D9] rounded mb-[6%] w-full">
                  <SelectValue placeholder="Select a sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="text-black bg-[#D9D9D9]">
                    <SelectItem value="IT">IT</SelectItem>
                    <SelectItem value="Human Resource">
                      Human Resource
                    </SelectItem>
                    <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="Auto Mobiles">Auto Mobiles</SelectItem>
                    <SelectItem value="Furniture">Furniture</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col mt-[4%] w-[100%]">
              <Label className="text-[#D9D9D9]">Budget</Label>
              <div className="flex flex-row items-center">
                <div className="mr-auto w-[40%] mt-2 flex flex-col">
                  <Input
                    name="min_budget"
                    placeholder=" Min."
                    id="minPrice"
                    className="bg-[#D9D9D9] mt-[5px] rounded"
                    type="number"
                  />
                </div>
                <div className="w-[40%] flex flex-col">
                  <Input
                    name="max_budget"
                    placeholder=" Max."
                    id="maxPrice"
                    className="bg-[#D9D9D9] mt-[5px] rounded"
                    type="number"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mx-auto mt-[1rem]">
              <Button className="my-[1rem] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </Button>
            </div>
          </form>
          <Button
            onClick={() => router.push("/client_dashboard")}
            className="w-[100%] bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Back
          </Button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Requirement;
