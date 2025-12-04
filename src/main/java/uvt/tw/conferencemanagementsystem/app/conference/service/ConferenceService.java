package uvt.tw.conferencemanagementsystem.app.conference.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import uvt.tw.conferencemanagementsystem.app.conference.repository.ConferenceRepository;
import uvt.tw.conferencemanagementsystem.app.user.service.UserService;

@Service
@RequiredArgsConstructor
public class ConferenceService {

  private final ConferenceRepository conferenceRepository;
  private final UserService userService;
}
