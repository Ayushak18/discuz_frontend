"use client";

import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "@/components/logo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const notify = () =>
    toast.info("User Created Successfully!", {
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
  const { mutate, isError, isSuccess, isPending, data }: any = useMutation({
    mutationFn: (newUser) => {
      return axios
        .post("https://discuz-backend.onrender.com/user/signup", newUser)
        .then((res) => res.data);
    },
  });

  if (isSuccess) {
    notify();
    if (isSuccess) {
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      console.log(isError);
      error();
    }
  }

  return (
    <>
      <div className="bg-[#181B1C] min-h-[100vh] flex">
        {/* Signup Section */}
        <div className="w-[60%]">
          <Logo />
          <div className="w-[60%] m-auto">
            <div className="text-center flex flex-col items-center my-[1rem]">
              <h2 className="text-[#D9D9D9] text-[50px] font-bold">
                Create <span className="text-blue-500 font-bold">Your</span>{" "}
                Account
              </h2>
              <p className="text-[#D9D9D9] text-[18px] font-medium">
                Start <span className="text-blue-500 font-bold">7 days</span>{" "}
                free trial
              </p>
              <p className="text-[#D9D9D9] text-[14px] font-light ">
                Get your business listed and have multiple opportunities
              </p>
              <form
                onSubmit={(event: any) => {
                  event.preventDefault();

                  mutate({
                    name: event.target.company_name.value,
                    description: event.target.company_description.value,
                    email: event.target.company_email.value,
                    password: event.target.company_password.value,
                    role: event.target.role.value,
                    location: event.target.company_location.value,
                    contact: event.target.company_contact_number.value,
                    sector: event.target.sector.value,
                  });
                  // console.log(event.target.company_name.value);
                  // console.log(event.target.company_description.value);
                  // console.log(event.target.company_location.value);
                  // console.log(event.target.role.value);
                  // console.log(event.target.company_contact_number.value);
                  // console.log(event.target.company_email.value);
                  // console.log(event.target.company_password.value);
                }}
                className="w-[100%]"
                action=""
              >
                <div className="flex w-full max-w-lg mx-auto flex-col my-[5%]">
                  <div className="flex w-full flex-row justify-between my-2">
                    <div className="flex w-[48%] flex-col ">
                      <Label
                        htmlFor="name"
                        className="text-[#D9D9D9] flex flex-start my-1 ml-[2px]"
                      >
                        Company Name*
                      </Label>
                      <Input
                        name="company_name"
                        type="name"
                        className="text-black bg-white rounded-xl mt-1"
                        required
                      />
                    </div>
                    <div className="flex w-[48%] flex-col ">
                      <Label
                        htmlFor="name"
                        className="text-[#D9D9D9] flex flex-start my-1 ml-[2px]"
                      >
                        Company Description*
                      </Label>
                      <Input
                        name="company_description"
                        type="name"
                        className="text-black bg-white rounded-xl mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex w-full flex-row justify-between my-2">
                    <div className="flex w-[48%] flex-col ">
                      <Label
                        htmlFor="name"
                        className="text-[#D9D9D9] flex flex-start my-1 ml-[2px]"
                      >
                        Company Sector*
                      </Label>
                      <Select required name="sector">
                        <SelectTrigger className="text-black bg-white rounded-xl my-1 w-[full]">
                          <SelectValue placeholder="Select a sector" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup className="text-black bg-white">
                            <SelectItem value="IT">IT</SelectItem>
                            <SelectItem value="Human Resource">
                              Human Resource
                            </SelectItem>
                            <SelectItem value="Manufacturing">
                              Manufacturing
                            </SelectItem>
                            <SelectItem value="Auto Mobiles">
                              Auto Mobiles
                            </SelectItem>
                            <SelectItem value="furniture">Furniture</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex w-[48%] flex-col ">
                      <Label
                        htmlFor="name"
                        className="text-[#D9D9D9] flex flex-start my-1 ml-[2px]"
                      >
                        Company Location*
                      </Label>
                      <Input
                        name="company_location"
                        type="name"
                        className="text-black bg-white rounded-xl my-1 w-full"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-row justify-between my-2">
                    <div className="flex w-[48%] flex-col ">
                      <Label
                        htmlFor="name"
                        className="text-[#D9D9D9] flex flex-start my-1 ml-[2px]"
                      >
                        Role*
                      </Label>
                      <Select required name="role">
                        <SelectTrigger className="text-black bg-white rounded-xl my-1 w-full">
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup className="text-black bg-white">
                            <SelectItem value="Client">Client</SelectItem>
                            <SelectItem value="Vendor">Vendor</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex w-[48%] flex-col ">
                      <Label
                        htmlFor="name"
                        className="text-[#D9D9D9] flex flex-start my-1 ml-[2px]"
                      >
                        Company Contact Number*
                      </Label>
                      <Input
                        name="company_contact_number"
                        type="number"
                        className="text-black bg-white rounded-xl my-1 w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        required
                      />
                    </div>
                  </div>
                  <Label
                    htmlFor="email"
                    className="text-[#D9D9D9] flex flex-start mt-2 mb-1 ml-[2px]"
                  >
                    Email Id*
                  </Label>
                  <Input
                    name="company_email"
                    required
                    type="email"
                    className="text-black bg-white rounded-xl my-1"
                  />

                  <Label
                    htmlFor="password"
                    className="text-[#D9D9D9] flex flex-start mt-2 mb-1 ml-[2px]"
                  >
                    Password*
                  </Label>
                  <Input
                    name="company_password"
                    required
                    type="password"
                    className="text-black bg-white rounded-xl my-1"
                  />

                  {/* <Label
                    htmlFor="confirm_password"
                    className="text-[#D9D9D9] flex flex-start my-1 ml-[2px]"
                  >
                    Confirm Password*
                  </Label>
                  <Input
                    required
                    type="password"
                    className="text-black bg-white rounded my-1"
                  /> */}

                  <Button
                    type="submit"
                    className="text-white hover:bg-blue-600 bg-[#1A88E1] my-4  rounded"
                  >
                    SIGN UP
                  </Button>
                  <div className="flex flex-row justify-center items-center">
                    <p className="text-[#D9D9D9]">Already have an account?</p>
                    <Link
                      href="/login"
                      className="text-[#5cb4fd] text-decoration-line: underline text-[15px]  ml-[5px]"
                    >
                      {" "}
                      Sign in
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Separator className="bg-[#505050]" orientation="vertical" />

        {/* Image Section */}
        <div className=" flex flex-col my-auto w-[30%] mx-auto">
          <img
            src={"/login.svg"}
            style={{ borderRadius: "50%", width: "400px", height: "400px" }}
            className="rounded-full object-contain mx-auto"
            // width={400}
            // height={400}
            alt="Project Logo"
          ></img>
          <p className="my-[2rem] text-[12px] text-center text-[#D9D9D9]">
            "Thrive virtually with our <b>B2B Video Call and Messaging App.</b>
            Showcase, engage, and close deals from anywhere. Empower your
            business growth without in-person meetings."
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default SignUp;
