import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import ConferenceCard from "./ConferenceCard";
import "./Discover.css";
import { myConferences as conferences } from "./Home";
import ViewConference, { formatStatusAndTags } from "./ViewConference";

// Extract unique tags from all conferences
const getAllTags = (conferences) => {
  const tagSet = new Set();
  conferences.forEach((conf) => {
    conf.tags.split(",").forEach((tag) => {
      const trimmed = tag.trim();
      if (trimmed) tagSet.add(trimmed);
    });
  });
  return Array.from(tagSet).sort();
};

const Discover = ({
  currentUserRole,
  setSelectedConference,
  selectedConference,
  setIsViewModalOpen,
  isViewModalOpen,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const closeConferenceModal = () => {
    setIsViewModalOpen(false);
    setSelectedConference(null);
  };

  const allTags = useMemo(() => getAllTags(conferences), [conferences]);

  const filteredConferences = useMemo(() => {
    return conferences.filter((conf) => {
      const matchesSearch =
        searchQuery === "" ||
        conf.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        conf.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        conf.locationName.toLowerCase().includes(searchQuery.toLowerCase());

      const confTags = conf.tags.split(",").map((t) => t.trim());
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => confTags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [conferences, searchQuery, selectedTags]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  return (
    <section className="discover">
      <div className="discover__header">
        <h2 className="discover__title">Discover Conferences</h2>
        <p className="discover__subtitle">
          Find and register for upcoming conferences that match your interests
        </p>
      </div>

      <div className="discover__search">
        <Search className="discover__search-icon" />
        <input
          type="text"
          placeholder="Search conferences by name, description, or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="discover__search-input"
        />
      </div>

      <div className="discover__filters">
        <p className="discover__filters-label">Filter by topics:</p>
        <div className="discover__tags">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`discover__tag ${selectedTags.includes(tag) ? "discover__tag--active" : ""}`}
            >
              {formatStatusAndTags(tag)}
            </button>
          ))}
          {selectedTags.length > 0 && (
            <button
              onClick={() => setSelectedTags([])}
              className="discover__tag discover__tag--clear"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      <p className="discover__results-count">
        Showing {filteredConferences.length} of {conferences.length} conferences
      </p>

      {filteredConferences.length > 0 ? (
        <div className="discover__grid">
          {filteredConferences.map((conference, index) => (
            <ConferenceCard
              key={index}
              conference={conference}
              setSelectedConference={setSelectedConference}
              setIsViewModalOpen={setIsViewModalOpen}
            />
          ))}
        </div>
      ) : (
        <div className="discover__empty">
          <p className="discover__empty-title">No conferences found</p>
          <p className="discover__empty-text">
            Try adjusting your search or filter criteria
          </p>
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
};

export default Discover;
