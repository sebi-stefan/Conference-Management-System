import "./Conference.css";
import TextField from "@mui/material/TextField";
import { addIcon } from "../../utils/getIcons";
import CreateIcon from "@mui/icons-material/Create";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import GroupsIcon from "@mui/icons-material/Groups";
import DescriptionIcon from "@mui/icons-material/Description";
import { useEffect, useState } from "react";

function CreateSession({
  isSessionOpen,
  setIsSessionOpen,
  sessions,
  setSessions,
  data,
  editingIndex,
  setEditingIndex,
}) {
  const [sessionData, setSessionData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    capacity: "",
    room: "",
    description: "",
  });

  const [error, setError] = useState(0);
  const [shake, setShake] = useState(false);
  const [edited, setEdited] = useState(false);

  useEffect(() => {
    if (data && isSessionOpen) setSessionData(data);
  }, [data]);

  function emptySessionsForm() {
    setSessionData({
      title: "",
      startDate: "",
      endDate: "",
      capacity: "",
      room: "",
      description: "",
    });
    setIsSessionOpen(false);
    setError(0);
    setEditingIndex(null);
    setEdited(false);
  }

  // if (
  //   Number(sessionData.startDate.slice(-2)) >
  //   Number(sessionData.endDate.slice(-2))
  // )
  //   setError("The dates should be in chronological order!");
  //
  // if (Object.values(sessionData).includes(""))
  //   setError("Please input all the fields!");
  // return error === null;

  function validateSessionForm() {
    return Object.values(sessionData).includes("");
  }

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setSessionData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });

    if (editingIndex !== null) setEdited(true);
  }

  function handleSaveSession() {
    if (validateSessionForm()) {
      if (error) {
        setShake(true);
        setTimeout(() => setShake(false), 500);
      } else {
        setError(1);
      }
      return;
    }

    if (editingIndex !== null) {
      setSessions((prevSessions) => {
        const newSessions = [...prevSessions];
        newSessions[editingIndex] = sessionData;
        return newSessions;
      });
    } else {
      setSessions([...sessions, sessionData]);
    }
    emptySessionsForm();
  }

  function handleDeleteSession(index) {
    if (window.confirm("Are you sure you want to delete this session?")) {
      setSessions((prevSessions) => prevSessions.filter((_, i) => i !== index));
      emptySessionsForm();
    }
  }

  if (!isSessionOpen) return null;

  return (
    <div className={"create-session-box"}>
      {error !== 0 && (
        <p className={`session-error ${shake ? "shake" : ""}`}>
          Please input all the fields!
        </p>
      )}
      <h1>
        {editingIndex === null
          ? "New Session"
          : `Edit Session #${editingIndex + 1}`}
      </h1>
      <form
        className={"create-session-form"}
        noValidate={false}
        autoComplete={"off"}
      >
        <div className={"pair"}>
          <TextField
            label="Title"
            name={"title"}
            value={sessionData.title}
            onChange={handleChange}
            {...addIcon(CreateIcon)}
            fullWidth={true}
          />
        </div>

        <div className={"pair"}>
          <TextField
            fullWidth={true}
            name={"startDate"}
            value={sessionData.startDate}
            onChange={handleChange}
            type={"date"}
            label={"Start Date"}
            defaultValue={""}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />

          <TextField
            label="End Date"
            name={"endDate"}
            value={sessionData.endDate}
            onChange={handleChange}
            fullWidth={true}
            type={"date"}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        </div>

        <TextField
          label={"Capacity"}
          name={"capacity"}
          value={sessionData.capacity}
          onChange={handleChange}
          fullWidth={true}
          type={"number"}
          {...addIcon(GroupsIcon)}
        />

        <TextField
          label="Room"
          name={"room"}
          value={sessionData.room}
          onChange={handleChange}
          {...addIcon(LocationPinIcon)}
        />

        <TextField
          label="Description"
          name={"description"}
          value={sessionData.description}
          onChange={handleChange}
          multiline
          {...addIcon(DescriptionIcon)}
        />
      </form>
      <div className={"btns-session"}>
        {editingIndex !== null && edited && (
          <button className={"btn"} onClick={handleSaveSession}>
            Update
          </button>
        )}

        {editingIndex === null && (
          <button className={"btn"} onClick={handleSaveSession}>
            Save
          </button>
        )}
        {editingIndex !== null && (
          <button
            className={"btn"}
            onClick={() => handleDeleteSession(editingIndex)}
          >
            Delete
          </button>
        )}
        <button className={"btn"} onClick={emptySessionsForm}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default CreateSession;
