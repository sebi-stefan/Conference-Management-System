import { formatDate } from "../utils/utils";
import { Calendar, MapPin, Users, Globe, Clock } from "lucide-react";
import "./ViewConference.css";
import banner from "../media/banner.jpg";

const getTags = (conference) => {
  const tagSet = new Set();

  conference.tags.split(",").forEach((tag) => {
    tagSet.add(tag.trim().toLowerCase());
  });

  return Array.from(tagSet).map((tag) => {
    return tag.charAt(0).toUpperCase() + tag.slice(1);
  });
};

export const formatStatusAndTags = (status) => {
  return status.slice(0, 1).toUpperCase() + status.slice(1).toLowerCase();
};

const ViewConference = ({ currentUserRole, selectedConference }) => {
  return (
    <div className="view-conference-container">
      <div className="view-conference-banner-wrapper">
        <img
          src={selectedConference.coverImageUrl || banner}
          alt={selectedConference.title}
          className="view-conference-banner"
        />
      </div>

      <div className="view-conference-header">
        <div className="view-conference-title-row">
          <h1 className="view-conference-title">{selectedConference.title}</h1>
          <span className="view-conference-status-tag">
            {formatStatusAndTags(selectedConference.status)}
          </span>
        </div>

        <h2 className="view-conference-organizer">
          Hosted by {selectedConference.organizer.firstName}{" "}
          {selectedConference.organizer.lastName}
        </h2>

        <div className="view-conference-tags">
          {getTags(selectedConference).map((tag, index) => (
            <span key={index} className="view-conference-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="view-conference-description">
        <p>{selectedConference.description}</p>
      </div>

      <div className="view-conference-info-container">
        <div className="view-container-info-item">
          <Calendar className="view-conference-icon" />
          <div className="view-conference-text-wrapper">
            <span className="view-conference-label">Event Dates</span>
            <span className="view-conference-text">
              {formatDate(selectedConference.startDate)} -{" "}
              {formatDate(selectedConference.endDate)}
            </span>
          </div>
        </div>

        <div className="view-container-info-item">
          <MapPin className="view-conference-icon" />
          <div className="view-conference-text-wrapper">
            <span className="view-conference-label">Venue</span>
            <span className="view-conference-text">
              {selectedConference.venueName}
            </span>
            <span className="view-conference-subtext">
              {selectedConference.venueAddress}
            </span>
          </div>
        </div>

        <div className="view-container-info-item">
          <Users className="view-conference-icon" />
          <div className="view-conference-text-wrapper">
            <span className="view-conference-label">Capacity</span>
            <span className="view-conference-text">
              {selectedConference.maxAttendees} attendees
            </span>
          </div>
        </div>

        <div className="view-container-info-item">
          <Clock className="view-conference-icon" />
          <div className="view-conference-text-wrapper">
            <span className="view-conference-label">Registration Deadline</span>
            <span className="view-conference-text">
              {formatDate(selectedConference.registrationDeadline)}
            </span>
          </div>
        </div>

        <div className="view-container-info-item">
          <Globe className="view-conference-icon" />
          <div className="view-conference-text-wrapper">
            <span className="view-conference-label">Website</span>
            <a
              href={selectedConference.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="view-conference-link"
            >
              Visit Conference Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewConference;
