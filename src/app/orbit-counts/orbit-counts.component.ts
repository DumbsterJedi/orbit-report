import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css'],
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  typesArr: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  typeCount(type: string) {
    let count: number = 0;

    if (type == 'space debris') {
      for (let i = 0; i < this.satellites.length; i++) {
        if (this.satellites[i].type.toLowerCase() == 'space debris') {
          count++;
        }
      }
      return count;
    }

    if (type == 'communication') {
      for (let i = 0; i < this.satellites.length; i++) {
        if (this.satellites[i].type.toLowerCase() == 'communication') {
          count++;
        }
      }
      return count;
    }

    if (type == 'probe') {
      for (let i = 0; i < this.satellites.length; i++) {
        if (this.satellites[i].type.toLowerCase() == 'probe') {
          count++;
        }
      }
      return count;
    }

    if (type == 'positioning') {
      for (let i = 0; i < this.satellites.length; i++) {
        if (this.satellites[i].type.toLowerCase() == 'positioning') {
          count++;
        }
      }
      return count;
    }
    if (type == 'space station') {
      for (let i = 0; i < this.satellites.length; i++) {
        if (this.satellites[i].type.toLowerCase() == 'space station') {
          count++;
        }
      }
      return count;
    }

    if (type == 'telescope') {
      for (let i = 0; i < this.satellites.length; i++) {
        if (this.satellites[i].type.toLowerCase() == 'telescope') {
          count++;
        }
      }
      return count;
    }
  }

  typesCounter(){
    for(let i = 0; i < this.satellites.length; i++){
      if(!this.typesArr.includes(this.satellites[i].type)){
        this.typesArr.push(this.satellites[i].type)
      }
    }
  }

}
