"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, LayoutDashboard, ListCollapseIcon, LogOut, MessageCircle, Send } from "lucide-react";

const SideNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  let userData: any = sessionStorage.getItem("userData");
  userData = JSON.parse(userData);

  const icons = {
    LayoutDashboard,
    MessageCircle,
    ListCollapseIcon,
    Send,
    LogOut,
  };

  let options = [
    {
      name: "Dashboard",
      icon: icons.LayoutDashboard,
      isSelected: pathname.includes("dashboard"),
      url: `${userData?.user?.role.toLowerCase()}_dashboard`,
    },
    {
      name: "Chats",
      icon: icons.MessageCircle,
      isSelected: pathname.includes("chat"),
      url: "/chats",
    },
    {
      name: "My Requirements",
      icon: icons.ListCollapseIcon,
      isSelected: pathname.includes("requests"),
      url: "/requirements",
    },
    {
      name: "Requests",
      icon: icons.Send,
      isSelected: pathname.includes("profile"),
      url: "/requests",
    },
    {
      name: "Log Out",
      icon: icons.LogOut,
      url: `/login`,
    },
  ];

  return (
    <>
      <div className="bg-[#21262D] w-[100%] h-[98%] my-[1%] ml-2 rounded-3xl pt-4">
        <div className="flex items-center  h-[80px]  w-[90%] mx-auto   border-[#313843] border-2 rounded-2xl justify-evenly">
          <img
            src={"/display-picture/display.png"}
            className="w-10 h-10 rounded-full"
            alt="Project Logo"
          ></img>
          <div className="flex flex-col ml-1">
            <p className="text-white text-[14px] font-semibold ">
              Dency Pambhar
            </p>
            <p className="text-[#83899F] text-[12px] ">
              Client
            </p>
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
