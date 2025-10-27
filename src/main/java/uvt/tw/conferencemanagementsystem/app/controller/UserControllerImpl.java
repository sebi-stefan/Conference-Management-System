package uvt.tw.conferencemanagementsystem.app.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uvt.tw.conferencemanagementsystem.api.dto.user.UserRequestDto;
import uvt.tw.conferencemanagementsystem.api.dto.user.UserResponseDto;
import uvt.tw.conferencemanagementsystem.api.user.UserController;

@RestController
@RequestMapping("/user")
@Slf4j
public class UserControllerImpl implements UserController {


    @Override
    public ResponseEntity<UserResponseDto> createUser(UserRequestDto userRequestDto) {
        log.info("User endpoint called");
        return null;
    }
}
