package uvt.tw.conferencemanagementsystem.app.service.user;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message);
    }
}
