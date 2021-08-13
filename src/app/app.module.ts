import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CloudsBackgroundComponent } from './components/clouds-background/clouds-background.component';
import { ContentComponent } from './components/content/content.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { FormExampleComponent } from './components/form-example/form-example.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SerratedMountainsComponent } from './components/serrated-mountains/serrated-mountains.component';
import { StarryBackgroundComponent } from './components/starry-background/starry-background.component';
import { SwitchThemeComponent } from './components/switch-theme/switch-theme.component';
import { TitleComponent } from './components/title/title.component';


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
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
