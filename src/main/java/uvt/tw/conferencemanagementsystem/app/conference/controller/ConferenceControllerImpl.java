package uvt.tw.conferencemanagementsystem.app.conference.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import uvt.tw.conferencemanagementsystem.api.conference.ConferenceController;
import uvt.tw.conferencemanagementsystem.api.dto.conference.ConferenceRequestDto;
import uvt.tw.conferencemanagementsystem.api.dto.conference.ConferenceResponseDto;
import uvt.tw.conferencemanagementsystem.app.conference.service.ConferenceService;

@RequiredArgsConstructor
public class ConferenceControllerImpl implements ConferenceController {

  private final ConferenceService conferenceService;

  @Override
  public ResponseEntity<ConferenceResponseDto> createConference(ConferenceRequestDto conferenceRequestDto) {
    return null;
  }
}
