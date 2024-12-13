import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl=environment.uriServidor
  private http=inject(HttpClient)

 //constructor(private http=inject(HttpClient)) { } de esta forma se inyectaba en versiones anteriores de angular

 constructor(){}
 loginConNest(credenciales: any){
  return this.http.post<any>(`${this.baseUrl}/auth/login`,credenciales)
}

 registerConNest(datos: any){
  return this.http.post<any>(`${this.baseUrl}/register`, datos);
 }
}
