package uvt.tw.conferencemanagementsystem.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import uvt.tw.conferencemanagementsystem.app.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    public Optional<User> findByEmail(String email);
}
