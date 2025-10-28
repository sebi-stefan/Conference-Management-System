package uvt.tw.conferencemanagementsystem.api.user;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uvt.tw.conferencemanagementsystem.api.dto.user.UserRequestDto;
import uvt.tw.conferencemanagementsystem.api.dto.user.UserResponseDto;

@RestController
@RequestMapping("/user")
@Tag(name = "User")
public interface UserController {

    @PostMapping
    ResponseEntity<UserResponseDto> createUser(@RequestBody @Valid UserRequestDto userRequestDto);

    @GetMapping("/id/{userId}")
    ResponseEntity<UserResponseDto> getUserById(@PathVariable Long userId);

    @GetMapping("/email/{userEmail}")
    ResponseEntity<UserResponseDto> getUserByEmail(@PathVariable String userEmail);

    @PutMapping("/{userId}")
    ResponseEntity<UserResponseDto> updateUser(@PathVariable Long userId, @RequestBody @Valid UserRequestDto updatedUserData);

    @DeleteMapping("/{userId}")
    ResponseEntity<Void> deleteUserById(@PathVariable Long userId);
}
