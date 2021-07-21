import { Injectable } from '@angular/core';
import { ThemeEnum } from '../enums/theme.enum';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSelected = ThemeEnum.DARK;

  getTheme(): ThemeEnum {
    return this.themeSelected;
  }

  setTheme(): void {
    this.themeSelected = this.themeSelected === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;
  }
}
