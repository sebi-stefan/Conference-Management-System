package uvt.tw.conferencemanagementsystem.app.user.util;

import lombok.experimental.UtilityClass;
import uvt.tw.conferencemanagementsystem.api.dto.user.UserResponseDto;
import uvt.tw.conferencemanagementsystem.app.user.model.UserEntity;

@UtilityClass
public class UserConverter {

  public static UserResponseDto convertToReponseDto(UserEntity userEntity) {
    return UserResponseDto.builder().id(userEntity.getId()).email(userEntity.getEmail())
        .firstName(userEntity.getFirstName()).lastName(userEntity.getLastName()).bio(userEntity.getBio())
        .organization(userEntity.getOrganization()).build();
  }
}
