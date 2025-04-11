import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-espacios',
  standalone: true,
  providers: [DataService],
  imports: [FormsModule, CommonModule, HttpClientModule, RouterModule, NavbarComponent],
  templateUrl: './espacios.component.html',
  styleUrl: './espacios.component.css'
})
export class EspaciosComponent {
  nuevoEspacio = {
    nombre: '',
    tipo_deporte: '',
    descripcion: '',
    ubicacion: '',
    capacidad: null,
    imagen: ''
  };

  constructor(private dataService: DataService, private router: Router) {}

  agregarEspacio() {
    this.dataService.agregarEspacio(this.nuevoEspacio).subscribe(response => {
      alert('Espacio agregado correctamente');
      this.nuevoEspacio = { nombre: '', tipo_deporte: '', descripcion: '', ubicacion: '', capacidad: null, imagen: '' };
    }, error => {
      console.error('Error al agregar el espacio', error);
    });
  }

  verEspacios() {
    this.router.navigate(['/detalle-espacios']);
  }
}
