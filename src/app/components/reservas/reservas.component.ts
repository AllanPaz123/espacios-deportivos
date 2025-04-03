import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-reservas',
  standalone: true,
  providers: [DataService],
  imports: [FormsModule, CommonModule, HttpClientModule, RouterModule],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent implements OnInit {
  usuarios: any[] = []; // Cambiado a usuarios para reflejar el nombre correcto
  espacios: any[] = [];
  eventos: any[] = [];
  reserva = { usuario_id: '', espacio_id: '', evento_id: '', fecha: '' };

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerEspacios();
    this.obtenerEventos();
    this.obtenerUsuarios();
  }
  obtenerUsuarios() {
    this.dataService. getUsuarios().subscribe(data => this.usuarios = data);
  }

  obtenerEspacios() {
    this.dataService.obtenerEspacios().subscribe(data => this.espacios = data);
  }

  obtenerEventos() {
    this.dataService.getEventos().subscribe(data => this.eventos = data);
  }
  

  hacerReserva() {
    this.dataService.addReserva(this.reserva).subscribe(
      () => {
        alert('Reserva realizada con éxito');
        this.reserva = { usuario_id: '', espacio_id: '', evento_id: '', fecha: '' };
      },
      error => console.error('Error al reservar', error)
    );
  }

  verReservas() {
    this.router.navigate(['/detalle-reservas']);
  }
}
