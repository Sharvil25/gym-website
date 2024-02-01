import { Component } from '@angular/core';

@Component({
  selector: 'app-expert-trainers',
  templateUrl: './expert-trainers.component.html',
  styleUrls: ['./expert-trainers.component.css']
})
export class ExpertTrainersComponent {

  
  trainer =[
    {
      img : "assets/images/trainer-1.jpg.webp",
      Name : "Patrick Cortez",
      role : "Leader",
      des : "non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },

    {
      img : "assets/images/trainer-2.jpg.webp",
      Name : "Gregory Powers",
      role : "Leader",
      des : "non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },

    {
      img : "assets/images/trainer-3.jpg.webp",
      Name : "Walter Wagner",
      role : "Leader",
      des : "non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
  ]
}
