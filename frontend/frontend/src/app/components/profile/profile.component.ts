import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-profile',
  template: `
    <div class="profile">
      <h2>👤 My Profile</h2>
      
      <div class="profile-card">
        <div class="avatar">👤</div>
        <div class="info">
          <p><strong>Username:</strong> {{ username }}</p>
          <p><strong>Email:</strong> {{ email }}</p>
          <p><strong>First Name:</strong> {{ firstName }}</p>
          <p><strong>Last Name:</strong> {{ lastName }}</p>
          <p><strong>Roles:</strong> {{ roles.join(', ') }}</p>
          <p><strong>Authenticated:</strong> ✅ Yes</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .profile {
      padding: 20px;
    }
    
    .profile-card {
      background: white;
      padding: 32px;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
      display: flex;
      gap: 32px;
      max-width: 600px;
      margin-top: 20px;
    }
    
    .avatar {
      font-size: 80px;
    }
    
    .info p {
      margin: 8px 0;
    }
    
    @media (max-width: 768px) {
      .profile-card {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }
  `]
})
export class ProfileComponent implements OnInit {
  username: string = '';
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  roles: string[] = [];

  constructor(private keycloakService: KeycloakService) {}

  async ngOnInit() {
    const profile = await this.keycloakService.loadUserProfile();
    this.username = profile.username || 'User';
    this.email = profile.email || 'No email';
    this.firstName = profile.firstName || 'Not set';
    this.lastName = profile.lastName || 'Not set';
    this.roles = this.keycloakService.getUserRoles() || [];
  }
}
