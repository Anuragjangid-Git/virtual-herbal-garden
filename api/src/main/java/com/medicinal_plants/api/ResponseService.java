package com.medicinal_plants.api;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
public class ResponseService {

    private final WebClient webClient;

    public ResponseService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.build();
    }

    @Value("${gemini.api.url}")
    private String geminiApiUrl;
    @Value("${gemini.api.key}")
    private String geminiApiKey;

    public String responseRequest(ResponseRequest responseRequest){

        String prompt = builtPrompt(responseRequest);

        Map<String, Object> requestBody = Map.of("contents", new Object[]{
                Map.of("parts", new Object[]{
                        Map.of( "text",prompt)
                })
        });
        String response = webClient.post()
                .uri(geminiApiUrl + geminiApiKey)
                .header("Content-type","application/json")
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(String.class)
                .block();

        return extractResponseContent(response);

    }
    private String extractResponseContent(String response) {
        try{
            ObjectMapper mapper = new ObjectMapper();
            JsonNode rootNode = mapper.readTree(response);
            return rootNode.path("candidates").get(0)
                    .path("content")
                    .path("parts").get(0)
                    .path("text")
                    .asText();
        }catch (Exception e){
            return "Error Processing Request: " + e.getMessage();
        }
    }
    private String builtPrompt(ResponseRequest responseRequest) {
        StringBuilder prompt = new StringBuilder();
        prompt.append("Provide only relevant medicinal and care-related information about the plant mentioned below.");
        prompt.append(" Avoid using any subject lines or introductions. ");
        prompt.append("Respond in clean bullet points focusing on uses, benefits, growing conditions, and care tips.");
        prompt.append("\n\nPlant Name:\n").append(responseRequest.getPlantName());
        return prompt.toString();
    }


}
