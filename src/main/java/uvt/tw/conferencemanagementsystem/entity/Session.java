package uvt.tw.conferencemanagementsystem.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import uvt.tw.conferencemanagementsystem.entity.enums.SessionType;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name="sessions")
public class Session {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @ManyToOne
    @NotNull
    @JoinColumn(name = "conference_id")
    private Conference conference;

    @NotNull
    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(name = "session_type")
    private SessionType sessionType;

    @NotNull
    @Column(name = "start_time")
    private Date startTime;

    @NotNull
    @Column(name = "end_time")
    private Date endTime;

    @Column(name = "max_participants")
    private Integer maxParticipants;

    @Column(name = "created_at")
    private Date createdAt;

    @OneToMany(mappedBy = "session")
    private List<Speaker> speakers;

    @OneToMany(mappedBy = "session")
    private List<SessionAttendee> sessionAttendees;
}
