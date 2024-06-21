import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { SendHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import axios from "axios";

interface Message {
  sender: string;
  message: string;
}

const ChatHistorySection = () => {
  const [messages, setMessages] = useState<Message[]>([]); // Assuming Message type is defined
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    fetchMessages(); // Fetch initial messages
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get<Message[]>("http://localhost:3000/chat");
      setMessages(response.data);

      // Wait for some time and fetch again (simulate long-polling)
      setTimeout(fetchMessages, 5000); // Fetch messages every 5 seconds
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = async () => {
    try {
      const senderEmail = "ayush@gmail.com";
      const receiverEmail = "dency@gmail.com";
      await axios.post("http://localhost:3000/chat/send_message", {
        sender_email: senderEmail,
        receiver_email: receiverEmail,
        message: inputMessage,
      });
      setInputMessage(""); // Clear input field after sending message
      // No need to fetch messages here because long-polling will update them
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      <div className=" h-[98vh] w-[70%] my-2 rounded-3xl ml-1 p-4 bg-white">
        <div className="flex items-center justify-between border-b-2 pb-1">
          <p className="text-[24px] text-[#676767] font-semibold leading-loose">
            Dency Pambhar
          </p>
          <Button
            className="bg-[#1A88E1] text-[#fff] rounded-xl hover:bg-[#1A88E1]"
            onClick={() => {}}
          >
            Video Call
          </Button>
        </div>
        <Separator className="bg-[#d7d7d7]" />
        <div className="h-[85%]  overflow-y-scroll">
          {Array.isArray(messages) &&
            messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "ayush@gmail.com"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <p
                  className={`text-white text-[14px] my-2 py-2 px-4 max-w-[50%] w-fit rounded-xl ${
                    msg.sender === "ayush@gmail.com"
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
