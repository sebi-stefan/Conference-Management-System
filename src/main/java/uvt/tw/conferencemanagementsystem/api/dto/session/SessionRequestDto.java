package uvt.tw.conferencemanagementsystem.api.dto.session;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.time.LocalDate;
import lombok.Builder;
import lombok.Data;
import uvt.tw.conferencemanagementsystem.api.dto.session.enums.SessionType;

@Data
@Builder
public class SessionRequestDto {
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
