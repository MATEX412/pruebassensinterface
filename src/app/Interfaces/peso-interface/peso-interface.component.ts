import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peso-interface',
  standalone: true,
  templateUrl: './peso-interface.component.html',
  styleUrls: ['./peso-interface.component.css']
})
export class PesoInterfaceComponent {
  constructor(private router: Router) {}

  regresar() {
    this.router.navigate(['/sens']); // Redirige a la interfaz inicial
  }
}
