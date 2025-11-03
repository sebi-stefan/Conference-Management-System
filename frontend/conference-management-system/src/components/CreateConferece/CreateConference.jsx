import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import { CalendarMonth } from '@mui/icons-material';
import BusinessIcon from '@mui/icons-material/Business';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import GroupsIcon from '@mui/icons-material/Groups';
import DescriptionIcon from '@mui/icons-material/Description';
import CreateIcon from '@mui/icons-material/Create';
import LinkIcon from '@mui/icons-material/Link';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { addIcon } from '../../utils/getIcons';
import "./CreateConference.css"

import DatePicker from 'react-datepicker';
import CreateSession from "./CreateSession";
import {useState} from "react";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

function CreateConference({isSessionOpen, onOpenSession}) {

    // const [sessions, setSessions] = useState([]);
    // const [sessionIsOpen, setSessioIsOpen] = useState(false);

    return (
        // <div className={""}>
            <div className={"create-conf-box"}>
                <h1>Create your conference!</h1>
                <form className={"create-conference-form"} noValidate={false} autoComplete={"off"}>
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
                        >Upload Image
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
                                    shrink:true
                                }
                            }}
                        />

                        <TextField
                            label="End Date"
                            fullWidth={true}
                            type={"date"}
                            slotProps={{
                                inputLabel: {
                                    shrink:true
                                }
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
                                    shrink:true
                                }
                            }}
                        />
                    </div>

                    <TextField
                        label="Website"
                        type={"url"}
                        {...addIcon(LinkIcon)}
                    />

                    <TextField
                        label="Description"
                        multiline
                        {...addIcon(DescriptionIcon)}
                    />

                </form>
                <p>Current Sessions added (click to edit): </p>
                <button
                    className={"btn"}
                    onClick={() => !isSessionOpen ? onOpenSession(!isSessionOpen) : null}
                >Add New Session</button>
            </div>
        // </div>
    )
}

export default CreateConference;