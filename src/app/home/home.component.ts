import {  AfterViewInit, Component, OnInit } from '@angular/core';
import Chart, { ChartItem } from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit {
  
  ngAfterViewInit() {

    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['STATUS'],
        datasets: [
          {
            label: 'Accepted',
            backgroundColor: 'green',
            data: [20]
          },
          {
            label: 'Progress',
            backgroundColor: 'orange',
            data: [10]
          },
          {
            label: 'Rejected',
            backgroundColor: 'red',
            data: [30]
          }
        ]
      },
    });

    // chart.data.datasets[0].data = [];
    // chart.update();
  }

}