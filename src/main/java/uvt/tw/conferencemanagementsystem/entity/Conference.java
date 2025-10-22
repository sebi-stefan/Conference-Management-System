package uvt.tw.conferencemanagementsystem.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import uvt.tw.conferencemanagementsystem.entity.enums.ConferenceStatus;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "conferences")
public class Conference {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @ManyToOne
    @NotNull
    @JoinColumn(name = "organizer_id")
    private User user;

    @NotNull
    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "venue_name")
    private String venueName;

    @Column(name = "venue_address")
    private String venueAddress;

    @NotNull
    @Column(name = "start_date")
    private LocalDate startDate;

    @NotNull
    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(name = "max_attendees")
    private Integer maxAttendees;

    @Column(name = "registration_deadline")
    private LocalDate registrationDeadline;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private ConferenceStatus status;

    @Column(name = "cover_image_url")
    private String coverImageUrl;

    @Column(name = "website_url")
    private String websiteUrl;


    @OneToMany(mappedBy = "conference")
    private List<Session> sessions;

    @OneToMany(mappedBy = "conference")
    private List<ConferenceTag> tags;

    @OneToMany(mappedBy = "conference")
    private List<Registration> registrations;
}
