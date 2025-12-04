package uvt.tw.conferencemanagementsystem.app.conference.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import uvt.tw.conferencemanagementsystem.app.conference.model.ConferenceEntity;

public interface ConferenceRepository extends JpaRepository<ConferenceEntity, Long> {
}
