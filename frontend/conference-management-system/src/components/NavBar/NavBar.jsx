import { Calendar } from "lucide-react";
import "./NavBar.css";

const NavBar = ({
  activeTab = "discover",
  onTabChange,
  isConferenceModalOpen,
  setIsConferenceModalOpen,
}) => {
  const tabs = ["Discover", "My Conferences"];

  return (
    <nav className={`navbar ${isConferenceModalOpen ? "blurred" : ""}`}>
      <div className="navbar__brand">
        <Calendar className="navbar__icon" />
        <div className="navbar__brand-text">
          <h1 className="navbar__title">ConferenceHub</h1>
          <p className="navbar__subtitle">Conference Management System</p>
        </div>
      </div>
      <div className="navbar__tabs">
        {tabs.map((tab) => {
          const tabId = tab.toLowerCase().replace(" ", "-");
          const isActive = activeTab === tabId;
          return (
            <button
              key={tab}
              onClick={() => onTabChange?.(tabId)}
              className={`navbar__tab ${isActive ? "navbar__tab--active" : ""}`}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
