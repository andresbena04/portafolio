import { Routes } from '@angular/router';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HerramientasComponent } from './components/herramientas/herramientas.component';

export const routes: Routes = [
    { path: 'perfil', component: PerfilComponent },
    { path: 'lenguajes', component: HerramientasComponent },
    { path: 'proyectos', component: ProyectosComponent }
];
