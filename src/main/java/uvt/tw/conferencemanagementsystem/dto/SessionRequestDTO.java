package uvt.tw.conferencemanagementsystem.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;
import uvt.tw.conferencemanagementsystem.entity.SessionAttendee;
import uvt.tw.conferencemanagementsystem.entity.enums.SessionType;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
public class SessionRequestDTO{
    @Size(max = 255)
    @NotNull
    String title;

    @Size(max = 255)
    String description;

    SessionType sessionType;

    @Size(max = 255)
    String room;

    @NotNull
    LocalDate startTime;

    @NotNull
    LocalDate endTime;

    Integer maxParticipants;

}