import {  AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Chart, { ChartItem } from 'chart.js/auto';
import { count } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit {

 objectsdemo:any;
 public receivedata!: { Accepted: number; Rejected: number; Progress: number; };

  constructor(public userservice:UserService){
    this.getDataFromList();
  }

  getDataFromList(){
    this.receivedata=this.userservice.myData1; 
    console.log(this.receivedata);
    console.log(typeof(this.receivedata));
   this.divide();
  }

  //converting recieved object to substrings
  divide(){

    const jsonString = JSON.stringify(this.receivedata);
    const substrings = jsonString.substring(1, jsonString.length - 1).split(',');
    console.log(substrings);
 // console.log(substrings[0][1])
 // extracting values for Accepted,Progress,Rejected from substrings: parsing key,values
    const objects = substrings.map((substring) => JSON.parse(`{${substring}}`));
    this.objectsdemo=objects;
    console.log(this.objectsdemo);
   console.log(objects);
   console.log(objects[0].Accepted);
   console.log(objects[1].Rejected);
  }

  
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
            data: [this.objectsdemo[0].Accepted]
          },
          {
            label: 'Progress',
            backgroundColor: 'orange',
            data: [this.objectsdemo[2].Progress]
          },
          {
            label: 'Rejected',
            backgroundColor: 'red',
            data: [this.objectsdemo[1].Rejected]
          }
        ]
      },
    });

    // chart.data.datasets[0].data = [];
    // chart.update();
  }

}