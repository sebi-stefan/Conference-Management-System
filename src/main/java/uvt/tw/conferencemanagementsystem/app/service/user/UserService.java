package uvt.tw.conferencemanagementsystem.app.service.user;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import uvt.tw.conferencemanagementsystem.api.dto.user.UserRequestDto;
import uvt.tw.conferencemanagementsystem.api.dto.user.UserResponseDto;
import uvt.tw.conferencemanagementsystem.api.dto.user.enums.UserRole;
import uvt.tw.conferencemanagementsystem.app.entity.User;
import uvt.tw.conferencemanagementsystem.app.repository.UserRepository;
import uvt.tw.conferencemanagementsystem.app.service.user.util.Encoder;
import uvt.tw.conferencemanagementsystem.app.service.user.util.UserConverter;

import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public UserResponseDto createUser(UserRequestDto requestDto){
        userRepository.findByEmail(requestDto.getEmail()).
                ifPresent(u ->{
                    throw new UserAlreadyExistsException("Email already in use: " + requestDto.getEmail());
        });

        User createdUser = UserConverter.convertToEntity(requestDto);
        createdUser.setRole(UserRole.ATTENDEE);
        User savedUser = userRepository.save(createdUser);

        return UserConverter.convertToReponseDto(savedUser);
    }

    @Transactional(readOnly = true)
    public UserResponseDto getUserById(Long id){
        User userEntity = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found based on the specified id"));
        return UserConverter.convertToReponseDto(userEntity);
    }

    @Transactional(readOnly = true)
    public UserResponseDto getUserByEmail(String email){
        User userEntity = userRepository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("User not found based on the specified email"));
        return UserConverter.convertToReponseDto(userEntity);
    }

    @Transactional
    public UserResponseDto updateUser(UserRequestDto updatedUserData,  Long id){
        User existingUser = userRepository.findById(id)
                        .orElseThrow(() -> new NoSuchElementException("User not found with id: " + id ));

        Optional.ofNullable(updatedUserData.getEmail()).ifPresent(existingUser::setEmail);
        Optional.ofNullable(updatedUserData.getFirstName()).ifPresent(existingUser::setFirstName);
        Optional.ofNullable(updatedUserData.getLastName()).ifPresent(existingUser::setLastName);
        Optional.ofNullable(updatedUserData.getBio()).ifPresent(existingUser::setBio);
        Optional.ofNullable(updatedUserData.getOrganization()).ifPresent(existingUser::setOrganization);

        User savedUser = userRepository.save(existingUser);
        return UserConverter.convertToReponseDto(savedUser);
    }

    public void deleteUserById(Long id){
        Optional<User> user = userRepository.findById(id);
        user.ifPresent(userRepository::delete);
    }
}
