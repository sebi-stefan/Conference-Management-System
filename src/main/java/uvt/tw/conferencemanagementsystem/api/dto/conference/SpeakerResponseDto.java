package uvt.tw.conferencemanagementsystem.api.dto.conference;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SpeakerResponseDto {
    @NotNull
    Long sessionId;

    @NotNull
    Long userId;

    Integer speakerOrder;
}
