package com.ashwinwagh3.keycloak.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/public")
public class PublicController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello! This is a public endpoint - no authentication required. 👋";
    }

    @GetMapping("/info")
    public String info() {
        return "🚀 Keycloak Auth App by Ashwin Wagh\n" +
               "📚 GitHub: https://github.com/ashwinwagh3\n" +
               "🔐 Public information about the application.";
    }

    @GetMapping("/version")
    public String version() {
        return "Application Version: 1.0.0\nAuthor: Ashwin Wagh";
    }
}
