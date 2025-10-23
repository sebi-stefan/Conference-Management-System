package uvt.tw.conferencemanagementsystem.dto;


import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class TagResponseDTO {

    @NotNull
    String name;
}
