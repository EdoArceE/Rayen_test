export class Usuario {
  _id!: string;
  bio!: string;
  email!: string;
  imagen!: string;
  nombre!: string;
  numSeguidores!: number;
  numSiguiendo!: number;
  siguiendo!: boolean;
  username!: string;
}
export class ListadoUsuario {
  bio!: string;
  email!: string;
  fecha_actualizado!: string;
  fecha_creado!: string;
  id!: string;
  nombre!: string;
  password!: string;
  siguiendo!: boolean;
  username!: string
}
