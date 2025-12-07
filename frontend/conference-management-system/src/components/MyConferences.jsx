import "./MyConferences.css";
import ConferenceCard from "./ConferenceCard";
import { useState } from "react";
import Conference from "./CreateConferece/Conference";
import { useEffect } from "react";
import conference from "./CreateConferece/Conference";
import ViewConference from "./ViewConference";

const myConferences = [
  {
    title: "AI & Machine Learning Summit 2025",
    startDate: "2025-03-15",
    endDate: "2025-03-17",
    locationName: "San Francisco Convention Center",
    locationAddress: "747 Howard St, San Francisco, CA",
    capacity: "5000",
    registrationDeadline: "2025-03-01",
    website: "https://example.com/ai-summit",
    description:
      "Join industry leaders and researchers for three days of cutting-edge AI discussions, workshops, and networking opportunities. Explore the latest in deep learning, NLP, and computer vision.",
    tags: "AI, Technology, Machine Learning",
  },
  {
    title: "Global Sales Excellence Conference",
    startDate: "2025-04-20",
    endDate: "2025-04-22",
    locationName: "Marriott Marquis New York",
    locationAddress: "1535 Broadway, New York, NY",
    capacity: "3000",
    registrationDeadline: "2025-04-05",
    website: "https://example.com/sales-conf",
    description:
      "Elevate your sales strategies with insights from top performers worldwide. Learn proven techniques for closing deals, building relationships, and driving revenue growth.",
    tags: "Sales, Business, Marketing",
  },
  {
    title: "Startup Founders Conference",
    startDate: "2025-07-12",
    endDate: "2025-07-13",
    locationName: "Austin Convention Center",
    locationAddress: "500 E Cesar Chavez St, Austin, TX",
    capacity: "2500",
    registrationDeadline: "2025-06-28",
    website: "https://example.com/startup-conf",
    description:
      "Connect with fellow entrepreneurs, VCs, and mentors. Learn from successful founders and get practical advice on scaling your startup to the next level.",
    tags: "Business, Startup, Technology",
  },
  {
    title: "Data Science & Analytics World",
    startDate: "2025-08-18",
    endDate: "2025-08-20",
    locationName: "Seattle Convention Center",
    locationAddress: "705 Pike St, Seattle, WA",
    capacity: "3500",
    registrationDeadline: "2025-08-03",
    website: "https://example.com/data-science",
    description:
      "Master the art of data storytelling, predictive analytics, and business intelligence. Hands-on workshops with industry experts using real-world datasets.",
    tags: "AI, Science, Technology",
  },
];

function MyConferences({
  selectedConference,
  setSelectedConference,
  isConferenceCreateModalOpen,
  setIsConferenceCreateModalOpen,
  currentUserRole,
  setCurrentUserRole,
}) {
  const openConferenceCreateModal = () => {
    setIsConferenceCreateModalOpen(true);
  };

  const closeConferenceModal = () => {
    setIsConferenceCreateModalOpen(false);
    setIsViewModalOpen(false);
    setSelectedConference(null);
  };

  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

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
            <ViewConference currentUserRole={currentUserRole} />
          </div>
        </div>
      )}
    </section>
  );
}

export default MyConferences;
