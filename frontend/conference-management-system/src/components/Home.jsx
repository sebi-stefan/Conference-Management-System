import NavBar from "./NavBar/NavBar";
import { useState, useEffect } from "react";
import Discover from "./Discover";
import MyConferences from "./MyConferences";

function Home() {
  const [activeTab, setActiveTab] = useState("discover");
  const [selectedConference, setSelectedConference] = useState(null);
  const [isConferenceCreateModalOpen, setIsConferenceCreateModalOpen] =
    useState(false);
  const [currentUserRole, setCurrentUserRole] = useState("attendee");

  // const userRoles = ["attendee", "organizer", "admin"];

  useEffect(() => {
    setCurrentUserRole("attendee");
  }, []);

  return (
    <div className="index-page">
      <NavBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isConferenceCreateModalOpen={isConferenceCreateModalOpen}
        setIsConferenceCreateModalOpen={setIsConferenceCreateModalOpen}
      />
      {activeTab === "discover" && (
        <Discover currentUserRole={currentUserRole} />
      )}
      {activeTab === "my-conferences" && (
        <MyConferences
          setSelectedConference={setSelectedConference}
          selectedConference={selectedConference}
          isConferenceCreateModalOpen={isConferenceCreateModalOpen}
          setIsConferenceCreateModalOpen={setIsConferenceCreateModalOpen}
          currentUserRole={currentUserRole}
          setCurrentUserRole={setCurrentUserRole}
        />
      )}
    </div>
  );
}

export default Home;
