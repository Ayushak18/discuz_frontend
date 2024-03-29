// import { Separator } from "@/components/ui/separator";
// const Messages = () => {
//   const Chats = [{
//     name:'Dency',
//     message: 'Hello World!',
//     profile: '/display-picture/display.png',
//   },
//   {
//     name:'Dency',
//     message: 'Hello World!',
//     profile: '/display-picture/display.png',
//   },
//   {
//     name:'Dency',
//     message: 'Hello World!',
//     profile: '/display-picture/display.png',
//   },
//   ]
//   return (
//     <>

//     <div className="bg-[#fff] w-[58%] h-[96.5vh] my-[1%] rounded-3xl py-[1%]">
//       <div className="flex items-center justify-start mx-[4%] h-[6%]">
//             <h1 className="text-[#717171] lg:text-[20px] md:text-[16px] font-medium">
//               Ayush Kamboj
//             </h1>
//         </div>
//         <Separator className="bg-[#d7d7d7] w-[95%] mx-auto h-[0.2rem] text-center " />
//     </div>
//     <div className="bg-[#fff] w-[20%] h-[96.5vh] m-[1%] rounded-3xl py-[1%]">
//       <div className="flex items-center justify-start mx-[4%] h-[6%]">
//         <h1 className="text-[#717171] lg:text-[20px] md:text-[16px] font-bold">
//           Chats
//         </h1>
//         <div className="w-[100%] flex flex-col">

//         </div>
//           {Chats.map((chat)=>{
//             return <div>

//             </div>
//           })}
//       </div>
//           <Separator className="bg-[#d7d7d7] w-[95%] mx-auto h-[0.2rem] text-center " />
//     </div>
//   </>
//   );
// };

"use client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { useState, useEffect } from "react";
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";
import "./chats.css";
import React from "react";
import { useRouter } from "next/navigation";

const Chats = () => {
  const router = useRouter();
  if (!sessionStorage.getItem("userData")) {
    router.push("/login");
  }

  let loggedInUser: any = sessionStorage.getItem("userData");
  loggedInUser = JSON.parse(loggedInUser);

  const user = {
    username: loggedInUser.user.email,
    secret: loggedInUser.user.email,
  };

  const { mutate, isError, isSuccess }: any = useMutation({
    mutationFn: (newChatUser) => {
      return axios
        .post("http://3.6.132.27/api/authenticate", newChatUser)
        .then((resposne) => console.log(resposne));
    },
  });

  useEffect(() => {
    {
      mutate({
        username: loggedInUser.email,
        secret: loggedInUser.email,
      });
    }
  }, []);

  return (
    <>
      <div className="chats">
        <ChatsPage user={user} />
      </div>
    </>
  );
};

export default Chats;
