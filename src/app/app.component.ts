import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { PesoInterfaceComponent } from './Interfaces/peso-interface/peso-interface.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, PesoInterfaceComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
