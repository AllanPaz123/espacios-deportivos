import { Component, OnInit } from '@angular/core';
import { DataService, Evento } from '../../services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-eventosinsc',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, RouterModule, NavbarComponent],
  templateUrl: './eventosinsc.component.html',
  styleUrl: './eventosinsc.component.css',
  providers: [DataService]
  
})
export class EventosinscComponent {
  nuevoEvento = {
    nombre: '',
    descripcion: '',
    fecha_inicio: '',
    fecha_fin: '',
    ubicacion: '',
    capacidad: 0,
    imagen: ''
  };

  constructor(private dataService: DataService, private router: Router) {}

  insertarEvento() {
    this.dataService.insertarEvento(this.nuevoEvento).subscribe({
      next: () => {
        alert('Evento insertado exitosamente');
        this.router.navigate(['/eventos']);
      },
      error: err => {
        console.error('Error al insertar evento:', err);
        alert('Error al insertar evento');
      }
    });
  }

  irAEventos() {
    this.router.navigate(['/eventos']);
  }
}
