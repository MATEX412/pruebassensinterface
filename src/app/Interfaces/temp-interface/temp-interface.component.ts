import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-temp-interface',
  standalone: true,
  imports: [RouterModule], 
  templateUrl: './temp-interface.component.html',
  styleUrls: ['./temp-interface.component.css']
})
export class TempInterfaceComponent implements OnInit {

  public temp_semanal: Chart | null = null;
  public temp_mensual: Chart | null = null;
  public temp_anual: Chart | null = null;

  ngOnInit(): void {
    this.initCharts();
  }

  constructor(private router: Router) { }

  regresar() {
    this.router.navigate(['/sens']); 
  }

  private initCharts() {
    // Datos para el gráfico semanal
    const dataSemanal = {
      labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
      datasets: [{
        label: 'Temperatura Semanal',
        data: [65, 59, 80, 81, 56, 55, 90],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    // Datos para el gráfico mensual
    const dataMensual = {
      labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      datasets: [{
        label: 'Temperatura Mensual',
        data: [60, 62, 65, 70],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }]
    };

    // Datos para el gráfico anual
    const dataAnual = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      datasets: [{
        label: 'Temperatura Anual',
        data: [22, 25, 28, 30, 32, 35, 38, 37, 33, 28, 24, 20],
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1
      }]
    };

    // Inicializar gráficos
    this.temp_semanal = new Chart("chart_semanal", {
      type: 'line',
      data: dataSemanal
    });

    this.temp_mensual = new Chart("chart_mensual", {
      type: 'line',
      data: dataMensual
    });

    this.temp_anual = new Chart("chart_anual", {
      type: 'line',
      data: dataAnual
    });
  }
}
