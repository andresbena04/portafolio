import { Component } from '@angular/core';

@Component({
  selector: 'app-herramientas',
  standalone: true,
  imports: [],
  templateUrl: './herramientas.component.html',
  styleUrl: './herramientas.component.css'
})
export class HerramientasComponent {

  frontend: any = [] 
  backend: any = [] 
  database: any = []

  constructor(){}

  ngOnInit(){
    this.frontend = [
      {
        nombre:"HTML",
        url:"assets/icon/html5.svg"
      },
      {
        nombre:"Css",
        url:"assets/icon/css.svg"
      },
      {
        nombre:"JavaScript",
        url:"assets/icon/javascript.svg"
      },
      {
        nombre:"Bootstrap",
        url:"assets/icon/bootstrap.svg"
      },
      {
        nombre:"Angular",
        url:"assets/icon/angular.svg"
      }
    ]
    this.backend = [
      {
        nombre:"TypeScript",
        url:"assets/icon/typescript.svg"
      },
      {
        nombre:"Node.js",
        url:"assets/icon/nodejs.svg"
      }
    ]
    this.database = [
      {
        nombre:"MySQL",
        url:"assets/icon/mysql.svg"
      }
    ]
  }
}
