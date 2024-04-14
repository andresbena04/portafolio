import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  year: any
  constructor() { }
  ngOnInit() {
    this.year = new Date().getFullYear();
  }
}
