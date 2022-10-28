import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/service/estudios.service';

@Component({
  selector: 'app-newestudios',
  templateUrl: './newestudios.component.html',
  styleUrls: ['./newestudios.component.css']
})
export class NewestudiosComponent implements OnInit {
  nombreE: string;
  descripcionE: string;

  constructor(private estudiosS: EstudiosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const estudios = new Estudios(this.nombreE, this.descripcionE);
    this.estudiosS.save(estudios).subscribe(
      _data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, _err =>{
        alert("falló el agregar!");
        this.router.navigate(['home']);
      }
    )
  }

}
