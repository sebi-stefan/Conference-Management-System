const conference = {
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
};

const sessions = [
  {
    title: "First session",
    description: "This is the starting session for our conference",
    room: "A34",
    startDate: "2025-12-21",
    endDate: "2025-12-22",
    capacity: 250,
  },
  {
    title: "2nd session",
    description: "Text for 2nd",
    room: "B54",
    startDate: "2025-12-23",
    endDate: "2025-12-24",
    capacity: 240,
  },
  {
    title: "3rd session",
    description: "Text for 3rd",
    room: "G45",
    startDate: "2025-12-25",
    endDate: "2025-12-26",
    capacity: 300,
  },
];

const ViewConference = ({ currentUserRole }) => {
  return (
    <div className={"view-conference-container"}>
      <h1>Your role is {currentUserRole}</h1>
      <p>{conference.description}</p>
    </div>
  );
};

export default ViewConference;
