package uvt.tw.conferencemanagementsystem.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;
import uvt.tw.conferencemanagementsystem.entity.Session;
import uvt.tw.conferencemanagementsystem.entity.enums.ConferenceStatus;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
public class ConferenceResponseDTO {
    @NotNull
    List<SessionResponseDTO> sessions;

    List<TagResponseDTO> tags;

    @NotNull
    UserResponseDTO organizer;

    @NotNull
    String title;

    String description;

    String venueName;

    String venueAddress;

    @NotNull
    LocalDate startDate;

    @NotNull
    LocalDate endDate;

    Integer maxAttendees;

    LocalDate registrationDeadline;

    ConferenceStatus status;

    String coverImageUrl;

    String websiteUrl;
}