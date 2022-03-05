import { Injectable } from '@angular/core';
import { Usuario } from '../class/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private Usuario = new Usuario();

  constructor() { }

  asignarUsuario(usuario: Usuario) {
    this.Usuario = usuario
  }
  get ExisteUsuario() {
    return this.Usuario._id !== undefined
  }
}
