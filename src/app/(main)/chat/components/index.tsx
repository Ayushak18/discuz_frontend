import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";

const ChatHistorySection = () => {
  return (
    <>
      <div className="flex h-[100%] w-[85%] justify-around">
        <div className=" h-[98vh] w-[70%] my-2 rounded-3xl ml-1 p-4 bg-white">
          <div>
            <p className="text-[24px] font-semibold leading-loose">
              Dency Pambhar
            </p>
          </div>
          <Separator className="bg-[#d7d7d7]" />
          <div className="h-[90%]  overflow-y-scroll">
            <p className="bg-black text-white text-[14px] my-2  py-2 px-4 max-w-[50%] w-fit rounded-xl flex justify-start ">
              Hey Ayush
            </p>
            <p className="bg-black text-white text-[14px] my-2 py-2 px-4 max-w-[50%] w-fit rounded-xl flex justify-start ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
              tellus eget condimentum rhoncus, sem quam semper libero, sit amet
              adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
              pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
              tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam
              quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
              leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
              magna. Sed consequat, leo eget bibendum sodales, augue velit
              cursus nunc,
            </p>
            <p className="bg-blue-500 text-white text-[14px] my-2 py-2 px-4 max-w-[50%] w-fit rounded-xl flex justify-end ">
              Hey Dency
            </p>
            <p className="bg-blue-500 text-white text-[14px] my-2 py-2 px-4 max-w-[50%] w-fit rounded-xl flex justify-end ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
              tellus eget condimentum rhoncus, sem quam semper libero, sit amet
              adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
              pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
              tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam
              quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
              leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
              magna. Sed consequat, leo eget bibendum sodales, augue velit
              cursus nunc,
            </p>
          </div>
          <div className="flex justify-between">
            <Input
              className="bg-gray-200 w-[95%] border-none rounded-full"
              placeholder="Send a message "
            />
            <Button className="bg-blue-500 hover:bg-blue-600 ml-4 rounded-full">
              <Send className="text-white w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="bg-pink-400 w-[28%] h-[98vh] my-2 rounded-3xl p-4">
          Ayush
        </div>
      </div>
    </>
  );
};

export default ChatHistorySection;
