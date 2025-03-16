import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'', component:AppComponent},
    {path: 'admin', component: AdminComponent}
];
