package com.livedashboard.app.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebScoketConfig implements WebSocketMessageBrokerConfigurer {

 private TaskScheduler messageBrokerTaskScheduler;
	 

 @Autowired
    public void setMessageBrokerTaskScheduler(TaskScheduler taskScheduler) {
        this.messageBrokerTaskScheduler = taskScheduler;
    }
 
 @Override
 public void configureMessageBroker(MessageBrokerRegistry config) {
	config.enableSimpleBroker("/topic");
	config.setApplicationDestinationPrefixes("/app");
	
 }

 @Override
 public void registerStompEndpoints(StompEndpointRegistry registry) {
	 registry.addEndpoint("/dashbord-websocket").setAllowedOrigins("http://localhost:4200").withSockJS();
 }
}
