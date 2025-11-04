import CreateConference from "./CreateConference";
import CreateSession from "./CreateSession";
import {useState} from "react";

const styles = {
    display: "flex",
    flexDirection: "row",
    gap: '40px',
    alignItems: 'center',
    justifyContent: 'center',
    height: '95vh'
}

function Conference() {

    const [isSessionOpen, setIsSessionOpen] = useState(false);

    return (
        <div style={{...styles}}>
            <CreateConference
                isSessionOpen={isSessionOpen}
                onOpenSession={setIsSessionOpen}
            />
            <CreateSession
                isSessionOpen={isSessionOpen}
                onOpenSession={setIsSessionOpen}
            />
        </div>
    )
}

export default Conference