import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SexperienciaService } from 'src/app/service/sexperiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[]=[];

  constructor(private Sexperiencia: SexperienciaService,private tokenService:TokenService) { }
  isLogged=false;

  ngOnInit(): void {
    this.update();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else {
      this.isLogged=false;
    }
  }
 update(): void {
  this.Sexperiencia.lista().subscribe(
    data =>{this.expe=data}
  )
 }
 delete(id?:number){
  if(id!=undefined){
    this.Sexperiencia.delete(id).subscribe(
      data=>{
        this.update();
      }, err=>{
        alert("No se pudo borrar la experiencia");
      }
    )
  }
 }
}
