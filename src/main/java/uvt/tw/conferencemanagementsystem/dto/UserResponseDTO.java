package uvt.tw.conferencemanagementsystem.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;
import uvt.tw.conferencemanagementsystem.entity.enums.UserRole;

import java.util.List;

@Data
@Builder
public class UserResponseDTO {
    List<SessionAttendeeResponseDTO> sessionAttendees;
    List<SpeakerResponseDTO> speakers;
    List<RegistrationResponseDTO> registrations;
    List<ConferenceResponseDTO> conferences;
    @NotNull
    String email;

    @NotNull
    String username;

    @NotNull
    UserRole role;

    @NotNull
    String firstName;

    @NotNull
    String lastName;

    String bio;

    String organization;

    String profilePictureUrl;

}
