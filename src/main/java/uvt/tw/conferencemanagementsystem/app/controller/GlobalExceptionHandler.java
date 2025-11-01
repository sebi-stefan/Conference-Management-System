package uvt.tw.conferencemanagementsystem.app.controller;

import lombok.Getter;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import uvt.tw.conferencemanagementsystem.app.service.user.UserAlreadyExistsException;
import uvt.tw.conferencemanagementsystem.app.service.user.UserNotFoundException;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@ControllerAdvice
public class GlobalExceptionHandler{

    @Getter
    public static class ApiError {

        private HttpStatus status;
        private String message;
        private List<String> errors;
        private LocalDateTime timestamp;

        public ApiError(HttpStatus status, String message, List<String> errors) {
            this.status = status;
            this.message = message;
            this.errors = errors;
            this.timestamp = LocalDateTime.now();
        }

        public ApiError(HttpStatus status, String message, String error) {
            this.status = status;
            this.message = message;
            this.errors = new ArrayList<>(List.of(error));
            this.timestamp = LocalDateTime.now();
        }
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex) {

        List<String> errors = ex.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(error -> error.getField() + ": " + error.getDefaultMessage())
                .toList();

        ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, "Validation error", errors);

        return new ResponseEntity<>(apiError, new HttpHeaders(), apiError.getStatus());
    }

    @ExceptionHandler(UserAlreadyExistsException.class)
    protected ResponseEntity<Object> handleUserAlreadyExistsException(UserAlreadyExistsException ex){

        ApiError apiError = new ApiError(HttpStatus.CONFLICT, ex.getMessage(), List.of());

        return new ResponseEntity<>(apiError, new HttpHeaders(), apiError.getStatus());
    }

    @ExceptionHandler(UserNotFoundException.class)
    protected ResponseEntity<Object> handleUserNotFoundException(UserNotFoundException ex){

        ApiError apiError = new ApiError(HttpStatus.NOT_FOUND, ex.getMessage(), List.of());

        return new ResponseEntity<>(apiError, new HttpHeaders(), apiError.getStatus());
    }
}
