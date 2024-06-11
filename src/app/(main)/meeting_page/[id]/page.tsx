"use client";

import { useDyteClient, DyteProvider } from "@dytesdk/react-web-core";

import { useEffect, useState } from "react";
import MyMeetingUI from "../../page-components/meeting/meetingUI";

const MeetingPage = ({ params }: { params: { id: string } }) => {
  const [meeting, initMeeting] = useDyteClient();

  useEffect(() => {
    initMeeting({
      authToken: params?.id,
      defaults: {
        audio: false,
        video: false,
      },
    });
  }, []);
  return (
    <>
      <DyteProvider value={meeting}>
        <MyMeetingUI />
      </DyteProvider>
    </>
  );
};

export default MeetingPage;
