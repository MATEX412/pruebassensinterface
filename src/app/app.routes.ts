import { Routes } from '@angular/router';
import { SensInterfaceComponent } from './Interfaces/sens-interface/sens-interface.component'; 
import { TempInterfaceComponent } from './Interfaces/temp-interface/temp-interface.component';
import { HumidityInterfaceComponent } from './Interfaces/humidity-interface/humidity-interface.component';
import { PesoInterfaceComponent } from './Interfaces/peso-interface/peso-interface.component';
import { CamerasInterfaceComponent } from './Interfaces/cameras-interface/cameras-interface.component';

export const routes: Routes = [
    { path: 'sens', component: SensInterfaceComponent },
    { path: 'temp', component: TempInterfaceComponent },
    { path: 'humidity', component: HumidityInterfaceComponent },
    { path: 'peso', component: PesoInterfaceComponent },
    { path: 'camaras', component: CamerasInterfaceComponent },
    { path: '', redirectTo: '/sens', pathMatch: 'full' }, // Ruta por defecto
    { path: '**', redirectTo: '/sens' } // Ruta comodín
];
