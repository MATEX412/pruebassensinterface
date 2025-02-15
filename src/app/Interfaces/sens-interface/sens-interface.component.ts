import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sens-interface',
  templateUrl: './sens-interface.component.html',
  styleUrls: ['./sens-interface.component.css']
})
export class SensInterfaceComponent {
  constructor(private router: Router) {}

  irATemperatura() {
    this.router.navigate(['/temp']);
  }

  irAHumedad() {
    this.router.navigate(['/humidity']);
  }

  irAPeso() {
    this.router.navigate(['/peso']);  // Navega a la interfaz de peso
  }

  irACamaras(){
    this.router.navigate(['/camaras']);
  }
}
