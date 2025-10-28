package uvt.tw.conferencemanagementsystem.app.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import uvt.tw.conferencemanagementsystem.app.entity.User;
import uvt.tw.conferencemanagementsystem.app.repository.UserRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User userEntity = userRepository.findByEmail(username).orElseThrow();

        return CustomUserDetails.builder()
                .id(userEntity.getId())
                .username(userEntity.getEmail())
                .password(userEntity.getPasswordHash())
                .roles(List.of(userEntity.getRole().toString()))
                .build();
    }
}
