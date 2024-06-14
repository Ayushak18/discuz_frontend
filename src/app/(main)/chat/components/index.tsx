import ChatHistorySection from "./chatHistorySection";
import ChatList from "./chatList";

const ChatSection = () => {
  return (
    <>
      <div className="flex h-[100%] w-[100%] justify-around">
        <ChatHistorySection />
        <ChatList />
      </div>
    </>
  );
};

export default ChatSection;
