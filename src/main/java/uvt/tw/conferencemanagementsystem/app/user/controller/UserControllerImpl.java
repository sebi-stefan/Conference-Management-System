package uvt.tw.conferencemanagementsystem.app.user.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uvt.tw.conferencemanagementsystem.api.dto.user.CreateUserRequestDto;
import uvt.tw.conferencemanagementsystem.api.dto.user.UserResponseDto;
import uvt.tw.conferencemanagementsystem.api.user.UserController;
import uvt.tw.conferencemanagementsystem.app.user.service.UserService;

@RestController
@RequestMapping("/user")
@Slf4j
@RequiredArgsConstructor
public class UserControllerImpl implements UserController {

  private final UserService userService;

  @Override
  public ResponseEntity<UserResponseDto> createUser(CreateUserRequestDto requestDto) {
    log.info("Received request for createUser with {}", requestDto);
    return ResponseEntity.status(HttpStatus.CREATED).body(userService.createUser(requestDto));
  }
}
