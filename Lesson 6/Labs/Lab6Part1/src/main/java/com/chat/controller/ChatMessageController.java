package com.chat.controller;

import com.chat.core.ChatMessage;
import com.chat.service.ChatMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

@RestController
@RequestMapping(path = "/messages")
public class ChatMessageController {
    @Autowired
    private ChatMessageService chatMessageService;

    private int x = 10;

    @GetMapping(produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<ChatMessage> getAllMessages(){
        return chatMessageService.findMessagesBySender("Frank Brown");
    }

    @Scheduled(fixedRate = 3000)
    private void addMessages(){
        System.out.println("Save Message " + x);
        ChatMessage msg = new ChatMessage(x++ + "", "Frank Brown", "Ahmed Ali", "Hello Ahmed!");
        chatMessageService.save(msg).block();
    }

}
