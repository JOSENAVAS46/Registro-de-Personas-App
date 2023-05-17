export class Persona {
  cedula: string;
  nombre: string;
  apellido: string;
  fecha_nac: Date;

  constructor(
    _cedula: string,
    _nombre: string,
    _apellido: string,
    _fecha_nac: Date
  ) {
    this.cedula = _cedula;
    this.nombre = _nombre;
    this.apellido = _apellido;
    this.fecha_nac = _fecha_nac;
  }
}
