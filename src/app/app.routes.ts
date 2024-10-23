// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Ajusta según la ruta del componente
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
