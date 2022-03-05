import { Component, OnInit } from '@angular/core';
import { ListadoUsuario } from 'src/app/class/Usuario';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-descubrir-usuarios',
  templateUrl: './descubrir-usuarios.component.html',
  styleUrls: ['./descubrir-usuarios.component.scss']
})
export class DescubrirUsuariosComponent implements OnInit {
  usuarios: ListadoUsuario[] = []
  colores: { _id: string, color: string }[] = []
  constructor(
    private http: HttpService
  ) { }

  async ngOnInit(): Promise<void> {
    this.usuarios = await this.http.ListadoUsuario as ListadoUsuario[];
    this.colores = this.usuarios.map(usuario => {
      let color
      do {
        color = Math.floor(Math.random() * 16777215).toString(16);
      } while (color === '111111')
      return { color, _id: usuario.id }
    })
    setTimeout(() => {
      this.colores.forEach(
        color => {
          const div = document.getElementById(color._id);
          if (div) div.style.background = '#' + color.color
        }
      )
    }, 1);
  }

}
