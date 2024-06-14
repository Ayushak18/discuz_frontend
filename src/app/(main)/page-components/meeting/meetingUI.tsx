import { DyteMeeting } from "@dytesdk/react-ui-kit";
import { useDyteMeeting } from "@dytesdk/react-web-core";

export default function MyMeetingUI() {
  const { meeting } = useDyteMeeting();

  return (
    <div style={{ height: "100vh", width: "100%", padding: "20px" }}>
      <DyteMeeting mode="fill" meeting={meeting} showSetupScreen={false} />
    </div>
  );
}
