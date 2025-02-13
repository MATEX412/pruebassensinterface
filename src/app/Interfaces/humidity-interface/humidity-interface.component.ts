import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-humidity-interface',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './humidity-interface.component.html',
  styleUrls: ['./humidity-interface.component.css']
})
export class HumidityInterfaceComponent {
  constructor(private router: Router) {}

  regresar() {
    this.router.navigate(['/sens']); // Redirige a la interfaz inicial
  }
}
