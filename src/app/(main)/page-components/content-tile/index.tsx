import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const ContentTile = ({ content }: { content: any }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleTileClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`bg-[#3f3f3f] m-2 p-3 w-[47%] h-[80px] text-[#fff] rounded-2xl flex items-center cursor-pointer hover:bg-[#1A88E1] duration-500`}
        onClick={handleTileClick}
      >
        <img
          className="rounded-[100%] w-[10%] h-[100%]"
          src="/display-picture/display.png"
          alt="Project Logo"
        />
        <div className="ml-[1rem]">
          <h3 className="text-[90%]">{content.product}</h3>
          <p className="text-[60%] my-[1%]">{content.product_desc}</p>
          <p className="text-[70%]">{content.date}</p>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 pb-4  w-[40%] h-[50%] flex flex-col items-start justify-around rounded-xl">
            <div className="h-[30%] w-[20%] relative rounded-full">
              <Image
                src="/display-picture/display.png"
                alt="User Image"
                fill={true}
                objectFit="fill"
                className="rounded-full"
              />
            </div>

            <h2 className="text-[28px] font-bold">{content.product}</h2>
            <p>{`₹${content.budget_max} - ₹${content.budget_min}`}</p>
            <p className="">{content.product_desc}</p>
            <p>{content.date}</p>
            <div>
              {/* {content?.isAccepted ? (
                <button
                  className="mt-4 bg-blue-500 text-white px-4  m-2 py-2 rounded"
                  onClick={() => router.push("/meeting_page")}
                >
                  Start Meeting
                </button>
              ) : (
                <button
                  className="mt-4 bg-blue-500 text-white px-4  m-2 py-2 rounded"
                  // onClick={() => }
                >
                  Accept request
                </button>
              )} */}

              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContentTile;
