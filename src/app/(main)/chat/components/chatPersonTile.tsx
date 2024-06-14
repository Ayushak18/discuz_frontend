const ChatPersonTile = () => {
  return (
    <>
      <div className="flex items-center w-[100%] p-4 bg-[#fff] border-2 rounded-2xl my-2 cursor-pointer">
        <div>
          <img
            src={"/display-picture/display.png"}
            className="w-10 h-10 rounded-full"
            alt="Project Logo"
          ></img>
        </div>
        <div className="w-[80%] mx-4">
          <h1 className="text-[#676767]">Ayush Kamboj</h1>
          <p className="truncate-4 text-[12px] text-[#3F3F3F]">
            You: Lorem ipsum dolor sit
          </p>
        </div>
        <div className="w-fit">
          <h1>Fri</h1>
        </div>
      </div>
    </>
  );
};

export default ChatPersonTile;
