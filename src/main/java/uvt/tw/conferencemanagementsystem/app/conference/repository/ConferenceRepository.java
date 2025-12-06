package uvt.tw.conferencemanagementsystem.app.conference.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import uvt.tw.conferencemanagementsystem.app.conference.model.ConferenceEntity;

public interface ConferenceRepository extends JpaRepository<ConferenceEntity, Long> {

  List<ConferenceEntity> getConferenceEntitiesByOrganizerId(Long id);
}
