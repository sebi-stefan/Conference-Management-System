package uvt.tw.conferencemanagementsystem.api.dto.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserRequestDto {

    @Size(min = 10, max = 30)
    @NotNull
    @Email
    String email;

    @Size(min = 6, max = 100)
    @NotNull
    String password;

    @Size(min = 2, max = 20)
    @NotNull
    String firstName;

    @Size(min = 2, max = 255)
    @NotNull
    String lastName;

    @Size(max = 500)
    String bio;

    @Size(max = 50)
    String organization;
}