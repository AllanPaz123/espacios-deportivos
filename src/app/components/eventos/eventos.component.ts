import { Component, OnInit } from '@angular/core';
import { DataService, Evento } from '../../services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, RouterModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css',
  providers: [DataService]
})
export class EventosComponent implements OnInit {
   
  eventos: Evento[] = []; // Aquí se guardarán los eventos obtenidos del backend

   constructor(private dataService: DataService, private router: Router) {}

   ngOnInit(): void {
    // Llamar al servicio cuando el componente se inicialice
    this.dataService.getEventos().subscribe(
      (data) => {
        this.eventos = data; // Asignar los datos obtenidos a la variable 'eventos'
      },
      (error) => {
        console.error('Error al obtener los eventos:', error);
      }
    );
  }
}
