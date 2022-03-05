import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from 'src/app/class/Signup';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  private usuario = new Signup();
  constructor(private http: HttpService,
    private router: Router) {
    console.log(this.usuario)
  }

  ngOnInit(): void {
  }

  async submit(event: Event) {
    console.log("hola")
    event.preventDefault();
    const correo = this.validarEmail()
    if (!correo) throw "Error en ingreso de correo, favor revisar";
    try {
      this.usuario.email = correo
      this.usuario.nombre = this.validarNombre();
      this.usuario.username = this.validarUsername();
      this.usuario.bio = this.validarBio();
      this.usuario.password = this.validaPass();
    } catch ($e) {
      alert($e)
    }
    try {
      const resp = await this.http.GuardarUsuario(this.usuario);
      if (resp) {
        const div = document.getElementById("FormularioSignup");
        if (div) div.innerHTML = "<h1>Login Exitoso, sera redirigido al login</h1>"
        setTimeout(() => {
          this.router.navigate(['login'])
        }, 5000);
      }
    } catch ($e) {
      console.log($e)
    }

  }
  private validaPass(): string {
    const div = document.getElementById("Password") as HTMLInputElement
    const valor = div.value;
    return valor;
  }
  private validarUsername(): string {
    const div = document.getElementById("UserName") as HTMLInputElement
    const valor = div.value;
    return valor;
  }
  private validarEmail() {
    const regExp = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    const div = document.getElementById("Email") as HTMLInputElement
    const valor = div.value;
    if (!regExp.test(valor)) throw "Correo ingresado es invalido"
    return valor;
  }
  private validarNombre() {
    const div = document.getElementById("NombreUsuario") as HTMLInputElement
    const valor = div.value;
    return valor;
  }
  private validarBio() {
    const div = document.getElementById("Bio") as HTMLInputElement
    const valor = div.value;
    return valor;
  }

}
