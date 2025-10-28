package uvt.tw.conferencemanagementsystem.app.service.user.util;


import lombok.experimental.UtilityClass;
import uvt.tw.conferencemanagementsystem.api.dto.user.UserRequestDto;
import uvt.tw.conferencemanagementsystem.api.dto.user.UserResponseDto;
import uvt.tw.conferencemanagementsystem.app.entity.User;

@UtilityClass
public class UserConverter {
    public static User convertToEntity(UserRequestDto requestDto){
        User user = new User();
        user.setEmail(requestDto.getEmail());
        user.setPasswordHash(Encoder.getPasswordEncoder().encode(requestDto.getPassword()));
        user.setFirstName(requestDto.getFirstName());
        user.setLastName(requestDto.getLastName());
        user.setBio(requestDto.getBio());
        user.setOrganization(requestDto.getOrganization());

        return user;
    }

    public static UserResponseDto convertToReponseDto(User userEntity){
        return UserResponseDto.builder()
                .email(userEntity.getEmail())
                .firstName(userEntity.getFirstName())
                .lastName(userEntity.getLastName())
                .bio(userEntity.getBio())
                .organization(userEntity.getOrganization())
                .build();
    }

}

