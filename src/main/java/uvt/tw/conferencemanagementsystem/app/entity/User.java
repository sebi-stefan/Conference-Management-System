package uvt.tw.conferencemanagementsystem.app.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import uvt.tw.conferencemanagementsystem.api.dto.user.enums.UserRole;

import java.util.List;


@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "email")
    private String email;

    @NotNull
    @Column(name = "password_hash")
    private String passwordHash;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "role")
    private UserRole role;

    @NotNull
    @Column(name = "first_name")
    private String firstName;

    @NotNull
    @Column(name = "last_name")
    private String lastName;

    @Column(name = "bio")
    private String bio;

    @Column(name = "organization")
    private String organization;

    @Column(name = "profile_picture_url")
    private String profilePictureUrl;


    @OneToMany(mappedBy = "user")
    private List<Conference> conferences;

    @OneToMany(mappedBy = "user")
    private List<SessionAttendee> sessionAttendees;

    @OneToMany(mappedBy = "user")
    private List<Speaker> speakers;

    @OneToMany(mappedBy = "user")
    private List<Registration> registrations;
}
