package uvt.tw.conferencemanagementsystem.api.dto.conference;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class ConferenceRequestDto {

    @Size(max = 255)
    @NotNull
    String title;

    @Size(max = 255)
    String description;

    @Size(max = 255)
    String venueName;

    @Size(max = 255)
    String venueAddress;

    @NotNull
    LocalDate startDate;

    @NotNull
    LocalDate endDate;

    Integer maxAttendees;

    LocalDate registrationDeadline;

    @Size(max = 255)
    String coverImageUrl;

    @Size(max = 255)
    String websiteUrl;

}