package uvt.tw.conferencemanagementsystem.app.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uvt.tw.conferencemanagementsystem.api.dto.user.UserRequestDto;
import uvt.tw.conferencemanagementsystem.api.dto.user.UserResponseDto;
import uvt.tw.conferencemanagementsystem.api.user.UserController;
import uvt.tw.conferencemanagementsystem.app.service.user.UserService;

@RestController
@RequestMapping("/user")
@Slf4j
@RequiredArgsConstructor
public class UserControllerImpl implements UserController {

    private final UserService userService;

    @PostMapping
    @Override
    public ResponseEntity<UserResponseDto> createUser(@RequestBody @Valid UserRequestDto userRequestDto) {
        UserResponseDto createdUser = userService.createUser(userRequestDto);
        return ResponseEntity.ok(createdUser);
    }

    @GetMapping("/id/{userId}")
    @Override
    public ResponseEntity<UserResponseDto> getUserById(@PathVariable Long userId){
        UserResponseDto selectedUser = userService.getUserById(userId);
        return ResponseEntity.ok(selectedUser);
    }

    @GetMapping("/email/{userEmail}")
    @Override
    public ResponseEntity<UserResponseDto> getUserByEmail(@PathVariable String userEmail){
        UserResponseDto selectedUser = userService.getUserByEmail(userEmail);
        return ResponseEntity.ok(selectedUser);
    }

    @PutMapping("/{userId}")
    @Override
    public ResponseEntity<UserResponseDto> updateUser(@PathVariable Long userId, @RequestBody @Valid UserRequestDto updatedUserData ){
        UserResponseDto updatedUser = userService.updateUser(updatedUserData, userId);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/{userId}")
    @Override
    public ResponseEntity<Void> deleteUserById(@PathVariable Long userId){
        userService.deleteUserById(userId);
        return ResponseEntity.noContent().build();
    }
}
