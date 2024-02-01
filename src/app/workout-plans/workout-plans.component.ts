import { Component } from '@angular/core';

@Component({
  selector: 'app-workout-plans',
  templateUrl: './workout-plans.component.html',
  styleUrls: ['./workout-plans.component.css']
})
export class WorkoutPlansComponent {

  
  data =[
    {
      img:"assets/images/service-icon-1.png.webp",
      name:"Strategies",
      desc:"Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes."
    },
    {
      img:"assets/images/service-icon-2.png.webp",
      name:"Yoga",
      desc:"Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes."
    },
    {
      img:"assets/images/service-icon-3.png.webp",
      name:"Workout",
      desc:"Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes."
    },
    {
      img:"assets/images/service-icon-4.png.webp",
      name:"Weight Loss",
      desc:"Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes."
    },
  ]

}
