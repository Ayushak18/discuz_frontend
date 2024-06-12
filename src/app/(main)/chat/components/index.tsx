import ChatHistorySection from "./chatHistorySection";
import ChatList from "./chatList";

const Chat = () => {
  return (
    <>
      <div className="flex h-[100%] w-[85%] justify-around">
        <ChatHistorySection />
        <ChatList />
      </div>
    </>
  );
};

export default Chat;
