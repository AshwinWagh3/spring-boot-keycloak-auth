package com.ashwinwagh3.keycloak;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class KeycloakApplication {

    public static void main(String[] args) {
        SpringApplication.run(KeycloakApplication.class, args);
        System.out.println("🚀 Keycloak Auth Backend started on http://localhost:8081");
        System.out.println("👨‍💻 Built by Ashwin Wagh");
        System.out.println("📚 GitHub: https://github.com/ashwinwagh3");
    }
}
