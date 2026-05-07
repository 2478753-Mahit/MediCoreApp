import { Routes } from '@angular/router';

export const routes: Routes = [
    // Default route
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    //Lazy loading route

    // Fallback route
    { path: '**', redirectTo: 'error' }
];
