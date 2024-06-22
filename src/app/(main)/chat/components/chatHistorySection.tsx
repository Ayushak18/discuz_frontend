import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { SendHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface Message {
  sender: string;
  message: string;
}

const ChatHistorySection = () => {
  const [messages, setMessages] = useState<Message[]>([]); // Assuming Message type is defined
  const [inputMessage, setInputMessage] = useState("");
  const router = useRouter();

  const getUserDataFromCookie = () => {
    const userData = Cookies.get("userData");
    return userData ? JSON.parse(userData) : null;
  };

  let userData: any = getUserDataFromCookie();

  useEffect(() => {
    fetchMessages(); // Fetch initial messages
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get<Message[]>(
        "https://discuz-backend.onrender.com/chat"
      );
      setMessages(response.data);

      // Wait for some time and fetch again (simulate long-polling)
      setTimeout(fetchMessages, 1000); // Fetch messages every 5 seconds
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = async () => {
    try {
      const senderEmail = userData.user.email;
      const receiverEmail =
        userData.user.email === "a@g.com" ? "b@g.com" : "a@g.com";
      await axios.post(
        "https://discuz-backend.onrender.com/chat/send_message",
        {
          sender_email: senderEmail,
          receiver_email: receiverEmail,
          message: inputMessage,
        }
      );
      setInputMessage(""); // Clear input field after sending message
      // No need to fetch messages here because long-polling will update them
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // const { mutate, data, isPending } = useMutation({
  //   mutationFn: async () => {
  //     const response = await axios.post(
  //       `https://api.cluster.dyte.in/v2/meetings/`,
  //       {
  //         title: "V2.0 Test-1 Meeting Mumbai",
  //         preferred_region: "ap-south-1",
  //         record_on_start: false,
  //         live_stream_on_start: false,
  //       },
  //       {
  //         auth: {
  //           username: "ad38f256-0ecc-46fb-9925-77c28d08b0df",
  //           password: "d55e9550d2702c0e8cec",
  //         },
  //       }
  //     );
  //     return response.data;
  //   },
  // });

  const {
    mutate: participantMutate,
    data: participantData,
    isPending,
  } = useMutation({
    mutationFn: async (data: any) => {
      // console.log(data?.data?.data?.id);
      const response = await axios.post(
        `https://api.cluster.dyte.in/v2/meetings/bbb9feae-4b81-4dad-ad89-49bc3c66d992/participants`,
        {
          name: userData?.user?.name,
          picture:
            "https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699",
          custom_participant_id: "xyz",
          preset_name:
            userData?.user?.role === "Client"
              ? "group_call_host"
              : "group_call_participant",
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

  // useEffect(() => {
  //   if (data?.success) {
  //     // participantMutate({});
  //   }
  // }, [data?.success]);

  if (participantData?.success) {
    router.push(`/meeting_page/${participantData?.data?.token}`);
  }

  return (
    <>
      <div className=" h-[98vh] w-[70%] my-2 rounded-3xl ml-1 p-4 bg-white">
        <div className="flex items-center justify-between border-b-2 pb-1">
          <p className="text-[24px] text-[#676767] font-semibold leading-loose">
            {userData?.user?.role === "Client" ? "ABC" : "XYZ PVT LTD"}
          </p>
          <Button
            onClick={() => participantMutate({})}
            className="bg-[#1A88E1] text-[#fff] rounded-xl hover:bg-[#1A88E1]"
          >
            {isPending ? "Loading..." : "Video Call"}
          </Button>
        </div>
        <Separator className="bg-[#d7d7d7]" />
        <div className="h-[85%]  overflow-y-scroll">
          {Array.isArray(messages) &&
            messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === userData.user.email
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <p
                  className={`text-white text-[14px] my-2 py-2 px-4 max-w-[50%] w-fit rounded-xl ${
                    msg.sender === userData.user.email
                      ? "bg-blue-500"
                      : "bg-black"
                  }`}
                >
                  {msg.message}
                </p>
              </div>
            ))}
        </div>
        <div className="flex mt-6 justify-between">
          <Input
            className="bg-gray-200 w-[95%] border-none rounded-full"
            placeholder="Send a message"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <Button
            className="bg-blue-500 hover:bg-blue-600 ml-4 rounded-full"
            onClick={sendMessage}
          >
            <SendHorizontal className="text-white w-4 h-4" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ChatHistorySection;
