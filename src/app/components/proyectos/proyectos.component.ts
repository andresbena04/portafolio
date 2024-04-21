import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

  proyectos:any = []
  constructor(){}

  ngOnInit(){
    this.proyectos = [
      {
        titulo:"Cine App",
        descripcion:"Diseño de una aplicacion web para un cine, con la vista de las peliculas que estan en cartera y la que estan proximas a estrenar",
        img:["assets/img/cine1.png","assets/img/cine2.png"],
        tecnologias:["Angular", "Bootstrap"],
        url:"https://andresbena04.github.io/cine-angular/"
      }
    ]
  }
  MultipleProjects(): boolean {
    return this.proyectos.length > 1;
  }
}
