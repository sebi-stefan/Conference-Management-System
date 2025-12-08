package uvt.tw.conferencemanagementsystem.app.file.service;

import io.minio.BucketExistsArgs;
import io.minio.MakeBucketArgs;
import io.minio.MinioClient;
import io.minio.PutObjectArgs;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import uvt.tw.conferencemanagementsystem.api.dto.user.UserResponseDto;
import uvt.tw.conferencemanagementsystem.app.conference.service.ConferenceService;
import uvt.tw.conferencemanagementsystem.app.user.service.UserService;

@Service
@Slf4j
@RequiredArgsConstructor
public class ImageService {

  private final MinioClient minioClient;
  private final UserService userService;
  private final ConferenceService conferenceService;

  @Value("${minio.bucket-name}")
  private String bucketName;

  @Value("${minio.image-size}")
  private long maxImageSize;

  @PostConstruct
  public void init() {
    try {
      boolean found =
          minioClient.bucketExists(BucketExistsArgs.builder().bucket(bucketName).build());

      if (!found) {
        minioClient.makeBucket(MakeBucketArgs.builder().bucket(bucketName).build());
        log.info("Bucket '{}' created successfully", bucketName);
      } else {
        log.info("Bucket '{}' already exists", bucketName);
      }
    } catch (Exception e) {
      log.error("Error initializing MinIO bucket", e);
      throw new RuntimeException("Could not initialize MinIO bucket", e);
    }
  }

  public String uploadProfilePicture(MultipartFile file, Long userId) {
    validateImage(file);

    UserResponseDto user = userService.getUserById(userId);

    try {
      String fileName = generateProfilePictureName(file.getOriginalFilename(), user.getEmail());

      minioClient.putObject(
          PutObjectArgs.builder().bucket(bucketName).object(fileName).stream(
                  file.getInputStream(), file.getSize(), -1)
              .contentType(file.getContentType())
              .build());

      log.info("Image uploaded successfully: {}", fileName);
      return fileName;

    } catch (Exception e) {
      log.error("Error uploading image", e);
      throw new RuntimeException("Could not upload image", e);
    }
  }

  private String generateProfilePictureName(String originalFileName, String userEmail) {
    String extension = "";
    if (originalFileName != null && originalFileName.contains(".")) {
      extension = originalFileName.substring(originalFileName.lastIndexOf("."));
    }
    return userEmail + "_profile_picture" + extension;
  }

  private void validateImage(MultipartFile file) {
    if (file.isEmpty()) {
      throw new IllegalArgumentException("File is empty");
    }

    if (file.getSize() > maxImageSize) {
      throw new IllegalArgumentException("File size exceeds maximum limit");
    }

    String contentType = file.getContentType();
    if (contentType == null || !contentType.startsWith("image/")) {
      throw new IllegalArgumentException("File must be an image");
    }
  }
}
