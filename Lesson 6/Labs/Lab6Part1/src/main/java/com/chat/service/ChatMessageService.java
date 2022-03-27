package com.chat.service;

import com.chat.core.ChatMessage;
import com.chat.dao.ChatMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class ChatMessageService {
    @Autowired
    private ChatMessageRepository chatMessageRepositry;


    public Flux<ChatMessage> findMessagesBySender(String sender){
        return chatMessageRepositry.findBySender(sender);
    }

    public Mono<ChatMessage> save(ChatMessage msg){
        return chatMessageRepositry.save(msg);
    }
}
