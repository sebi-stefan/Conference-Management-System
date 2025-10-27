package uvt.tw.conferencemanagementsystem.api.dto.conference;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;
import uvt.tw.conferencemanagementsystem.api.dto.session.SessionResponseDto;
import uvt.tw.conferencemanagementsystem.api.dto.user.UserResponseDto;
import uvt.tw.conferencemanagementsystem.api.dto.conference.enums.ConferenceStatus;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
public class ConferenceResponseDto {
    @NotNull
    List<SessionResponseDto> sessions;

    List<TagResponseDto> tags;

    @NotNull
    UserResponseDto organizer;

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