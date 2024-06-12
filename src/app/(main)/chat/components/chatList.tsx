import { Separator } from "@/components/ui/separator";
import ChatPersonTile from "./chatPersonTile";

const ChatList = () => {
  return (
    <>
      <div className="bg-[#fff] w-[28%] h-[98vh] my-2 rounded-3xl p-4">
        <h2 className="text-[24px] text-[#676767] font-semibold leading-loose">
          Chats
        </h2>
        <Separator className="bg-[#d7d7d7]" />
        <ChatPersonTile />
        <ChatPersonTile />
        <ChatPersonTile />
        <ChatPersonTile />
        <ChatPersonTile />
        <ChatPersonTile />
        <ChatPersonTile />
      </div>
    </>
  );
};

export default ChatList;
