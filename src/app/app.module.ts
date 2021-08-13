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
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CloudsBackgroundComponent } from './components/clouds-background/clouds-background.component';
import { StarryBackgroundComponent } from './components/starry-background/starry-background.component';
import { CopyrightComponent } from './components/copyright/copyright.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SwitchThemeComponent,
    SerratedMountainsComponent,
    ContentComponent,
    ButtonComponent,
    TitleComponent,
    FormExampleComponent,
    ProgressBarComponent,
    CloudsBackgroundComponent,
    StarryBackgroundComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
