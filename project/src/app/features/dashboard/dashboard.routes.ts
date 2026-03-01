// dashboard.routes.ts – Routes für das Dashboard-Feature (Lazy Loaded)

import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
];
