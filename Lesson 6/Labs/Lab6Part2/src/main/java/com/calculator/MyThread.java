package com.calculator;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

public class MyThread implements Runnable {

    private WebSocketSession session;

    public MyThread(WebSocketSession session) {
        this.session = session;
    }

    public void run() {
        try {
            for (int x=0; x< 100; x++) {
                if (session.isOpen())
                    session.sendMessage(new TextMessage("Server message nr "+ x));
                Thread.sleep(5000);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
