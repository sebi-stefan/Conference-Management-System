package uvt.tw.conferencemanagementsystem.dto;


import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;
import uvt.tw.conferencemanagementsystem.entity.enums.RegistrationStatus;

import java.time.LocalDate;

@Data
@Builder
public class RegistrationResponseDTO {
    @NotNull
    Long conferenceId;

    @NotNull
    Long userId;

    RegistrationStatus status;

    LocalDate registrationDate;

    LocalDate confirmationDate;

    LocalDate cancellationDate;
}
