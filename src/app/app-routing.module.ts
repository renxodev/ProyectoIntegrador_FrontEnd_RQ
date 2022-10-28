import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NewExperienciaComponent } from "./components/experiencia/new-experiencia/new-experiencia.component";
import { EditexperienciaComponent } from './components/experiencia/editexperiencia/editexperiencia.component';
import { NewestudiosComponent } from "./components/estudios/newestudios/newestudios.component";
import { EditestudiosComponent } from "./components/estudios/editestudios/editestudios.component";
import { NewskillComponent } from "./components/hys-skills/newskill/newskill.component";
import { EditskillComponent } from "./components/hys-skills/editskill/editskill.component";


const routes: Routes=[
    //{path:'', redirectTo:'home', pathMatch:'full'},
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'newexp', component: NewExperienciaComponent},
    {path:'editexp/:id', component: EditexperienciaComponent},
    {path:'newestudios', component: NewestudiosComponent},
    {path:'editestudios/:id', component: EditestudiosComponent},
    {path:'newskill', component: NewskillComponent},
    {path:'editskill/:id', component: EditskillComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{} 