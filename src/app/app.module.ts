import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SwitchThemeComponent } from './components/switch-theme/switch-theme.component';
import { SerratedMountainsComponent } from './components/serrated-mountains/serrated-mountains.component';
import { ContentComponent } from './components/content/content.component';
import { ButtonComponent } from './components/button/button.component';
import { TitleComponent } from './components/title/title.component';
import { FormExampleComponent } from './components/form-example/form-example.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SwitchThemeComponent,
    SerratedMountainsComponent,
    ContentComponent,
    ButtonComponent,
    TitleComponent,
    FormExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
