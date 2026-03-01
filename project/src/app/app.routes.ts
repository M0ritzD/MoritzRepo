// app.routes.ts – Root-Routing mit Lazy Loading für Feature-Bereiche

import { Routes } from '@angular/router';
// import { authGuard } from '@core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./features/home/home.routes').then((m) => m.HOME_ROUTES),
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
