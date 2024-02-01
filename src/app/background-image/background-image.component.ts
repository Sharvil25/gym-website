import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.css'],
})
export class BackgroundImageComponent {
  @Input() title: string | undefined;
  isDisplay = false;
  setIsDisplay = () => {
    console.log('Dfdsg');
    this.isDisplay = !this.isDisplay;
  };
}
