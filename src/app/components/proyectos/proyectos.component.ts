import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [],
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
        descripcion:"Cine cartelara proximamente combos",
        img:"assets/img/desarrollo.webp",
        tecnologias:["Angular", "HTML", "CSS"]
      },
      {
        titulo: "Otro Proyecto",
        descripcion: "Descripción de otro proyecto",
        img: "assets/img/desarrollo.webp",
        tecnologias: ["React", "JavaScript", "Bootstrap"]
    },
    {
      titulo: "Otro Proyecto",
      descripcion: "Descripción de otro proyecto",
      img: "assets/img/desarrollo.webp",
      tecnologias: ["Node js", "Express js", "MySQL"]
  }
    ]
  }
}
