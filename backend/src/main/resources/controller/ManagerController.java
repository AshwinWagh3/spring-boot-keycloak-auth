package com.ashwinwagh3.keycloak.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/manager")
public class ManagerController {

    @GetMapping("/reports")
    @PreAuthorize("hasRole('MANAGER')")
    public String getReports() {
        return "📊 Manager-level reports - access granted!\n" +
               "🛠️ Built by Ashwin Wagh";
    }

    @GetMapping("/team")
    @PreAuthorize("hasRole('MANAGER')")
    public String getTeamDetails() {
        return "👥 Team management data - access granted!\n" +
               "📚 GitHub: https://github.com/ashwinwagh3";
    }
}
