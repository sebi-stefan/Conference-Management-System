package uvt.tw.conferencemanagementsystem.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class SessionAttendeeResponseDTO{

    @NotNull
    Long sessionId;

    @NotNull
    Long userId;

    LocalDate registeredAt;

    Boolean attended;
}