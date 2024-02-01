import { Component } from '@angular/core';

@Component({
  selector: 'app-membership-plans',
  templateUrl: './membership-plans.component.html',
  styleUrls: ['./membership-plans.component.css']
})
export class MembershipPlansComponent {

  firstdata = [
    {
       Heading : "BASIC",
       Money : "$17",
       number : "/01 mo",
       time : "Duration",
       period : "12 months",
       trainer : "Personal Trainer",
       member : "00 Person",
       people : "Amount of people",
       newperson : "01 Person",
       visits : "Number Of Visits",
       qty : "Unlimited"
    }
  ]

  seconddata = [
    {
      Heading : "STANDARD",
      Money : "$57",
      number : "/01 mo",
      time : "Duration",
      period : "12 months",
      trainer : "Personal Trainer",
      member : "00 Person",
      people : "Amount of people",
      newperson : "01 Person",
      visits : "Number Of Visits",
      qty : "Unlimited"
   }
  ]

  thirddata = [
    {
      Heading : "PREMIUM",
      Money : "$98",
      number : "/01 mo",
      time : "Duration",
      period : "12 months",
      trainer : "Personal Trainer",
      member : "00 Person",
      people : "Amount of people",
      newperson : "01 Person",
      visits : "Number Of Visits",
      qty : "Unlimited"
   }
  ]

}
