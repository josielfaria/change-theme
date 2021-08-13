import { Component, Input } from '@angular/core';
import { animationBar } from 'src/app/animations/progress-bar.animation';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  animations: [animationBar]
})
export class ProgressBarComponent {

  @Input() count = 100;

  getWitdhBar(): string {
    return `${this.count}%`;
  }
}
