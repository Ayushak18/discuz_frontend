"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import {
  ChevronDown,
  LayoutDashboard,
  ListCollapseIcon,
  LogOut,
  MessageCircle,
  Send,
} from "lucide-react";

const SideNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const getUserDataFromCookie = () => {
    const userData = Cookies.get("userData");
    return userData ? JSON.parse(userData) : null;
  };
  let userData: any = getUserDataFromCookie();

  const icons = {
    LayoutDashboard,
    MessageCircle,
    ListCollapseIcon,
    Send,
    LogOut,
  };

  let optionsClient = [
    {
      name: "Dashboard",
      icon: icons.LayoutDashboard,
      isSelected: pathname.includes("dashboard"),
      url: `/${userData?.user?.role.toLowerCase()}_dashboard`,
    },
    {
      name: "Chats",
      icon: icons.MessageCircle,
      isSelected: pathname.includes("chat"),
      url: "/chat",
    },
    {
      name: `${
        userData?.user?.role === "Client" ? "My Requirements" : "My Pitches"
      }`,
      icon: icons.ListCollapseIcon,
      isSelected: pathname.includes(
        `${userData?.user?.role === "Client" ? "requirements" : "pitches"}`
      ),
      url: `${
        userData?.user?.role === "Client" ? "/requirements" : "/pitches"
      }`,
    },
    // {
    //   name: "Requests",
    //   icon: icons.Send,
    //   isSelected: pathname.includes("requests"),
    //   url: "/requests",
    // },
    {
      name: "Log Out",
      icon: icons.LogOut,
      url: `/login`,
    },
  ];

  let optionsVendor = [
    {
      name: "Dashboard",
      icon: icons.LayoutDashboard,
      isSelected: pathname.includes("dashboard"),
      url: `/${userData?.user?.role.toLowerCase()}_dashboard`,
    },
    {
      name: "Chats",
      icon: icons.MessageCircle,
      isSelected: pathname.includes("chat"),
      url: "/chat",
    },
    {
      name: `${
        userData?.user?.role === "Client" ? "My Requirements" : "My Pitches"
      }`,
      icon: icons.ListCollapseIcon,
      isSelected: pathname.includes(
        `${userData?.user?.role === "Client" ? "requirements" : "pitches"}`
      ),
      url: `${
        userData?.user?.role === "Client" ? "/requirements" : "/pitches"
      }`,
    },
    {
      name: "Requests",
      icon: icons.Send,
      isSelected: pathname.includes("requests"),
      url: "/requests",
    },
    {
      name: "Log Out",
      icon: icons.LogOut,
      url: `/login`,
    },
  ];

  let options;

  if (
    userData?.user?.role === "Client"
      ? (options = optionsClient)
      : (options = optionsVendor)
  )
    return (
      <>
        <div className="bg-[#21262D] h-[98vh] my-2 w-[20%] ml-2 rounded-3xl pt-4">
          <div
            onClick={() => router.push("/profile")}
            className="flex cursor-pointer items-center p-4 pr-0 mx-[20px] border-[#313843] border-2 rounded-2xl justify-between"
          >
            <div className="flex items-center">
              <img
                src={"/display-picture/display.png"}
                className="w-10 h-10 rounded-full"
                alt="Project Logo"
              ></img>
              <div className="flex flex-col ml-4">
                <p className="text-white text-[14px] font-semibold ">
                  {userData?.user?.name}
                </p>
                <p className="text-[#83899F] text-[12px] ">
                  {userData?.user?.role}
                </p>
              </div>
            </div>
            <Button className="flex justify-center items-center">
              <ChevronDown color="white" />
            </Button>
          </div>
          <div className="mt-4">
            {options.map((option) => (
              <div
                onClick={() => {
                  router.push(option.url);
                  if (option.name === "Log Out") {
                    sessionStorage.removeItem("userData");
                  }
                }}
                key={option.name}
                className={` ${
                  option.isSelected ? "text-[#1A88E1]" : "text-[#ffffff]"
                } cursor-pointer hover:text-[#1A88E1] w-[80%] rounded-2xl flex items-center mx-auto`}
              >
                <option.icon className="mr-2" />
                <Button className="lg:text-[16px] md:text-[12px]">
                  {option.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </>
    );
};

export default SideNav;
