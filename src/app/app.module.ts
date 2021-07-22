import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SwitchThemeComponent } from './components/switch-theme/switch-theme.component';
import { SerratedMountainsComponent } from './components/serrated-mountains/serrated-mountains.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SwitchThemeComponent,
    SerratedMountainsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
