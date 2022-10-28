import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { JwtDto } from "../model/jwtdto";
import { LoginUsuario } from "../model/loginusuario";
import { Nuevousuario } from "../model/nuevousuario";

@Injectable({
    providedIn:"root"
})
export class AuthService {
    authURL=  environment.URL + 'auth/'

    constructor(private httpClient:HttpClient){}
    public nuevo(nuevoUsuario: Nuevousuario): Observable<any>{
        return this.httpClient.post<any>(this.authURL+"nuevo", nuevoUsuario);
    }

    public login(loginUsuario: LoginUsuario):Observable<JwtDto>{
        return this.httpClient.post<JwtDto>(this.authURL+"login",loginUsuario)
    }
}
