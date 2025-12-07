import CreateConference from "./CreateConference";
import CreateSession from "./CreateSession";
import { useState } from "react";
import "./Conference.css";

function Conference({ conferenceData }) {
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
    <div className="conference-container">
      <CreateConference
        isSessionOpen={isSessionOpen}
        setIsSessionOpen={setIsSessionOpen}
        sessions={sessions}
        setSessions={setSessions}
        setOpenSessionData={setOpenSessionData}
        setEditingIndex={setEditingIndex}
        conferenceData={conferenceData}
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
