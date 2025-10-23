package uvt.tw.conferencemanagementsystem.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Data
@Builder
public class UserRequestDTO{

    @Size(max = 255)
    @NotNull
    @Email
    String email;

    @Size(max = 255)
    @NotNull
    String username;

    @Size(max = 255)
    @NotNull
    String password;

    @Size(max = 255)
    @NotNull
    String firstName;

    @Size(max = 255)
    @NotNull
    String lastName;

    @Size(max = 255)
    String bio;

    @Size(max = 255)
    String organization;

    @Size(max = 255)
    String profilePictureUrl;
}