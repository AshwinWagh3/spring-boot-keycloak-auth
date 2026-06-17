import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  template: `
    <div class="admin-panel">
      <h2>🛡️ Admin Panel</h2>
      <p>Welcome Admin! You have elevated privileges.</p>
      
      <div class="admin-grid">
        <div class="card">
          <h3>👥 All Users</h3>
          <button class="btn btn-primary" (click)="getUsers()">Load Users</button>
          <pre *ngIf="users">{{ users | json }}</pre>
        </div>
        
        <div class="card">
          <h3>📋 Audit Logs</h3>
          <button class="btn btn-primary" (click)="getAuditLogs()">Load Logs</button>
          <pre *ngIf="logs">{{ logs | json }}</pre>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .admin-panel {
      padding: 20px;
    }
    
    .admin-grid {
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
    
    .card button {
      margin-bottom: 12px;
    }
    
    pre {
      background: #f8fafc;
      padding: 12px;
      border-radius: 6px;
      overflow-x: auto;
      max-height: 300px;
      overflow-y: auto;
    }
    
    @media (max-width: 768px) {
      .admin-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AdminComponent {
  users: any = null;
  logs: any = null;

  constructor(private http: HttpClient) {}

  getUsers() {
    this.http.get('http://localhost:8081/api/admin/users').subscribe({
      next: (data) => this.users = data,
      error: () => this.users = { error: 'Access denied. Admin role required.' }
    });
  }

  getAuditLogs() {
    this.http.get('http://localhost:8081/api/admin/audit').subscribe({
      next: (data) => this.logs = data,
      error: () => this.logs = { error: 'Access denied. Admin role required.' }
    });
  }
}
