package com.medicinal_plants.api;


import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/response")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class ResponseController {

        private final ResponseService responseService;

    @PostMapping("/generating")
    public ResponseEntity<String>  generateEmail(@RequestBody ResponseRequest responseRequest){

        String response = responseService.responseRequest(responseRequest);

        return ResponseEntity.ok(response);
    }


}
