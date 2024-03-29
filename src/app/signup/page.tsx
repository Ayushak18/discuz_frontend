"use client";
import Image from "next/image";
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
import { useEffect } from "react";

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
        .post("http://3.6.132.27/api/user/signup", newUser)
        .then((res) => res.data);
    },
  });

  const {
    mutate: createChatUser,
    isError: chatUserError,
    isSuccess: chatUserSuccess,
  }: any = useMutation({
    mutationFn: (newChatUser) => {
      return axios
        .post("http://3.6.132.27/api/authenticate", newChatUser)
        .then((resposne) => console.log(resposne));
    },
  });
  // console.log("Is pending");
  // console.log(isPending);
  // console.log("Is success");
  // console.log(isSuccess ? notify() : "");
  if (isSuccess) {
    notify();
    if (chatUserSuccess) {
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      console.log(chatUserError);
    }
  } else if (isError) {
    error();
  }

  useEffect(() => {
    createChatUser({ username: data?.user?.email, secret: data?.user?.email });
  }, [isSuccess === true]);

  return (
    <>
      <div className="bg-[#181B1C] min-h-[100vh] flex">
        {/* Signup Section */}
        <div className="w-[60%]">
          <Logo />
          <div className="w-[70%] m-auto">
            <div className="text-center flex flex-col items-center my-[1rem]">
              <h2 className="text-[#D9D9D9] text-[50px] font-bold">
                Create your account
              </h2>
              <p className="text-[#D9D9D9] text-[24px] font-medium">
                Start 7 days free trial
              </p>
              <p className="text-[#D9D9D9]">
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
                  <Label
                    htmlFor="name"
                    className="text-[#D9D9D9] flex flex-start mb-[2%] ml-[2px]"
                  >
                    Company Name*
                  </Label>
                  <Input
                    name="company_name"
                    type="name"
                    className="text-black bg-[#D9D9D9] rounded mb-[6%] w-full"
                    required
                  />
                  <Label
                    htmlFor="name"
                    className="text-[#D9D9D9] flex flex-start mb-[2%] ml-[2px]"
                  >
                    Company Description*
                  </Label>
                  <Input
                    name="company_description"
                    type="name"
                    className="text-black bg-[#D9D9D9] rounded mb-[6%] w-full"
                    required
                  />
                  <Label
                    htmlFor="name"
                    className="text-[#D9D9D9] flex flex-start mb-[2%] ml-[2px]"
                  >
                    Company Sector*
                  </Label>
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
                  <Label
                    htmlFor="name"
                    className="text-[#D9D9D9] flex flex-start mb-[2%] ml-[2px]"
                  >
                    Company Location*
                  </Label>
                  <Input
                    name="company_location"
                    type="name"
                    className="text-black bg-[#D9D9D9] rounded mb-[6%] w-full"
                    required
                  />
                  <Label
                    htmlFor="name"
                    className="text-[#D9D9D9] flex flex-start mb-[2%] ml-[2px]"
                  >
                    Role*
                  </Label>
                  <Select required name="role">
                    <SelectTrigger className="text-black bg-[#D9D9D9] rounded mb-[6%] w-full">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className="text-black bg-[#D9D9D9]">
                        <SelectItem value="Client">Client</SelectItem>
                        <SelectItem value="Vendor">Vendor</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Label
                    htmlFor="name"
                    className="text-[#D9D9D9] flex flex-start mb-[2%] ml-[2px]"
                  >
                    Company Contact Number*
                  </Label>
                  <Input
                    name="company_contact_number"
                    type="number"
                    className="text-black bg-[#D9D9D9] rounded mb-[6%] w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    required
                  />

                  <Label
                    htmlFor="email"
                    className="text-[#D9D9D9] flex flex-start mb-[2%] ml-[2px]"
                  >
                    Email Id*
                  </Label>
                  <Input
                    name="company_email"
                    required
                    type="email"
                    className="text-black bg-[#D9D9D9] rounded mb-[6%]"
                  />

                  <Label
                    htmlFor="password"
                    className="text-[#D9D9D9] flex flex-start mb-[2%] ml-[2px]"
                  >
                    Password*
                  </Label>
                  <Input
                    name="company_password"
                    required
                    type="password"
                    className="text-black bg-[#D9D9D9] rounded mb-[6%]"
                  />

                  {/* <Label
                    htmlFor="confirm_password"
                    className="text-[#D9D9D9] flex flex-start mb-[2%] ml-[2px]"
                  >
                    Confirm Password*
                  </Label>
                  <Input
                    required
                    type="password"
                    className="text-black bg-[#D9D9D9] rounded mb-[6%]"
                  /> */}

                  <Button
                    type="submit"
                    className="text-white hover:bg-blue-600 bg-[#1A88E1] my-[6%] rounded"
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
        <div className="py-[100px] w-[30%] mx-auto">
          <Image
            src={"/Login_filler.svg"}
            width={600}
            height={200}
            alt="Project Logo"
          ></Image>
          <p className="my-[2rem] text-[24px] text-[#D9D9D9]">
            "Thrive virtually with our B2B Video Call and Messaging App.
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
