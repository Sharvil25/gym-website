import { Component } from '@angular/core';

@Component({
  selector: 'app-unlimited-classes',
  templateUrl: './unlimited-classes.component.html',
  styleUrls: ['./unlimited-classes.component.css']
})
export class UnlimitedClassesComponent {

  newdata=[
    {
      Workout : "Yoga",
      Name : "Ryan Knight",
      img : "assets/images/classes-1.jpg.webp"
   },

   {
    Workout : "Running",
    Name : "Randy Rivera",
    img : "assets/images/classes-2.jpg.webp"
   },

   {
  Workout : "Personal Training",
  Name : "Cole Robertson",
  img : "assets/images/classes-3.jpg.webp"
   },

  {
    Workout : "Personal Training",
    Name : "Cole Robertson",
    img : "assets/images/classes-4.jpg.webp"
  },

  {
    Workout : "Dance",
    Name : "Russell Lane",
    img : "assets/images/classes-5.jpg.webp"
  },

  {
    Workout : "Weight Loss",
    Name : "Ryan Scott",
    img : "assets/images/classes-6.jpg.webp"
  },

  {
    Workout : "Karate",
    Name : "Ryan Scott",
    img : "assets/images/classes-7.jpg.webp"
  },

  {
    Workout : "Weight Loss",
    Name : "Kevin Mccormick",
    img : "assets/images/classes-8.jpg.webp"
  }
  ]


}
