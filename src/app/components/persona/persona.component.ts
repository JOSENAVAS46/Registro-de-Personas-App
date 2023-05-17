import { Component } from '@angular/core';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent {
  cedula = '';
  nombre = '';
  apellido = '';
  fecha_nac = new Date();
  lstPersona: Persona[] = [];

  agregarPersona(): void {
    const persona: Persona = {
      cedula : this.cedula,
      nombre : this.nombre,
      apellido : this.apellido,
      fecha_nac : this.fecha_nac,
    };

    this.lstPersona.push(persona);

    this.cedula = '';
    this.nombre = '';
    this.apellido = '';
    this.fecha_nac = new Date();
  }

  
}
