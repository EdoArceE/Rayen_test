import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signup } from '../class/Signup';
import { Login } from '../class/Login';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private httpOptions = {
    headers: new HttpHeaders().set('Content-Type',
      'application/json')
  };
  private url_Base = "http://localhost:3000"
  constructor(private http: HttpClient) {
  }

  GuardarUsuario(usuario: Signup) {
    return this.POST("/api/usuarios/signup", this.parsear(usuario));
  }
  Login(login: Login) {
    return this.POST("/api/usuarios/login", this.parsear(login))
  }
  get ListadoUsuario() {
    return this.GET("/api/usuarios/explore")
  }

  get ListadoPost() {
    return this.GET("/api/posts/explore")
  }
  private POST(url: string, data: string, options = this.httpOptions) {
    return this.http.post(this.url_Base + url, data, options).toPromise()
  }
  private GET(url: string) {
    return this.http.get(this.url_Base + url).toPromise();
  }
  private parsear(data: any) {
    return JSON.stringify(data);
  }
}
