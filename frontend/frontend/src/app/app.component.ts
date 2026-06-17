import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Keycloak Auth App';
  isLoggedIn = false;
  username = '';

  constructor(private keycloakService: KeycloakService) {}

  async ngOnInit() {
    this.isLoggedIn = await this.keycloakService.isLoggedIn();
    if (this.isLoggedIn) {
      const profile = await this.keycloakService.loadUserProfile();
      this.username = profile.username || 'User';
    }
  }

  async login() {
    await this.keycloakService.login();
  }

  async logout() {
    await this.keycloakService.logout();
  }
}
