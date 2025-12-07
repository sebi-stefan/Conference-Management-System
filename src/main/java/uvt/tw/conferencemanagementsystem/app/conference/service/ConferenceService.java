package uvt.tw.conferencemanagementsystem.app.conference.service;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import uvt.tw.conferencemanagementsystem.api.dto.conference.ConferenceRequestDto;
import uvt.tw.conferencemanagementsystem.api.dto.conference.ConferenceResponseDto;
import uvt.tw.conferencemanagementsystem.api.dto.conference.enums.ConferenceStatus;
import uvt.tw.conferencemanagementsystem.api.dto.user.enums.UserRole;
import uvt.tw.conferencemanagementsystem.api.exception.ConferenceNotFoundException;
import uvt.tw.conferencemanagementsystem.api.exception.OwnershipException;
import uvt.tw.conferencemanagementsystem.api.exception.UserNotFoundException;
import uvt.tw.conferencemanagementsystem.app.conference.model.ConferenceEntity;
import uvt.tw.conferencemanagementsystem.app.conference.repository.ConferenceRepository;
import uvt.tw.conferencemanagementsystem.app.conference.util.ConferenceConverter;
import uvt.tw.conferencemanagementsystem.app.conference.util.ConferenceValidator;
import uvt.tw.conferencemanagementsystem.app.user.model.UserEntity;
import uvt.tw.conferencemanagementsystem.app.user.repository.UserRepository;
import uvt.tw.conferencemanagementsystem.app.user.service.UserService;

@Service
@RequiredArgsConstructor
public class ConferenceService {

  private final ConferenceRepository conferenceRepository;
  private final UserService userService;
  private final UserRepository userRepository;

  @Transactional
  public ConferenceResponseDto createConference(ConferenceRequestDto requestDto) {
    ConferenceValidator.validateConferenceData(requestDto);

    ConferenceEntity conference = new ConferenceEntity();
    updateConferenceData(requestDto, conference);

    conference.setOrganizer(userService.getCurrentUserEntity());
    conference.setStatus(ConferenceStatus.DRAFT);

    ConferenceEntity createdConference = conferenceRepository.saveAndFlush(conference);
    return ConferenceConverter.convertToResponseDto(createdConference);
  }

  @Transactional
  public ConferenceResponseDto updateConference(
      ConferenceRequestDto requestDto, Long conferenceId) {
    ConferenceValidator.validateConferenceData(requestDto);

    ConferenceEntity conference =
        conferenceRepository
            .findById(conferenceId)
            .orElseThrow(
                () ->
                    new ConferenceNotFoundException(
                        String.format("Conference with id: %d not found", conferenceId)));
    validateConferenceOwnership(conference);

    updateConferenceData(requestDto, conference);

    ConferenceEntity updatedConference = conferenceRepository.saveAndFlush(conference);
    return ConferenceConverter.convertToResponseDto(updatedConference);
  }

  public List<ConferenceResponseDto> getAllConferences() {
    return conferenceRepository.findAll().stream()
        .map(ConferenceConverter::convertToResponseDto)
        .toList();
  }

  public List<ConferenceResponseDto> getConferencesByUserId(Long userId) {
    if (!userRepository.existsById(userId))
      throw new UserNotFoundException(String.format("User with id: %d does not exist", userId));
    List<ConferenceEntity> conferences =
        conferenceRepository.getConferenceEntitiesByOrganizerId(userId);
    return conferences.stream().map(ConferenceConverter::convertToResponseDto).toList();
  }

  public List<ConferenceResponseDto> getCurrentUserConferences() {
    return getConferencesByUserId(userService.getCurrentUserEntity().getId());
  }

  public ConferenceResponseDto getConferenceById(Long conferenceId) {
    ConferenceEntity conference =
        conferenceRepository
            .findById(conferenceId)
            .orElseThrow(
                () ->
                    new ConferenceNotFoundException(
                        String.format("Conference with id: %d not found", conferenceId)));

    return ConferenceConverter.convertToResponseDto(conference);
  }

  public void deleteConferenceById(Long conferenceId) {
    ConferenceEntity conference =
        conferenceRepository
            .findById(conferenceId)
            .orElseThrow(
                () ->
                    new ConferenceNotFoundException(
                        String.format("Conference with id: %d not found", conferenceId)));
    conferenceRepository.deleteById(conference.getId());
  }

  public void validateConferenceOwnership(ConferenceEntity conference) {
    UserEntity currentUser = userService.getCurrentUserEntity();
    if (!(currentUser.getId().equals(conference.getOrganizer().getId())
        || UserRole.ADMIN.equals(currentUser.getRole()))) {
      throw new OwnershipException();
    }
  }

  private void updateConferenceData(ConferenceRequestDto requestDto, ConferenceEntity entity) {
    entity.setTitle(requestDto.getTitle());
    entity.setDescription(requestDto.getDescription());
    entity.setVenueName(requestDto.getVenueName());
    entity.setVenueAddress(requestDto.getVenueAddress());
    entity.setCity(requestDto.getCity());
    entity.setCountry(requestDto.getCountry());
    entity.setStartDate(requestDto.getStartDate());
    entity.setEndDate(requestDto.getEndDate());
    entity.setMaxAttendees(requestDto.getMaxAttendees());
    entity.setRegistrationDeadline(requestDto.getRegistrationDeadline());
    entity.setWebsiteUrl(requestDto.getWebsiteUrl());
  }
}
