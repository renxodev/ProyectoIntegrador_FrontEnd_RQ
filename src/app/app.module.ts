import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HysSkillsComponent } from './components/hys-skills/hys-skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditexperienciaComponent } from './components/experiencia/editexperiencia/editexperiencia.component';
import { FormsModule } from '@angular/forms';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { interceptorProvider } from './service/interceptor.service';
import { EditestudiosComponent } from './components/estudios/editestudios/editestudios.component';
import { NewestudiosComponent } from './components/estudios/newestudios/newestudios.component';
import { EditskillComponent } from './components/hys-skills/editskill/editskill.component';
import { CommonModule } from '@angular/common';
import { NewskillComponent } from './components/hys-skills/newskill/newskill.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    AboutComponent,
    ExperienciaComponent,
    HysSkillsComponent,
    ProyectoComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    NewExperienciaComponent,
    EditexperienciaComponent,
    EstudiosComponent,
    EditestudiosComponent,
    NewestudiosComponent,
    EditskillComponent,
    NewskillComponent
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [ interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
