import CreateConference from "./CreateConference";
import CreateSession from "./CreateSession";
import { useState } from "react";

const styles = {
  display: "flex",
  flexDirection: "row",
  gap: "40px",
  alignItems: "center",
  justifyContent: "center",
  height: "95vh",
};

// the user cant add a session until he completed the conference details
// session date, startTime, endTime chronological and session date to be inside startDate endDate interval of conference

function Conference() {
  const [isSessionOpen, setIsSessionOpen] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const [openSessionData, setOpenSessionData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    capacity: "",
    room: "",
    description: "",
  });

  return (
    <div style={{ ...styles }}>
      <CreateConference
        isSessionOpen={isSessionOpen}
        setIsSessionOpen={setIsSessionOpen}
        sessions={sessions}
        setSessions={setSessions}
        setOpenSessionData={setOpenSessionData}
        setEditingIndex={setEditingIndex}
      />
      <CreateSession
        isSessionOpen={isSessionOpen}
        setIsSessionOpen={setIsSessionOpen}
        sessions={sessions}
        setSessions={setSessions}
        data={openSessionData}
        editingIndex={editingIndex}
        setEditingIndex={setEditingIndex}
      />
    </div>
  );
}

export default Conference;
