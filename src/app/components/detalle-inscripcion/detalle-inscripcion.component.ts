import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-inscripcion',
  standalone: true,
  providers: [DataService],
  imports: [FormsModule, CommonModule, HttpClientModule, RouterModule],
  templateUrl: './detalle-inscripcion.component.html',
  styleUrls: ['./detalle-inscripcion.component.css']
})
export class DetalleInscripcionComponent implements OnInit {
  inscripciones: any[] = [];
  inscripcionesFiltradas: any[] = [];  // Lista filtrada para mostrar
  busqueda: string = '';  // Campo de búsqueda

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerInscripciones();
  }

  obtenerInscripciones() {
    this.dataService.getInscripciones().subscribe(
      (data: any[]) => {
        this.inscripciones = data;
        this.inscripcionesFiltradas = data;  // Mostrar todas las inscripciones al inicio
      },
      (error) => {
        console.error('Error al obtener inscripciones', error);
      }
    );
  }

  editarInscripcion(inscripcion: any) {
    this.dataService.updateInscripcion(inscripcion.id, { estado: inscripcion.estado }).subscribe(
      () => {
        alert('Inscripción actualizada correctamente');
      },
      (error) => {
        console.error('Error al actualizar inscripción', error);
      }
    );
  }
  
  filtrarInscripciones() {
    const filtro = this.busqueda.toLowerCase().trim();

    if (!filtro) {
      this.inscripcionesFiltradas = this.inscripciones;  // Si no hay búsqueda, mostrar todo
      return;
    }

    this.inscripcionesFiltradas = this.inscripciones.filter(inscripcion =>
      inscripcion.usuario_nombre.toLowerCase().includes(filtro) ||
      inscripcion.evento_nombre.toLowerCase().includes(filtro)
    );
  }

  eliminarInscripcion(id: number) {
    if (confirm('¿Seguro que deseas eliminar esta inscripción?')) {
      this.dataService.deleteInscripcion(id).subscribe(
        () => {
          this.inscripciones = this.inscripciones.filter(i => i.id !== id);
          alert('Inscripción eliminada correctamente');
        },
        (error) => {
          console.error('Error al eliminar inscripción', error);
        }
      );
    }
  }

  volver() {
    this.router.navigate(['/inscripciones']);
  }
}