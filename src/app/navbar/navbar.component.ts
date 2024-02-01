import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isDisplay = false;
  setIsDisplay = () => {
    console.log('Dfdsg');
    this.isDisplay = !this.isDisplay;
  };
}
