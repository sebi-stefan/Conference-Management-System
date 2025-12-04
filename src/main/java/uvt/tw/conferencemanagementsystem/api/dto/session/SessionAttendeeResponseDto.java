package uvt.tw.conferencemanagementsystem.api.dto.session;

import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;
import lombok.Builder;
import lombok.Data;

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
