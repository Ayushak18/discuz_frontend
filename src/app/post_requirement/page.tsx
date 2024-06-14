import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/logo";
import Requirement from "@/components/requirement";
const PostRequirement = () => {
  return (
    <>
      <div className="bg-[#181B1C] h-[100vh] flex">
        <div className="flex flex-col w-[60%]">
          <Logo></Logo>
          <Requirement />
        </div>
        <Separator className="bg-[#505050]" orientation="vertical" />

        {/* Image Section */}
        <div className="py-[100px] w-[30%] mx-auto">
          <Image
            src={"/pitch.svg"}
            width={600}
            height={200}
            alt="Project Logo"
            className="rounded-xl"
          ></Image>
          <p className=" mt-4 m-1 text-[20px] flex justify-center text-[#D9D9D9]">
            "Target your needs to the right vendors"
          </p>
          <p className=" mx-4 text-[15px] flex justify-center text-[#D9D9D9]">
            {" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default PostRequirement;
