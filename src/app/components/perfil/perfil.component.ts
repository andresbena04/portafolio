import { Component } from '@angular/core';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [ContactoComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

}
