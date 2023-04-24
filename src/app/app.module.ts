import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';
import { FooterComponent } from './footer/footer.component';
import { AcademicInfoComponent } from './academic-info/academic-info.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
  
    NavbarComponent,
    SkillsComponent,
   
    ResumeComponent,
    FooterComponent,
    AcademicInfoComponent,
    ProfessionalExperienceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
