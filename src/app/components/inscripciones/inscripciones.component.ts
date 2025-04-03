import { Component, OnInit } from '@angular/core';
import { DataService, Evento } from '../../services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-inscripciones',
  standalone: true,
  providers: [DataService],
  imports: [FormsModule, CommonModule, HttpClientModule, RouterModule],
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.css'
})
export class InscripcionesComponent implements OnInit {
  inscripciones: any[] = [];
  usuarios: any[] = [];
  eventos: any[] = [];
  inscripcion = { usuario_id: '', evento_id: '' };

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerInscripciones();
    this.obtenerUsuarios();
    this.obtenerEventos();
  }

  obtenerInscripciones(): void {
    this.dataService.getInscripciones().subscribe((data) => {
      this.inscripciones = data;
    });
  }

  obtenerUsuarios(): void {
    this.dataService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  obtenerEventos(): void {
    this.dataService.getEventos().subscribe((data) => {
      this.eventos = data;
    });
  }

  inscribirUsuario(): void {
    this.dataService.inscribirUsuario(this.inscripcion).subscribe(() => {
      this.obtenerInscripciones(); // Actualizar lista
      alert('Inscripción realizada con éxito');
    });
  }
}
