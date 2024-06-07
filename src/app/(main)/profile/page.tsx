"use client";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import ContentTile from "../page-components/content-tile";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const Profile = () => {
  const router = useRouter();
  // if (!sessionStorage.getItem("userData")) {
  //   router.push("/login");
  // }

  // Fetching data from session storage
  // let userData: any = sessionStorage.getItem("userData");
  // userData = JSON.parse(userData);
  // const { email, role } = userData.user;

  // Get Requst to get the ORG data from the server
  // const { isPending, error, data, isFetching } = useQuery({
  //   queryKey: ["first-data"],
  //   queryFn: () =>
  //     axios
  //       .get(`http://3.6.132.27/api/user/${email}/${role}`)
  //       .then((res) => res.data),
  // });

  return (
    <>
      <div className="w-[99%] h-[98%] mt-[1%] rounded-2xl bg-[white]">
        <div
          className="flex items-center w-[100%] h-[100px] rounded-t-2xl px-8 bg-gradient-to-r from-[#8fbcec] to-[#fdf8e3]
                      justify-between mx-auto pt-2">
          <h2 className="text-[#3E435D]  text-[28px] font-semibold">
            Welcome, Dency Pambhar!
          </h2>
        </div>
        <div className="">
          <div className="w-[70%] flex flex-col border-2 border-gray-200 rounded-2xl p-4  mx-auto mt-12">
            <div className="flex flex-row justify-between">
              <img src='./display-picture/display.png' className="w-20 h-20 rounded-full "></img>
              <div className="my-auto w-[75%]">
                <p className="font-semibold text-[16px]">Dency Pambhar</p>
                <p className="text-[14px] text-gray-400">dency@gmail.com</p>
              </div>
              <Button className="bg-blue-500 text-white font-light rounded-xl  my-auto w-[100px] ">Edit</Button>
            </div>
            <div className="mt-4 flex flex-row flex-wrap justify-between">
            <div className="grid my-3  w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="text">First Name</Label>
              <Input type="text" id="text" placeholder="Your First Name" className="bg-gray-100  placeholder:text-gray-400 rounded-xl border-0" />
            </div>
            <div className="grid my-3 w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="text">Last Name</Label>
              <Input type="text" id="text" placeholder="Your Last Name" className="bg-gray-100  placeholder:text-gray-400 rounded-xl border-0" />
            </div>
            <div className="grid my-3 w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="text">Location</Label>
              <Input type="text" id="text" placeholder="Your Location" className="bg-gray-100  placeholder:text-gray-400 rounded-xl border-0" />
            </div>
            <div className="grid my-3 w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="text">Sector</Label>
              <Input type="text" id="text" placeholder="Your Sector"  disabled className="bg-gray-100  placeholder:text-gray-400 rounded-xl border-0" />
            </div>
            <div className="grid my-3 w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Your Email" className="bg-gray-100  placeholder:text-gray-400 rounded-xl border-0" />
            </div>
            <div className="grid my-3 w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="phone">Contact Number</Label>
              <Input type="number" id="phone" placeholder="Your Contact Number" className="bg-gray-100  placeholder:text-gray-400 rounded-xl border-0" />
            </div>
            <div className="grid my-3 w-full items-center gap-1.5">
              <Label htmlFor="text">Company Info</Label>
              <Textarea id="info" placeholder="Your Company Info" className="bg-gray-100 w-[100%] h-[150px] placeholder:text-gray-400 rounded-xl border-0" />
            </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
