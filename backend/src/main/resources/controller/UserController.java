package com.ashwinwagh3.keycloak.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @GetMapping("/profile")
    @PreAuthorize("hasRole('USER')")
    public Map<String, String> getProfile(Principal principal) {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Your profile information");
        response.put("user", principal.getName());
        response.put("role", "USER");
        response.put("developer", "Ashwin Wagh");
        return response;
    }

    @GetMapping("/dashboard")
    @PreAuthorize("hasAnyRole('USER', 'MANAGER')")
    public Map<String, String> getDashboard() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Welcome to your user dashboard");
        response.put("features", "View profile, update settings");
        response.put("developer", "Ashwin Wagh");
        return response;
    }

    @PostMapping("/update")
    @PreAuthorize("hasRole('USER')")
    public String updateProfile() {
        return "Profile updated successfully! - Auth System by Ashwin Wagh";
    }
}
