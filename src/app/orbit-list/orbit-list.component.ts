import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';


@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {
  @Input() satellites: Satellite[];
  zebraCounter:number = 0;
    constructor() { }

  ngOnInit(): void {
  }

  sort(column:string): void {
    this.satellites.sort(function(a: Satellite, b: Satellite): number {
      if(a[column] < b[column]) {
         return -1;
      } else if (a[column] > b[column]) {
         return 1;
      }
      return 0;
   });
  }

  zebra(){
if(this.zebraCounter === 0){
  this.zebraCounter = 1;
  return true
} else {
  this.zebraCounter = 0;
  return false
}
    }

  
  
}
