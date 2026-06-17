import { Injectable } from '@angular/core';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({ providedIn: 'root' })
export class AuthGuard extends KeycloakAuthGuard {
  constructor(protected override keycloak: KeycloakService) {
    super(keycloak);
  }

  async isAccessAllowed(): Promise<boolean> {
    if (!this.authenticated) {
      await this.keycloak.login();
      return false;
    }
    
    const requiredRoles = this.route.data['roles'] || [];
    return requiredRoles.every(role => this.roles.includes(role));
  }
}
