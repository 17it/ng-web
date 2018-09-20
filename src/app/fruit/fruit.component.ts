import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {
  headLink = [
    {
      href: '/HOME',
      text: 'HOME'
    },
    {
      href: '/STATS',
      text: 'STATS'
    },
    {
      href: '/CONTACT',
      text: 'CONTACT'
    },
    {
      href: '/ABOUT',
      text: 'ABOUT'
    }
  ];
  accordions = [
    {
      h4: 'jumping Jacks'
    },
    {
      h4: 'Wall Set'
    },
    {
      h4: 'Push Up'
    },
    {
      h4: 'Abdominal Crunch'
    },
    {
      h4: 'Step-up onto Chair'
    },
    {
      h4: 'Squat'
    },
    {
      h4: 'Tricepts Dip On Chair'
    },
    {
      h4: 'Plank'
    },
    {
      h4: 'High Knee Running In Place'
    },
    {
      h4: 'Lunge'
    },
    {
      h4: 'Push-up And Rotation'
    },
    {
      h4: 'Side Plank'
    }
  ];
  showIndex = 0;
  countDown = 30;
  countInterval = null;

  constructor() { }

  ngOnInit() {
    this.init();
  }

  init(): void {
    console.log('init');
    this.count();
  }

  count(): void {
    this.countInterval = setInterval(() => {
      if (this.countDown <= 1) {
        clearInterval(this.countInterval);
        if (this.showIndex > 11) {
          return;
        }
        this.countDown = 30;
        this.showIndex ++;
        this.count();
        return;
      }
      this.countDown--;
    }, 1000);
  }

  toggleDiv(i): void {
    clearInterval(this.countInterval);
    this.showIndex = i;
    this.countDown = 30;
    this.count();
    console.log('toggle', i);
  }
}
