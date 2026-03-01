// auth.guard.ts – Functional Guard (Angular 20)
// Schützt Routes vor unautorisiertem Zugriff

import { CanActivateFn } from '@angular/router';
// import { inject } from '@angular/core';
// import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
    // TODO: Auth-Logik implementieren
    // const router = inject(Router);
    return true;
};
