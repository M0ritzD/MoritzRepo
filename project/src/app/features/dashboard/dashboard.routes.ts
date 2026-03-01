// dashboard.routes.ts – Routes für das Dashboard-Feature (Lazy Loaded)

import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page.component';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        component: DashboardPageComponent,
    },
];
