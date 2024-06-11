"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

function create_meeting() {
  axios
    .post(
      "https://api.cluster.dyte.in/v2/meetings/",
      {
        title: "V2.0 Test-3 Meeting",
        preferred_region: "ap-south-1",
        record_on_start: false,
        live_stream_on_start: false,
      },
      {
        auth: {
          username: "ad38f256-0ecc-46fb-9925-77c28d08b0df",
          password: "d55e9550d2702c0e8cec",
        },
      }
    )
    .then((response) => {
      console.log(response?.data?.data?.id);
      //   bbb6b6b5-8b24-4af5-8378-eb56c78506ef
    });
}

function join_participant(router: any) {
  axios
    .post(
      "https://api.cluster.dyte.in/v2/meetings/bbb6b6b5-8b24-4af5-8378-eb56c78506ef/participants",
      {
        name: "Hector Salamanca",
        picture: "http://placeimg.com/640/480",
        custom_participant_id: "A",
        preset_name: "group_call_host",
      },
      {
        auth: {
          username: "ad38f256-0ecc-46fb-9925-77c28d08b0df",
          password: "d55e9550d2702c0e8cec",
        },
      }
    )
    .then((response) =>
      router.push(`/meeting_page/${response?.data?.data?.token}`)
    );
  // response?.data?.data?.token
}

const dyte = () => {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => {
          create_meeting();
        }}
        className="bg-[#f00] p-4 rounded text-[#fff]"
      >
        Create a meeting
      </button>
      <br />
      <button
        className="bg-[#f0f] p-4 rounded text-[#fff]"
        onClick={() => {
          join_participant(router);
        }}
      >
        Join As Participant
      </button>
    </>
  );
};

export default dyte;
