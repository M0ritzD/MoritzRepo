// app.routes.ts – Root-Routing mit Lazy Loading für Feature-Bereiche

import { Routes } from '@angular/router';
// import { authGuard } from '@core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./features/dashboard/dashboard.routes').then(
                (m) => m.DASHBOARD_ROUTES
            ),
        // canActivate: [authGuard],
    },
    {
        path: '**',
        redirectTo: '',
    },
];
