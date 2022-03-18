package com.bankapp;

import com.bankapp.service.dto.AccountDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestOperations;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@SpringBootApplication
public class Lab5Part2Application implements CommandLineRunner {

	@Autowired
	private RestOperations restTemplate;

	private String serverUrl = "http://localhost:8090/api/accounts";

	public static void main(String[] args) {
		SpringApplication.run(Lab5Part2Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		//create account
		restTemplate.postForLocation(serverUrl, new AccountDTO(101, "Ahmed Ali", 50));
		//create account
		restTemplate.postForLocation(serverUrl, new AccountDTO(102, "Mohammed Abdelkawy", 70));

		//get account
		AccountDTO acc = restTemplate.getForObject(serverUrl + "/102", AccountDTO.class);
		System.out.println(acc);

		/**/
		//System.out.println("\nAll Accounts");
		//List<AccountDTO> accountDtos = restTemplate.getForObject(serverUrl, List.class);
		//System.out.println(accountDtos);

		restTemplate.delete(serverUrl+"/101");
		restTemplate.delete(serverUrl+"/102");

	}

	@Bean
	RestTemplate restTemplate(){
		return new RestTemplate();
	}
}
