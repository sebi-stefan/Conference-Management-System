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

import { addIcon } from "../../utils/getIcons";
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
      <h1>Create your conference!</h1>
      <form
        className={"create-conference-form"}
        noValidate={false}
        autoComplete={"off"}
      >
        <div className={"pair"}>
          <TextField
            label="Title"
            {...addIcon(CreateIcon)}
            fullWidth={true}
            autoFocus={true}
          />

          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            size={"small"}
            startIcon={<CloudUploadIcon />}
          >
            Upload Image
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
              multiple
            />
          </Button>
        </div>

        <div className={"pair"}>
          <TextField
            fullWidth={true}
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
            fullWidth={true}
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
            fullWidth={true}
            {...addIcon(BusinessIcon)}
          />

          <TextField
            label="Location Address"
            fullWidth={true}
            {...addIcon(LocationPinIcon)}
          />
        </div>

        <div className={"pair"}>
          <TextField
            label={"Capacity"}
            fullWidth={true}
            type={"number"}
            {...addIcon(GroupsIcon)}
          />

          <TextField
            label={"Registration Deadline"}
            fullWidth={true}
            type={"date"}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        </div>

        <TextField label="Website" type={"url"} {...addIcon(LinkIcon)} />

        <TextField
          label="Description"
          multiline
          {...addIcon(DescriptionIcon)}
        />
      </form>
      <p>
        {`Current Sessions added (click to edit): `}
        {sessions.length
          ? sessions.map((session, index) => (
              <span
                key={index}
                onClick={() => editSession(session, index)}
              >{`${session.title} `}</span>
            ))
          : ""}
      </p>
      <button
        className={"btn"}
        onClick={() =>
          !isSessionOpen ? setIsSessionOpen(!isSessionOpen) : null
        }
      >
        Add New Session
      </button>
    </div>
  );
}

export default CreateConference;
