"use client";

import SideNav from "../page-components/Side-Nav";
import ChatSection from "./components";

const Chat = () => {
  return (
    <>
      <div className="flex h-full justify-between">
        <SideNav />
        <ChatSection />
      </div>
    </>
  );
};

export default Chat;
