import {Routes, Route} from "react-router-dom";

import Login from "./Login/Login";
import LandingPage from "./LandingPage/LandingPage";
import Register from "./Register/Register";
import CreateConference from "./CreateConferece/CreateConference";
import Conference from "./CreateConferece/Conference";


function App() {
    return (
        <Routes>
            <Route path={"/"} element={<Conference />} />
            <Route path={"/login"} element={<Login />}  />
            <Route path={"/register"} element={<Register />} />
        </Routes>
    )
}

export default App;
