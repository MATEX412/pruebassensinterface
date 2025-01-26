import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SensInterfaceComponent } from './Interfaces/sens-interface/sens-interface.component';
import { TempInterfaceComponent } from './Interfaces/temp-interface/temp-interface.component';
import { HumidityInterfaceComponent } from './Interfaces/humidity-interface/humidity-interface.component';
import { WeightInterfaceComponent } from './Interfaces/weight-interface/weight-interface.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SensInterfaceComponent, TempInterfaceComponent, HumidityInterfaceComponent, WeightInterfaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
