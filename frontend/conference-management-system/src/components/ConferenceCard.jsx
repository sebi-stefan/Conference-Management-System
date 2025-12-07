import { Calendar, MapPin, Users, Globe, Clock } from "lucide-react";
import "./ConferenceCard.css";

const ConferenceCard = ({
  conference,
  mode = "display",
  currentUserRole,
  setIsViewModalOpen,
  setSelectedConference,
}) => {
  const tags = conference.tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleViewClick = () => {
    setSelectedConference(conference);
    setIsViewModalOpen(true);
  };

  return (
    <div className="conference-card">
      {/* Tags */}
      <div className="conference-card__tags">
        {tags.map((tag, index) => (
          <span key={index} className="conference-card__tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="conference-card__title">{conference.title}</h3>

      {/* Description */}
      <p className="conference-card__description">{conference.description}</p>

      {/* Info Grid */}
      <div className="conference-card__info">
        <div className="conference-card__info-item">
          <Calendar className="conference-card__info-icon" />
          <span className="conference-card__info-text">
            {formatDate(conference.startDate)} -{" "}
            {formatDate(conference.endDate)}
          </span>
        </div>

        <div className="conference-card__info-item">
          <MapPin className="conference-card__info-icon" />
          <span className="conference-card__info-text">
            {conference.locationName}
          </span>
        </div>

        <div className="conference-card__info-item">
          <Users className="conference-card__info-icon" />
          <span className="conference-card__info-text">
            {conference.capacity} attendees
          </span>
        </div>

        <div className="conference-card__info-item">
          <Clock className="conference-card__info-icon conference-card__info-icon--accent" />
          <span className="conference-card__info-text">
            Register by {formatDate(conference.registrationDeadline)}
          </span>
        </div>
      </div>

      {/* Actions */}
      {mode === "display" ? (
        <div className="conference-card__actions">
          {/*<a*/}
          {/*  href={conference.website}*/}
          {/*  target="_blank"*/}
          {/*  rel="noopener noreferrer"*/}
          {/*  className="conference-card__btn conference-card__btn--primary"*/}
          {/*>*/}
          {/*  <Globe className="conference-card__btn-icon" />*/}
          {/*  Visit Website*/}
          {/*</a>*/}
          <button
            className="conference-card__btn conference-card__btn--accent"
            onClick={handleViewClick}
          >
            Register Now
          </button>
        </div>
      ) : (
        <button
          className={"conference-card__btn conference-card__btn--primary"}
          onClick={handleViewClick}
        >
          View
        </button>
      )}
    </div>
  );
};

export default ConferenceCard;
