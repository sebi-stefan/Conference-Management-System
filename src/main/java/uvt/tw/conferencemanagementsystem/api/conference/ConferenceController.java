package uvt.tw.conferencemanagementsystem.api.conference;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uvt.tw.conferencemanagementsystem.api.dto.conference.ConferenceRequestDto;
import uvt.tw.conferencemanagementsystem.api.dto.conference.ConferenceResponseDto;

@RestController
@RequestMapping("/conference")
@Tag(name = "Conference")
public interface ConferenceController {

  @PostMapping
  ResponseEntity<ConferenceResponseDto> createConference(
      @RequestBody @Valid ConferenceRequestDto conferenceRequestDto);
}
