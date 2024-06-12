"use client";

import SideNav from "../page-components/Side-Nav";
import ChatHistorySection from "./components";

const chat = () => {
  return (
    <>
      <div className="flex h-full justify-between">
        <SideNav />
        <ChatHistorySection />
      </div>
    </>
  );
};

export default chat;
