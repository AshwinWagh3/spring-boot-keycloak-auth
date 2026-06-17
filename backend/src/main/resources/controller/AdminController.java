package com.ashwinwagh3.keycloak.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @GetMapping("/users")
    @PreAuthorize("hasRole('ADMIN')")
    public List<String> getAllUsers() {
        return Arrays.asList(
            "user1 (USER)",
            "user2 (USER)", 
            "manager1 (MANAGER)",
            "admin1 (ADMIN)",
            "ashwin (ADMIN) - Developer"
        );
    }

    @GetMapping("/users/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public String getUserById(@PathVariable String id) {
        return "User details for ID: " + id + "\n" +
               "🔐 Admin access only - Ashwin Wagh";
    }

    @PostMapping("/create")
    @PreAuthorize("hasRole('ADMIN')")
    public String createUser(@RequestBody String userData) {
        return "✅ User created successfully!\n" +
               "📝 Data: " + userData + "\n" +
               "👨‍💻 Created by Admin (Ashwin Wagh)";
    }

    @DeleteMapping("/users/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public String deleteUser(@PathVariable String id) {
        return "🗑️ User deleted with ID: " + id + "\n" +
               "🔐 Admin action performed by Ashwin Wagh";
    }

    @GetMapping("/audit")
    @PreAuthorize("hasRole('ADMIN')")
    public List<String> getAuditLogs() {
        return Arrays.asList(
            "🔐 Log 1: User login - ashwinwagh3",
            "🔐 Log 2: User updated - ashwinwagh3",
            "🔐 Log 3: Admin action - ashwinwagh3",
            "🔐 Log 4: System audit by Ashwin Wagh"
        );
    }
}
