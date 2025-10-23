package uvt.tw.conferencemanagementsystem.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;
import uvt.tw.conferencemanagementsystem.entity.Conference;

@Data
@Builder
public class SpeakerResponseDTO {
    @NotNull
    Long sessionId;

    @NotNull
    Long userId;

    Integer speakerOrder;
}
