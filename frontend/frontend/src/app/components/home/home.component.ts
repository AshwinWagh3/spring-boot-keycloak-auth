import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-container">
      <div class="hero">
        <h1>🔐 Keycloak Authentication System</h1>
        <p class="subtitle">Built with Spring Boot, Angular, and Keycloak</p>
        <div class="badge">
          <span>👨‍💻 Ashwin Wagh</span>
          <span>⭐ GitHub: ashwinwagh3</span>
        </div>
        <div class="features">
          <div class="feature-card">
            <h3>🔑 SSO</h3>
            <p>Single Sign-On with Keycloak</p>
          </div>
          <div class="feature-card">
            <h3>🛡️ RBAC</h3>
            <p>Role-Based Access Control</p>
          </div>
          <div class="feature-card">
            <h3>🔐 JWT</h3>
            <p>Secure API Authentication</p>
          </div>
          <div class="feature-card">
            <h3>🎯 Angular</h3>
            <p>Modern Frontend Framework</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      text-align: center;
      padding: 40px 20px;
    }
    
    .hero h1 {
      font-size: 42px;
      margin-bottom: 16px;
      color: #1e2233;
    }
    
    .subtitle {
      font-size: 20px;
      color: #6b7280;
      margin-bottom: 20px;
    }
    
    .badge {
      display: flex;
      gap: 20px;
      justify-content: center;
      margin-bottom: 40px;
      flex-wrap: wrap;
    }
    
    .badge span {
      background: #f3f4f6;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
    }
    
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 24px;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .feature-card {
      background: white;
      padding: 24px;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    }
    
    .feature-card h3 {
      font-size: 28px;
      margin-bottom: 8px;
    }
    
    .feature-card p {
      color: #6b7280;
    }
    
    @media (max-width: 768px) {
      .hero h1 { font-size: 28px; }
    }
  `]
})
export class HomeComponent {}
