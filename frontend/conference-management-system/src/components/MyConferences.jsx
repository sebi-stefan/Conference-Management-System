import "./MyConferences.css";
import ConferenceCard from "./ConferenceCard";
import { useState } from "react";
import Conference from "./CreateConferece/Conference";
import { useEffect } from "react";
import conference from "./CreateConferece/Conference";
import ViewConference from "./ViewConference";
import { myConferences } from "./Home";

function MyConferences({
  selectedConference,
  setSelectedConference,
  isConferenceCreateModalOpen,
  setIsConferenceCreateModalOpen,
  currentUserRole,
  setCurrentUserRole,
  isViewModalOpen,
  setIsViewModalOpen,
}) {
  const openConferenceCreateModal = () => {
    setIsConferenceCreateModalOpen(true);
  };

  const closeConferenceModal = () => {
    setIsConferenceCreateModalOpen(false);
    setIsViewModalOpen(false);
    setSelectedConference(null);
  };

  return (
    <section className="my-conferences">
      {/* Main content with blur effect when modal is open */}
      <div
        className={`my-conferences-content ${isConferenceCreateModalOpen || isViewModalOpen ? "blurred" : ""}`}
      >
        <div className="my-conferences-header">
          <h2 className="my-conferences-title">Manage your conferences</h2>
          <p className="my-conferences-subtitle">
            Create new conferences or add sessions to existing conferences
          </p>
        </div>

        <div className={"my-conferences-header-options"}>
          <p className={"my-conferences-subtitle"}>Your current conferences:</p>
          <div className={"my-conferences-options"}>
            <button
              className={"my-conferences-btn"}
              onClick={openConferenceCreateModal}
            >
              Create Conference
            </button>
          </div>
        </div>

        <div className="my-conferences-display-grid">
          {myConferences.map((conference, index) => (
            <ConferenceCard
              key={index}
              conference={conference}
              mode={"edit"}
              setIsViewModalOpen={setIsViewModalOpen}
              currentUserRole={currentUserRole}
              setSelectedConference={setSelectedConference}
            />
          ))}
        </div>
      </div>

      {/* Modal overlay and content */}
      {isConferenceCreateModalOpen && (
        <div
          className="conference-modal-overlay"
          onClick={closeConferenceModal}
        >
          <div
            className="conference-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="conference-modal-close"
              onClick={closeConferenceModal}
            >
              ×
            </button>
            <Conference />
          </div>
        </div>
      )}

      {isViewModalOpen && (
        <div className="conference-modal-overlay">
          <div
            className="conference-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="conference-modal-close"
              onClick={closeConferenceModal}
            >
              ×
            </button>
            <ViewConference
              currentUserRole={currentUserRole}
              selectedConference={selectedConference}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default MyConferences;
