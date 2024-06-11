import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Pitch: React.FC = () => {
  return (
    <div className="w-[80%] m-auto flex flex-col h-full items-center">
      <div className="text-center">
      <h2 className="text-[#D9D9D9] my-[14%] text-[20px] font-medium">
     <span className="text-[16px]">Create Your {' '}</span>
      <span className="text-blue-500 font-bold text-[22px]">Vi</span>rtual{' '}
      <span className="text-blue-500 font-bold text-[22px]">Pi</span>tch
    </h2>
      </div>

      {/* Form Section */}
      <div className="w-[65%] mx-auto my-[5%]">
        <div className="flex flex-row mt-[4%]">
          <div className="mr-auto w-[45%]">
            <Label className="text-[#D9D9D9] text-[12px]" htmlFor="company">
              Company
            </Label>
            <Input
              id="company"
              className="bg-[#D9D9D9] mt-[5px] rounded"
              type="text"
            />
          </div>
          <div className="w-[45%]">
            <Label className="text-[#D9D9D9] text-[12px]" htmlFor="title">
              Product Title
            </Label>
            <Input
              id="title"
              className="bg-[#D9D9D9] mt-[5px] rounded"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-row mt-[4%]">
          <div className="mr-auto  w-[45%]">
            <Label className="text-[#D9D9D9] text-[12px]" htmlFor="price">
              Price
            </Label>
            <Input
              id="price"
              className="bg-[#D9D9D9] mt-[5px] rounded"
              type="number"
            />
          </div>
          <div className="w-[45%]">
            <Label className="text-[#D9D9D9] text-[12px]" htmlFor="location">
              Location
            </Label>
            <Input
              id="location"
              className="bg-[#D9D9D9] mt-[5px] rounded"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col mx-auto mt-[6%]">
          <Label className="text-[#D9D9D9] text-[12px]" htmlFor="pitch">
            Brief Pitch
          </Label>
          <textarea
            id="pitch"
            className="bg-[#D9D9D9] mt-[10px] rounded w-full h-[72px] p-2 resize-none"
            rows={3}
          ></textarea>
        </div>
        <div className="flex flex-col mt-[6%]">
          <Label className="text-[#D9D9D9] text-[12px]" htmlFor="files">
            Upload Files
          </Label>
          <Input
            id="files"
            className="bg-[#D9D9D9] w-[45%] mt-[10px] rounded"
            type="file"
            multiple
          />
        </div>
        <div className="flex flex-col mx-auto mt-[10%]">
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
