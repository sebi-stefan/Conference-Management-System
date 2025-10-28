package uvt.tw.conferencemanagementsystem.api.dto.user;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import uvt.tw.conferencemanagementsystem.api.dto.user.enums.UserRole;

@Data
@Builder
@AllArgsConstructor
public class UserResponseDto {

    @NotNull
    String email;

    @NotNull
    String firstName;

    @NotNull
    String lastName;

    String bio;

    String organization;

}
