import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard">
      <h2>📊 Dashboard</h2>
      <p>Welcome to your dashboard, {{ username }}!</p>
      
      <div class="dashboard-grid">
        <div class="card">
          <h3>👤 User Info</h3>
          <p><strong>Username:</strong> {{ username }}</p>
          <p><strong>Email:</strong> {{ email }}</p>
          <p><strong>Roles:</strong> {{ roles.join(', ') }}</p>
        </div>
        
        <div class="card">
          <h3>🔐 API Test</h3>
          <button class="btn btn-primary" (click)="callUserApi()">
            Call /api/user/profile
          </button>
          <pre *ngIf="apiResponse">{{ apiResponse | json }}</pre>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 20px;
    }
    
    .dashboard h2 {
      margin-bottom: 8px;
    }
    
    .dashboard-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-top: 24px;
    }
    
    .card {
      background: white;
      padding: 24px;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    }
    
    .card h3 {
      margin-bottom: 12px;
    }
    
    .card p {
      margin: 6px 0;
    }
    
    pre {
      background: #f8fafc;
      padding: 12px;
      border-radius: 6px;
      margin-top: 12px;
      overflow-x: auto;
    }
    
    @media (max-width: 768px) {
      .dashboard-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class DashboardComponent implements OnInit {
  username: string = '';
  email: string = '';
  roles: string[] = [];
  apiResponse: any = null;

  constructor(
    private keycloakService: KeycloakService,
    private http: HttpClient
  ) {}

  async ngOnInit() {
    const profile = await this.keycloakService.loadUserProfile();
    this.username = profile.username || 'User';
    this.email = profile.email || 'No email';
    this.roles = this.keycloakService.getUserRoles() || [];
  }

  async callUserApi() {
    try {
      const response = await this.http.get('http://localhost:8081/api/user/profile').toPromise();
      this.apiResponse = response;
    } catch (error) {
      this.apiResponse = { error: 'Failed to call API' };
      console.error(error);
    }
  }
}
