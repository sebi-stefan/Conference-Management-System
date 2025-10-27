package uvt.tw.conferencemanagementsystem.api.dto.session;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class SessionAttendeeResponseDto {

    @NotNull
    Long sessionId;

    @NotNull
    Long userId;

    LocalDate registeredAt;

    Boolean attended;
}