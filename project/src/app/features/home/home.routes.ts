// home.routes.ts – Routes für das Home-Feature (Lazy Loaded)

import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';

export const HOME_ROUTES: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
];
