package uvt.tw.conferencemanagementsystem.api.dto.session;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;
import uvt.tw.conferencemanagementsystem.api.dto.conference.SpeakerResponseDto;
import uvt.tw.conferencemanagementsystem.api.dto.session.enums.SessionType;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
public class SessionResponseDto {
    @NotNull
    Long conferenceId;

    @NotNull
    String title;

    String description;

    SessionType sessionType;

    String room;

    @NotNull
    LocalDate startTime;

    @NotNull
    LocalDate endTime;

    Integer maxParticipants;

    List<SessionAttendeeResponseDto> sessionAttendees;

    List<SpeakerResponseDto> speakers;

}

