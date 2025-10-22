package uvt.tw.conferencemanagementsystem.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;
import uvt.tw.conferencemanagementsystem.entity.Conference;
import uvt.tw.conferencemanagementsystem.entity.SessionAttendee;
import uvt.tw.conferencemanagementsystem.entity.enums.SessionType;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
public class SessionResponseDTO{
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

    List<SessionAttendeeResponseDTO> sessionAttendees;

    List<SpeakerResponseDTO> speakers;

}

