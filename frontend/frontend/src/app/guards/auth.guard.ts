import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {
  
  constructor(
    protected override router: Router,
    protected override keycloakService: KeycloakService
  ) {
    super(router, keycloakService);
  }

  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    // Force login if not authenticated
    if (!this.authenticated) {
      await this.keycloakService.login({
        redirectUri: window.location.origin + state.url
      });
      return false;
    }

    // Get required roles from route data
    const requiredRoles = route.data['roles'] || [];
    
    // If no roles required, allow access
    if (!requiredRoles.length) {
      return true;
    }

    // Check if user has any of the required roles
    const hasRequiredRole = requiredRoles.some((role: string) => 
      this.roles.includes(role)
    );

    if (hasRequiredRole) {
      return true;
    }

    // Redirect to home if user doesn't have required role
    this.router.navigate(['/']);
    return false;
  }
}
