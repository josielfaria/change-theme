import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-switch-theme',
  templateUrl: './switch-theme.component.html',
  styleUrls: ['./switch-theme.component.scss']
})
export class SwitchThemeComponent {

  constructor(private themeService: ThemeService) { }

  toggleTheme(): void {
    this.themeService.setTheme();
  }
}
