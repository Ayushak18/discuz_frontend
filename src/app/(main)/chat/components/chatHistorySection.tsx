"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { SendHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ChatHistorySection = () => {
  const [userData, setUserData] = useState<any>(undefined);

  useEffect(() => {
    let user: any = sessionStorage.getItem("userData");
    user = JSON.parse(user);
    setUserData(user);
  }, []);

  // console.log(userData?.user?.name);

  // Code to create a meeting
  const router = useRouter();
  const { mutate, data, isPending } = useMutation({
    mutationFn: async () => {
      const response = await axios.post(
        `https://api.cluster.dyte.in/v2/meetings/`,
        {
          title: "V2.0 Test-1 Meeting Mumbai",
          preferred_region: "ap-south-1",
          record_on_start: false,
          live_stream_on_start: false,
        },
        {
          auth: {
            username: "ad38f256-0ecc-46fb-9925-77c28d08b0df",
            password: "d55e9550d2702c0e8cec",
          },
        }
      );
      return response.data;
    },
  });

  const { mutate: participantMutate, data: participantData } = useMutation({
    mutationFn: async (data: any) => {
      console.log(data?.data?.data?.id);
      const response = await axios.post(
        `https://api.cluster.dyte.in/v2/meetings/${data?.data?.data?.id}/participants`,
        {
          name: userData?.user?.name,
          picture:
            "https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699",
          custom_participant_id: "xyz",
          preset_name: "group_call_host",
        },
        {
          auth: {
            username: "ad38f256-0ecc-46fb-9925-77c28d08b0df",
            password: "d55e9550d2702c0e8cec",
          },
        }
      );
      return response.data;
    },
  });

  useEffect(() => {
    if (data?.success) {
      participantMutate({ data });
    }
  }, [data?.success]);

  if (participantData?.success) {
    router.push(`/meeting_page/${participantData?.data?.token}`);
  }

  return (
    <>
      <div className=" h-[98vh] w-[70%] my-2 rounded-3xl ml-1 p-4 bg-white">
        <div className="flex items-center justify-between border-b-2 pb-1">
          <p className="text-[24px] text-[#676767] font-semibold leading-loose">
            Dency Pambhar
          </p>
          <Button
            onClick={() => mutate()}
            className="bg-[#1A88E1] text-[#fff] rounded-xl hover:bg-[#1A88E1]"
          >
            {isPending ? "Loading..." : "Video Call"}
          </Button>
        </div>
        <Separator className="bg-[#d7d7d7]" />
        <div className="h-[85%]  overflow-y-scroll">
          <div>
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
          </div>
          <div className="flex flex-col items-end">
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
          <div>
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
          </div>
          <div className="flex flex-col items-end">
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
        </div>
        <div className="flex mt-6 justify-between">
          <Input
            className="bg-gray-200 w-[95%] border-none rounded-full"
            placeholder="Send a message "
          />
          <Button className="bg-blue-500 hover:bg-blue-600 ml-4 rounded-full">
            <SendHorizontal className="text-white w-4 h-4" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ChatHistorySection;
