package uvt.tw.conferencemanagementsystem.app.user.service;

import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import uvt.tw.conferencemanagementsystem.api.dto.user.CreateUserRequestDto;
import uvt.tw.conferencemanagementsystem.api.dto.user.UserResponseDto;
import uvt.tw.conferencemanagementsystem.api.dto.user.enums.UserRole;
import uvt.tw.conferencemanagementsystem.app.exception.UserAlreadyExistsException;
import uvt.tw.conferencemanagementsystem.app.exception.UserNotFoundException;
import uvt.tw.conferencemanagementsystem.app.security.CustomUserDetails;
import uvt.tw.conferencemanagementsystem.app.user.model.UserEntity;
import uvt.tw.conferencemanagementsystem.app.user.repository.UserRepository;
import uvt.tw.conferencemanagementsystem.app.user.util.UserConverter;

@RequiredArgsConstructor
@Service
public class UserService {

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;

  @Transactional
  public UserResponseDto createUser(CreateUserRequestDto requestDto) {
    if (userRepository.existsByEmail(requestDto.getEmail())) {
      throw new UserAlreadyExistsException("Email already in use: " + requestDto.getEmail());
    }

    UserEntity user = new UserEntity();
    updateUserData(user, requestDto);

    user.setPasswordHash(passwordEncoder.encode(requestDto.getPassword()));
    user.setRole(UserRole.valueOf(requestDto.getRole().name()));

    UserEntity savedUser = userRepository.save(user);

    return UserConverter.convertToReponseDto(savedUser);
  }

  @Transactional
  public UserResponseDto updateUser(CreateUserRequestDto updatedUserData, Long id) {
    UserEntity user = userRepository.findById(id)
        .orElseThrow(() -> new UserNotFoundException("User not found with id: " + id));

    updateUserData(user, updatedUserData);

    UserEntity savedUser = userRepository.save(user);
    return UserConverter.convertToReponseDto(savedUser);
  }

  @Transactional(readOnly = true)
  public UserEntity getCurrentUser() {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    if (authentication == null || !authentication.isAuthenticated()) {
      return null;
    }
    CustomUserDetails customUserDetails = (CustomUserDetails) authentication.getPrincipal();
    return userRepository.findById(customUserDetails.getId()).orElse(null);
  }

  @Transactional(readOnly = true)
  public UserResponseDto getUserById(Long id) {
    UserEntity userEntity = userRepository.findById(id)
        .orElseThrow(() -> new UserNotFoundException("User not found based on the specified id"));
    return UserConverter.convertToReponseDto(userEntity);
  }

  @Transactional(readOnly = true)
  public UserResponseDto getUserByEmail(String email) {
    UserEntity userEntity = userRepository.findByEmail(email)
        .orElseThrow(() -> new UserNotFoundException("User not found based on the specified email"));
    return UserConverter.convertToReponseDto(userEntity);
  }

  public void deleteUserById(Long id) {
    Optional<UserEntity> user = userRepository.findById(id);
    user.ifPresent(userRepository::delete);
  }

  private void updateUserData(UserEntity user, CreateUserRequestDto requestDto) {
    user.setEmail(requestDto.getEmail());
    user.setFirstName(requestDto.getFirstName());
    user.setLastName(requestDto.getLastName());
    user.setBio(requestDto.getBio());
    user.setOrganization(requestDto.getOrganization());
  }
}
