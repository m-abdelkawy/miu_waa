package com.calculator;

import com.calculator.utils.CalcHelper;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

public class SocketTextHandler extends TextWebSocketHandler {

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String calcString = message.getPayload();
        System.out.println(CalcHelper.calculate(calcString));

        session.sendMessage(new TextMessage("the answer to " + calcString +" is: " + CalcHelper.calculate(calcString)));
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        super.afterConnectionEstablished(session);
        System.out.println("Connected");
        session.sendMessage(new TextMessage("Connected !"));

//        MyThread myThread = new MyThread(session);
//        Thread t = new Thread(myThread);
//        t.start();
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        super.afterConnectionClosed(session, status);
        System.out.println("Closed");
    }
}
