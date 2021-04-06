import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css'],
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  typesArr: any[] = [];
  countArr: any[] = [];
  constructor() {}

// typecount no longer used ↓↓↓↓↓
  typeCount(type) {
    let count: number = 0;
    if (type === 'space debris') {
      for (let i = 0; i < this.satellites.length; i++) {
        if (this.satellites[i].type.toLowerCase() == 'space debris') {
          count++;
        }
      }
      return count;
    }
    
    if (type === 'communication') {
      for (let i = 0; i < this.satellites.length; i++) {
        if (this.satellites[i].type.toLowerCase() == 'communication') {
          count++;
          console.log(count);
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

  typesArrBuilder(){
    for (let i = 0; i < this.satellites.length; i++){
      if (!this.typesArr.includes(this.satellites[i].type)){
        this.typesArr.push(this.satellites[i].type)
      }
    }

}
  counter(){
    let count: number = 0;
    this.countArr = [];

for(let s = 0; s < this.typesArr.length; s++){
count = 0;
    if (this.typesArr[s] === 'Space Debris') {
      for (let i = 0; i < this.satellites.length; i++) {
        if (this.satellites[i].type.toLowerCase() == 'space debris') {
          count++;
        }
      }
      this.countArr.push(count);
    }
    
    else if (this.typesArr[s] === 'Communication') {
      for (let i = 0; i < this.satellites.length; i++) {
        if (this.satellites[i].type.toLowerCase() == 'communication') {
          count++;
        }
      }
      this.countArr.push(count);
    }

    else if (this.typesArr[s] == 'Probe') {
      for (let i = 0; i < this.satellites.length; i++) {
        if (this.satellites[i].type.toLowerCase() == 'probe') {
          count++;
        }
      }
      this.countArr.push(count);
    }

   else if (this.typesArr[s] == 'Positioning') {
      for (let i = 0; i < this.satellites.length; i++) {
        if (this.satellites[i].type.toLowerCase() == 'positioning') {
          count++;
        }
      }
      this.countArr.push(count);
    }

   else if (this.typesArr[s] == 'Space Station') {
      for (let i = 0; i < this.satellites.length; i++) {
        if (this.satellites[i].type.toLowerCase() == 'space station') {
          count++;
        }
      }
      this.countArr.push(count);
    }

   else if (this.typesArr[s] == 'Telescope') {
      for (let i = 0; i < this.satellites.length; i++) {
        if (this.satellites[i].type.toLowerCase() == 'telescope') {
          count++;
        }
      }
      this.countArr.push(count);
    }
  }

}
  


ngOnInit(): void {}

}