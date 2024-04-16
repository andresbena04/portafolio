import { Component } from '@angular/core';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
