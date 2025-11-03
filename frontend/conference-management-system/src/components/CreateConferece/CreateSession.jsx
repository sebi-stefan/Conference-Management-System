import './CreateConference.css'
import TextField from "@mui/material/TextField";
import {addIcon} from "../../utils/getIcons";
import CreateIcon from "@mui/icons-material/Create";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import GroupsIcon from "@mui/icons-material/Groups";
import DescriptionIcon from "@mui/icons-material/Description";
import {useState} from "react";

function CreateSession({isSessionOpen, onOpenSession}) {

    const [sessionData, setSessionData] = useState({
        title: "",
        startDate: "",
        endDate: "",
        capacity: "",
        room: "",
        description: ""
    })

    function handleChange(e) {
        const {name, value} =  e.event;
    }

    if(!isSessionOpen) return null;

    return (
                <div className={"create-session-box"}>
                    <h1>Session</h1>
                    <form className={"create-session-form"} noValidate={false} autoComplete={"off"}>
                        <div className={"pair"}>
                            <TextField
                                label="Title"
                                name={"title"}
                                value={sessionData.title}
                                {...addIcon(CreateIcon)}
                                fullWidth={true}
                                autoFocus={true}
                            />

                        </div>

                        <div className={"pair"}>
                            <TextField
                                fullWidth={true}
                                name={"startDate"}
                                value={sessionData.startDate}
                                type={"date"}
                                label={"Start Date"}
                                defaultValue={""}
                                slotProps={{
                                    inputLabel: {
                                        shrink:true
                                    }
                                }}
                            />

                            <TextField
                                label="End Date"
                                name={"endDate"}
                                value={sessionData.endDate}
                                fullWidth={true}
                                type={"date"}
                                slotProps={{
                                    inputLabel: {
                                        shrink:true
                                    }
                                }}
                            />
                        </div>

                        <TextField
                            label={"Capacity"}
                            name={"capacity"}
                            value={sessionData.capacity}
                            fullWidth={true}
                            type={"number"}
                            {...addIcon(GroupsIcon)}
                        />



                        <TextField
                            label="Room"
                            name={"room"}
                            value={sessionData.room}
                            {...addIcon(LocationPinIcon)}
                        />

                        <TextField
                            label="Description"
                            name={"description"}
                            value={sessionData.description}
                            multiline
                            {...addIcon(DescriptionIcon)}
                        />

                    </form>
                    <div className={"btns-session"}>
                        <button className={"btn"}>Save Session</button>
                        <button
                            className={"btn"}
                            onClick={() => onOpenSession(!isSessionOpen)}
                        >Cancel</button>
                    </div>

                </div>
    )
}

export default CreateSession