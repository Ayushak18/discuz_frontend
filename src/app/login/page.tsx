"use client";

import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import Logo from "@/components/logo";

const Login = () => {
  const router = useRouter();
  const notify = () =>
    toast.success("User Signed In!", {
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

  const errorToast = (errorMessage: any) => {
    toast.error(errorMessage, {
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

  const { mutate, isError, isSuccess, isPending, data, error }: any =
    useMutation({
      mutationFn: (user) => {
        return axios
          .post("http://localhost:3000/user/login", user)
          .then((res) => res.data);
      },
    });

  if (isSuccess) {
    notify();
    sessionStorage.setItem(
      "userData",
      JSON.stringify({ token: data.token, user: data.user })
    );
    setTimeout(() => {
      router.push(`/${data?.user?.role.toLowerCase()}_dashboard`);
    }, 2000);
  } else if (isError) {
    errorToast(error?.response?.data?.message);
  }

  return (
    <>
      <div className="bg-[#181B1C] min-h-[100vh] flex">
        {/* Login Section */}
        <div className="w-[60%]">
          <Logo />
          <div className="w-[50%] m-auto">
            <div className="text-center my-[2rem]">
              <h2 className="text-[#D9D9D9] text-[50px] font-bold">
                Welcome <span className="text-blue-500 font-bold">Back!</span>
              </h2>
              <p className="text-[#D9D9D9]">
              <span className="text-blue-500 text-[16px]">Login to elevate</span> &nbsp; your B2B connections
              </p>
            </div>

            {/* Form Section */}
            <div className="w-[65%] mx-auto">
              <form
                onSubmit={(event: any) => {
                  event.preventDefault();
                  mutate({
                    email: event.target.email.value,
                    password: event.target.password.value,
                  });
                  // console.log(event.target.email.value);
                  // console.log(event.target.password.value);
                }}
              >
                <div>
                  <Label className="text-[#D9D9D9]" htmlFor="email">
                    Email*
                  </Label>
                  <Input
                    required
                    className="bg-[#D9D9D9] mt-[5px] rounded"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="my-[1rem]">
                  <Label className="text-[#D9D9D9]" htmlFor="email">
                    Password*
                  </Label>
                  <Input
                    required
                    className="bg-[#D9D9D9] mt-[5px] rounded"
                    type="password"
                    name="password"
                  />
                </div>
                <Button
                  type="submit"
                  className="py-[1.5rem] hover:bg-blue-600 font-medium text-[#ffffff] text-[12px] bg-[#1A88E1] w-full my-[6%] rounded"
                >
                  LOGIN
                </Button>
              </form>
              <p className="text-[#D9D9D9] text-[12px] text-center my-[0.5rem]">
                Forgot Password?
              </p>
              <div className="flex items-center text-[12px] justify-center">
                <p className="text-[#D9D9D9]">
                  Don't have an account?{" "}
                  <Link href={"/signup"}>
                    <span className="text-[#5cb4fd] ml-[5px] underline">
                      Sign up
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Separator className="bg-[#505050]" orientation="vertical" />

        {/* Image Section */}
        <div className="py-[100px] w-[30%] mx-auto">
          <img
            src={"/login.svg"}
            style={{borderRadius:'50%', width:'400px', height:'400px'}}
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

export default Login;
