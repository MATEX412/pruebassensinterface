import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-temp-interface',
  standalone: true,
  imports: [RouterModule], // Importa RouterModule para standalone components
  templateUrl: './temp-interface.component.html',
  styleUrls: ['./temp-interface.component.css']
})
export class TempInterfaceComponent {
  constructor(private router: Router) {}

  regresar() {
    this.router.navigate(['/sens']); // Navega de vuelta a SensInterface
  }
}
