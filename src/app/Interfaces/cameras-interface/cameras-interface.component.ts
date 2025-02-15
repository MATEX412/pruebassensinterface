import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cameras-interface',
  imports: [],
  templateUrl: './cameras-interface.component.html',
  styleUrl: './cameras-interface.component.css'
})
export class CamerasInterfaceComponent {
  constructor(private router: Router) {}

  regresar() {
    this.router.navigate(['/sens']); // Redirige a la interfaz inicial
  }
}
