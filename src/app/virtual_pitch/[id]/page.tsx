"use client";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/logo";
import Pitch from "@/components/pitch";

const VirtualPitch = ({ params }: { params: any }) => {
  console.log(params?.id);
  return (
    <>
      <div className="bg-[#181B1C] h-[100vh] flex">
        <div className="flex flex-col w-[60%]">
          <Logo></Logo>
          <Pitch params={params} />
        </div>
        <Separator className="bg-[#505050]" orientation="vertical" />

        {/* Image Section */}
        <div className="py-[100px] w-[30%] m-auto">
          <Image
            src={"/pitch.svg"}
            width={400}
            height={200}
            alt="Project Logo"
            className="rounded-xl mx-auto my-auto"
          ></Image>
          <p className=" mt-4 m-1 text-[14px] flex justify-center text-[#D9D9D9]">
            "Connect and collaborate with potential clients"
          </p>
          <p className=" mx-4 text-[10px] flex justify-center text-[#D9D9D9]">
            Virtually Pitch your business to clients across the world!
          </p>
        </div>
      </div>
    </>
  );
};

export default VirtualPitch;
