package uvt.tw.conferencemanagementsystem.api.dto.session;

import java.time.LocalDate;
import java.util.List;
import lombok.Builder;
import lombok.Data;
import uvt.tw.conferencemanagementsystem.api.dto.session.enums.SessionType;
import uvt.tw.conferencemanagementsystem.app.user.model.UserEntity;

@Data
@Builder
public class SessionResponseDto {
  private Long id;
  private String title;
  private String description;
  private SessionType sessionType;
  private String room;
  private LocalDate startTime;
  private LocalDate endTime;
  private Integer maxParticipants;
  private List<UserEntity> speakers;
}
