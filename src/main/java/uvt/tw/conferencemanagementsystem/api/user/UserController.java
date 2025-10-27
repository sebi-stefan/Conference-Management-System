package uvt.tw.conferencemanagementsystem.api.user;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uvt.tw.conferencemanagementsystem.api.dto.user.UserRequestDto;
import uvt.tw.conferencemanagementsystem.api.dto.user.UserResponseDto;

@RestController
@RequestMapping("/user")
@Tag(name = "User")
public interface UserController {

    @PostMapping
    ResponseEntity<UserResponseDto> createUser(@RequestBody @Valid UserRequestDto userRequestDto);

}
