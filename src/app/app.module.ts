import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SwitchThemeComponent } from './components/switch-theme/switch-theme.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SwitchThemeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
