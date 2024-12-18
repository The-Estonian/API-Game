package com.devpipe.backend;

import org.springframework.boot.Banner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(BackendApplication.class);
		app.setBannerMode(Banner.Mode.OFF);
		app.run(args);
	}

}
