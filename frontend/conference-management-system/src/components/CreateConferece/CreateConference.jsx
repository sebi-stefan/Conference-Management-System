import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import { CalendarMonth } from "@mui/icons-material";
import BusinessIcon from "@mui/icons-material/Business";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import GroupsIcon from "@mui/icons-material/Groups";
import DescriptionIcon from "@mui/icons-material/Description";
import CreateIcon from "@mui/icons-material/Create";
import LinkIcon from "@mui/icons-material/Link";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { addIcon } from "../../utils/utils";
import "./Conference.css";

import DatePicker from "react-datepicker";
import CreateSession from "./CreateSession";
import { useState } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function CreateConference({
  isSessionOpen,
  setIsSessionOpen,
  sessions,
  setOpenSessionData,
  setEditingIndex,
}) {
  const [conferenceData, setConferenceData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    locationName: "",
    locationAddress: "",
    capacity: "",
    registrationDeadline: "",
    website: "",
    description: "",
  });

  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setConferenceData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function validateConferenceForm() {
    if (Object.values(conferenceData).includes("")) {
      setError("Please complete all the fields!");
      return 0;
    }

    const startDate = new Date(conferenceData.startDate);
    const endDate = new Date(conferenceData.endDate);
    const registrationDeadline = new Date(conferenceData.registrationDeadline);

    if (startDate > endDate) {
      setError("The start date should be before the end date!");
      return 0;
    }

    if (startDate <= registrationDeadline) {
      setError("The registration deadline should be before the start date!");
      return 0;
    }
    return 1;
  }

  function handleSaveConference() {
    if (validateConferenceForm() === 0) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setTimeout(() => setError(""), 1000);
      return;
    }

    console.log("Saved");
  }

  function editSession(session, index) {
    if (isSessionOpen === false) {
      setOpenSessionData({
        title: session.title,
        startDate: session.startDate,
        endDate: session.endDate,
        capacity: session.capacity,
        room: session.room,
        description: session.description,
      });
      setIsSessionOpen(true);
      setEditingIndex(index);
    }
  }

  return (
    <div className={"create-conf-box"}>
      {/*{error !== "" && (*/}
      {/*  <p className={`session-error ${shake ? "shake" : ""}`}>{error}</p>*/}
      {/*)}*/}
      <p className={`session-error ${shake ? "shake" : ""}`}>{error}</p>
      <h1>Create your conference!</h1>
      <form
        className={"create-conference-form"}
        noValidate={false}
        autoComplete={"off"}
      >
        <div className={"pair"}>
          <TextField
            label="Title"
            name={"title"}
            value={conferenceData.title}
            {...addIcon(CreateIcon)}
            fullWidth={true}
            autoFocus={true}
            onChange={handleChange}
          />

          {/*<Button*/}
          {/*  component="label"*/}
          {/*  role={undefined}*/}
          {/*  variant="contained"*/}
          {/*  tabIndex={-1}*/}
          {/*  size={"small"}*/}
          {/*  startIcon={<CloudUploadIcon />}*/}
          {/*>*/}
          {/*  Upload Image*/}
          {/*  <VisuallyHiddenInput*/}
          {/*    type="file"*/}
          {/*    onChange={(event) => console.log(event.target.files)}*/}
          {/*    multiple*/}
          {/*  />*/}
          {/*</Button>*/}
        </div>

        <div className={"pair"}>
          <TextField
            fullWidth={true}
            type={"date"}
            name={"startDate"}
            value={conferenceData.startDate}
            label={"Start Date"}
            defaultValue={""}
            onChange={handleChange}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />

          <TextField
            label="End Date"
            name={"endDate"}
            value={conferenceData.endDate}
            fullWidth={true}
            onChange={handleChange}
            type={"date"}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        </div>

        <div className={"pair"}>
          <TextField
            label="Location Name"
            name={"locationName"}
            onChange={handleChange}
            value={conferenceData.locationName}
            fullWidth={true}
            {...addIcon(BusinessIcon)}
          />

          <TextField
            label="Location Address"
            name={"locationAddress"}
            onChange={handleChange}
            value={conferenceData.locationAddress}
            fullWidth={true}
            {...addIcon(LocationPinIcon)}
          />
        </div>

        <div className={"pair"}>
          <TextField
            label={"Capacity"}
            name={"capacity"}
            onChange={handleChange}
            value={conferenceData.capacity}
            fullWidth={true}
            type={"number"}
            {...addIcon(GroupsIcon)}
          />

          <TextField
            label={"Registration Deadline"}
            name={"registrationDeadline"}
            value={conferenceData.registrationDeadline}
            fullWidth={true}
            onChange={handleChange}
            type={"date"}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        </div>

        <TextField
          label="Website"
          type={"url"}
          onChange={handleChange}
          {...addIcon(LinkIcon)}
          name={"website"}
          value={conferenceData.website}
        />

        <TextField
          label="Description"
          name={"description"}
          onChange={handleChange}
          value={conferenceData.description}
          multiline
          {...addIcon(DescriptionIcon)}
        />
      </form>
      {/*<p>*/}
      {/*  {`Current Sessions added (click to edit): `}*/}
      {/*  {sessions.length*/}
      {/*    ? sessions.map((session, index) => (*/}
      {/*        <span*/}
      {/*          key={index}*/}
      {/*          onClick={() => editSession(session, index)}*/}
      {/*        >{`${session.title} `}</span>*/}
      {/*      ))*/}
      {/*    : ""}*/}
      {/*</p>*/}

      <div className={"btns-session"}>
        <button className={"btn"} onClick={handleSaveConference}>
          Save
        </button>

        {/*<button*/}
        {/*  className={"btn"}*/}
        {/*  onClick={() =>*/}
        {/*    !isSessionOpen ? setIsSessionOpen(!isSessionOpen) : null*/}
        {/*  }*/}
        {/*>*/}
        {/*  Add New Session*/}
        {/*</button>*/}
      </div>
    </div>
  );
}

export default CreateConference;
