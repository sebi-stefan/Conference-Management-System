import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import ConferenceCard from "./ConferenceCard";
import "./Discover.css";

const sampleConferences = [
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
    title: "International Science & Research Forum",
    startDate: "2025-05-10",
    endDate: "2025-05-14",
    locationName: "MIT Media Lab",
    locationAddress: "75 Amherst St, Cambridge, MA",
    capacity: "2000",
    registrationDeadline: "2025-04-25",
    website: "https://example.com/science-forum",
    description:
      "A premier gathering of scientists, researchers, and innovators presenting groundbreaking discoveries across physics, biology, chemistry, and environmental sciences.",
    tags: "Science, Research, Innovation",
  },
  {
    title: "Healthcare Innovation Summit",
    startDate: "2025-06-05",
    endDate: "2025-06-07",
    locationName: "Boston Convention Center",
    locationAddress: "415 Summer St, Boston, MA",
    capacity: "4000",
    registrationDeadline: "2025-05-20",
    website: "https://example.com/healthcare-summit",
    description:
      "Discover the future of healthcare with sessions on telemedicine, AI diagnostics, personalized medicine, and digital health transformation strategies.",
    tags: "Healthcare, Technology, AI",
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

const Discover = ({ currentUserRole }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [isDetailsAndRegisterWindowOpen, setIsDetailsAndRegisterWindowOpen] =
    useState(false);

  // This list will be populated from backend
  const conferences = sampleConferences;

  const allTags = useMemo(() => getAllTags(conferences), [conferences]);

  const filteredConferences = useMemo(() => {
    return conferences.filter((conf) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        conf.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        conf.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        conf.locationName.toLowerCase().includes(searchQuery.toLowerCase());

      // Tag filter
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
      {/* Header */}
      <div className="discover__header">
        <h2 className="discover__title">Discover Conferences</h2>
        <p className="discover__subtitle">
          Find and register for upcoming conferences that match your interests
        </p>
      </div>

      {/* Search Bar */}
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

      {/* Tag Filters */}
      <div className="discover__filters">
        <p className="discover__filters-label">Filter by topics:</p>
        <div className="discover__tags">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`discover__tag ${selectedTags.includes(tag) ? "discover__tag--active" : ""}`}
            >
              {tag}
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

      {/* Results Count */}
      <p className="discover__results-count">
        Showing {filteredConferences.length} of {conferences.length} conferences
      </p>

      {/* Conference Grid */}
      {filteredConferences.length > 0 ? (
        <div className="discover__grid">
          {filteredConferences.map((conference, index) => (
            <ConferenceCard key={index} conference={conference} />
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
    </section>
  );
};

export default Discover;
