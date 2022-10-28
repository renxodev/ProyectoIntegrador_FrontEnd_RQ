import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SexperienciaService } from 'src/app/service/sexperiencia.service';

@Component({
  selector: 'app-newexperiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreEx:string = '';
  descripcionEx:string = '';
  
  constructor(private sExperiencia: SexperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe= new Experiencia(this.nombreEx, this.descripcionEx);
    this.sExperiencia.save(expe).subscribe(
      _data =>{
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, _err =>{
      alert("Falló");
      this.router.navigate(['home']); 
    } 
    )
  }
}
