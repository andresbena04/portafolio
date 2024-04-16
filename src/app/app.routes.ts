import { Routes } from '@angular/router';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HerramientasComponent } from './components/herramientas/herramientas.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'herramientas', component: HerramientasComponent },
    { path: 'proyectos', component: ProyectosComponent }
];
