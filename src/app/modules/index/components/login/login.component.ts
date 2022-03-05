import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/class/Login';
import { Usuario } from 'src/app/class/Usuario';
import { HttpService } from 'src/app/services/http.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private usuario = new Login();
  constructor(
    private http: HttpService,
    private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  async submit(evento: Event) {
    evento.preventDefault();
    try {
      this.usuario.email = this.validarEmail();
      this.usuario.password = this.validaPass();
    } catch ($e) {
      alert($e)
    }
    try {
      const resp = await this.http.Login(this.usuario) as { token: string, usuario: Usuario }
      if (resp) {
        localStorage.setItem("token", resp.token)
        this.usuarioService.asignarUsuario(resp.usuario)
        this.router.navigate(['/explore'])
      }
    } catch ($e) {
      console.log($e)
    }

  }
  validaPass() {
    return this.ObtenerValor("PassInput")
  }
  validarEmail() {
    return this.ObtenerValor("Email")
  }
  private ObtenerValor(nombre: string) {
    const div = document.getElementById(nombre) as HTMLInputElement
    const valor = div.value;
    return valor;
  }
}
