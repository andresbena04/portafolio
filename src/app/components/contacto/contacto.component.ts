import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  social: any = []
  constructor() { }

  ngOnInit() {
    this.social = [
      {
        nombre:"GitHub",
        icon: "bx bxl-github",
        url: "https://github.com/andresbena04"
      },
      {
        nombre:"LinkedIn",
        icon: "bx bxl-linkedin-square",
        url: "https://www.linkedin.com/in/andresb04/"
      },
      {
        nombre:"Email",
        icon: "bx bx-envelope",
        url: "mailto:andresbena3515@gmail.com"
      }
    ]
  }

  donwload(): void {

    const imageUrl = 'assets/CV_Andres_Benavides.pdf';
    const fileName = 'CV_Andres_Benavides.pdf';

    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = fileName;
    link.click();
  }
}
