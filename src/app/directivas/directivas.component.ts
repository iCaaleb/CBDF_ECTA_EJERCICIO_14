import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  imports: [],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {
  // Está logueado o no el usuario
  usuario_logeado = true
  // Listado de empleados id, nombre, sueldo, estado
  usuarios = [
    {
      id: 1,
      nombre: "Andrés",
      sueldo: 8600,
      activo: true
    },
    {
      id: 1,
      nombre: "Caleb",
      sueldo: 30000,
      activo: true
    },
    {
      id: 1,
      nombre: "Marco",
      sueldo: 3000,
      activo: true
    },
    {
      id: 1,
      nombre: "Diego",
      sueldo: 1000,
      activo: true
    },
    {
      id: 1,
      nombre: "Max",
      sueldo: 8000,
      activo: true
    },
    {
      id: 1,
      nombre: "Pedro",
      sueldo: 1000,
      activo: true
    },
    {
      id: 1,
      nombre: "Andrés",
      sueldo: 8600,
      activo: true
    },
    {
      id: 1,
      nombre: "Andrés",
      sueldo: 8600,
      activo: true
    },
    {
      id: 1,
      nombre: "Andrés",
      sueldo: 8600,
      activo: true
    },
    {
      id: 1,
      nombre: "Andrés",
      sueldo: 8600,
      activo: true
    }
  ]
}
