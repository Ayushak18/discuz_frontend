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
import SideNav from "../page-components/Side-Nav";
import { Pencil } from "lucide-react";
import { Content } from "@radix-ui/react-accordion";
import { useEffect, useState } from "react";
const Profile = () => {
  const router = useRouter();
  const [disbaleEdit, setDisableEdit] = useState(true);
  // if (!sessionStorage.getItem("userData")) {
  //   router.push("/login");
  // }

  // Fetching data from session storage
  const [userData, setUserData] = useState<any>(undefined);

  useEffect(() => {
    let user: any = sessionStorage.getItem("userData");
    user = JSON.parse(user);
    setUserData(user);
  }, []);
  const { email, role } = userData.user;

  // Get Requst to get the ORG data from the server
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["first-data"],
    queryFn: () =>
      axios
        .get(`http://localhost:3000/user/${email}/${role}`)
        .then((res) => res.data),
  });

  return (
    <div className="flex justify-around">
      <SideNav />
      <div className="w-[78%] h-[98vh] mt-[1vh] rounded-2xl bg-[white]">
        <div
          className="flex items-center w-[100%] h-[100px] rounded-t-2xl px-8 bg-gradient-to-r from-[#8fbcec] to-[#fdf8e3]
                      justify-between mx-auto pt-2"
        >
          <h2 className="text-[#3E435D]  text-[28px] font-semibold">
            Welcome, {data?.user?.name}!
          </h2>
        </div>
        <div className="">
          <div className="w-[70%] flex flex-col border-2 border-gray-200 rounded-2xl p-4  mx-auto mt-8">
            <div className="flex flex-row justify-between">
              <img
                src="./display-picture/display.png"
                className="w-20 h-20 rounded-full "
              ></img>
              <div className="my-auto w-[70%]">
                <p className="font-semibold text-[16px]">{data?.user?.name}</p>
                <p className="text-[14px] text-gray-400">{data?.user?.email}</p>
              </div>

              {disbaleEdit ? (
                <Pencil
                  onClick={() => setDisableEdit(false)}
                  className="my-auto hover:cursor-pointer mr-2 w-[80px]"
                />
              ) : (
                <Button
                  onClick={() => setDisableEdit(true)}
                  className="bg-blue-500 hover:bg-blue-500 text-white font-light rounded-xl  my-auto w-[80px] "
                >
                  Save
                </Button>
              )}
            </div>
            <div className="mt-4 flex flex-row flex-wrap justify-between">
              <div className="grid my-3  w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="text">Name</Label>
                <Input
                  type="text"
                  id="text"
                  placeholder="Your Name"
                  disabled={disbaleEdit}
                  defaultValue={data?.user?.name}
                  className="bg-gray-100  placeholder:text-gray-400 rounded-xl border-0"
                />
              </div>
              {/* <div className="grid my-3 w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="text">Last Name</Label>
                <Input
                  type="text"
                  id="text"
                  placeholder="Your Last Name"
                  className="bg-gray-100  placeholder:text-gray-400 rounded-xl border-0"
                />
              </div> */}
              <div className="grid my-3 w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="text">Location</Label>
                <Input
                  type="text"
                  id="text"
                  disabled={disbaleEdit}
                  placeholder="Your Location"
                  defaultValue={data?.user?.location}
                  className="bg-gray-100  placeholder:text-gray-400 rounded-xl border-0"
                />
              </div>
              <div className="grid my-3 w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="text">Sector</Label>
                <Input
                  type="text"
                  id="text"
                  placeholder="Your Sector"
                  defaultValue={data?.user?.sector}
                  disabled={disbaleEdit}
                  className="bg-gray-100  placeholder:text-gray-400 rounded-xl border-0"
                />
              </div>
              <div className="grid my-3 w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  defaultValue={data?.user?.email}
                  disabled={disbaleEdit}
                  className="bg-gray-100  placeholder:text-gray-400 rounded-xl border-0"
                />
              </div>
              <div className="grid my-3 w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="phone">Contact Number</Label>
                <Input
                  type="number"
                  id="phone"
                  placeholder="Your Contact Number"
                  defaultValue={data?.user?.contact}
                  disabled={disbaleEdit}
                  className="bg-gray-100  placeholder:text-gray-400 rounded-xl border-0"
                />
              </div>
              <div className="grid my-3 w-full items-center gap-1.5">
                <Label htmlFor="text">Company Info</Label>
                <Textarea
                  id="info"
                  placeholder="Your Company Info"
                  defaultValue={data?.user?.description}
                  disabled={disbaleEdit}
                  className="bg-gray-100 w-[100%] h-[150px] placeholder:text-gray-400 rounded-xl border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
