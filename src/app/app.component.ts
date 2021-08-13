import { Component } from '@angular/core';
import { ThemeEnum } from './enums/theme.enum';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ThemeEnum = ThemeEnum;

  constructor(private themeService: ThemeService) { }

  getTheme(): ThemeEnum {
    return this.themeService.getTheme();
  }
}
