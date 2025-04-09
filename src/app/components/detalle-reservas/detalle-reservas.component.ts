import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-detalle-reservas',
  standalone: true,
  providers: [DataService],
  imports: [FormsModule, CommonModule, HttpClientModule, RouterModule, NavbarComponent],
  templateUrl: './detalle-reservas.component.html',
  styleUrl: './detalle-reservas.component.css'
})
export class DetalleReservasComponent implements OnInit {
  reservas: any[] = [];
  reservasFiltradas: any[] = [];
  filtroGeneral: string = '';
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerReservas();
  }

  obtenerReservas() {
    this.dataService.getReservas().subscribe(
      (data: any[]) => {
        this.reservas = data.map(reserva => ({
          ...reserva,
          evento_ubicacion: reserva.evento_ubicacion,
          espacio_ubicacion: reserva.espacio_ubicacion
        }));
        this.filtrarReservas(); // Aplicar filtro después de cargar los datos
      },
      (error) => console.error('Error al obtener reservas', error)
    );
  }

  filtrarReservas() {
    const filtro = this.filtroGeneral.toLowerCase();

    this.reservasFiltradas = this.reservas.filter(reserva =>
      reserva.usuario_nombre.toLowerCase().includes(filtro) ||
      reserva.evento_nombre?.toLowerCase().includes(filtro) ||
      reserva.espacio_nombre?.toLowerCase().includes(filtro) ||
      reserva.evento_ubicacion?.toLowerCase().includes(filtro) ||
      reserva.espacio_ubicacion?.toLowerCase().includes(filtro)
    );
  }
  /*
  obtenerReservas() {
    this.dataService.getReservas().subscribe(
      (data: any[]) => this.reservas = data,
      (error) => console.error('Error al obtener reservas', error)
    );
  }
*/
  editarReserva(reserva: any) {
    this.dataService.updateReserva(reserva.id, { estado: reserva.estado }).subscribe(
      () => alert('Reserva actualizada correctamente'),
      (error) => console.error('Error al actualizar reserva', error)
    );
  }

  eliminarReserva(id: number) {
    if (confirm('¿Seguro que deseas eliminar esta reserva?')) {
      this.dataService.deleteReserva(id).subscribe(
        () => {
          this.reservas = this.reservas.filter(r => r.id !== id);
          alert('Reserva eliminada correctamente');
        },
        (error) => console.error('Error al eliminar reserva', error)
      );
    }
  }

  volver() {
    this.router.navigate(['/reservas']);
  }
}
