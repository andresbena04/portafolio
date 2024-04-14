import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  
  donwload(): void {
    
    const imageUrl = 'assets/CV_Andres_Benavides.pdf';
    const fileName = 'CV_Andres_Benavides.pdf';

    // Crear un enlace temporal
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = fileName;

    // Simular un clic en el enlace para iniciar la descarga
    link.click();
  }
}
