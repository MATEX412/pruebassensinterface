import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-peso-interface',
  standalone: true,
  templateUrl: './peso-interface.component.html',
  styleUrls: ['./peso-interface.component.css']
})
export class PesoInterfaceComponent implements OnInit{

  public peso_semanal: Chart | null = null;
  public peso_mensual: Chart | null = null;
  public peso_anual: Chart | null = null;

  ngOnInit(): void {
    this.initCharts();
  }

  constructor(private router: Router) {}

  regresar() {
    this.router.navigate(['/sens']); // Redirige a la interfaz inicial
  }

  private initCharts() {
    // Datos para el gráfico semanal
    const dataSemanal = {
      labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
      datasets: [{
        label: 'Peso Semanal',
        data: [90, 75, 80, 65, 70, 55, 52],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    // Datos para el gráfico mensual
    const dataMensual = {
      labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      datasets: [{
        label: 'Peso Mensual',
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
        label: 'Peso Anual',
        data: [15, 20, 28, 50, 80, 15, 45, 30, 50, 28, 40, 80],
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1
      }]
    };

    // Inicializar gráficos
    this.peso_semanal = new Chart("chart_semanal", {
      type: 'line',
      data: dataSemanal
    });

    this.peso_mensual = new Chart("chart_mensual", {
      type: 'line',
      data: dataMensual
    });

    this.peso_anual = new Chart("chart_anual", {
      type: 'line',
      data: dataAnual
    });
  }
}
