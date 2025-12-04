package uvt.tw.conferencemanagementsystem.api.dto.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;
import uvt.tw.conferencemanagementsystem.api.dto.user.enums.UserRole;

@Data
@Builder
public class CreateUserRequestDto {

  @Size(min = 10, max = 30)
  @NotNull
  @Email
  private String email;

  @Size(min = 6, max = 100)
  @NotNull
  private String password;

  @NotNull
  private UserRole role;

  @Size(min = 2, max = 20)
  @NotNull
  private String firstName;

  @Size(min = 2, max = 255)
  @NotNull
  private String lastName;

  @Size(max = 500)
  private String bio;

  @Size(max = 50)
  private String organization;
}
