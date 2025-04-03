import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-espacios',
  standalone: true,
  providers: [DataService],
  imports: [FormsModule, CommonModule, HttpClientModule, RouterModule],
  templateUrl: './detalle-espacios.component.html',
  styleUrl: './detalle-espacios.component.css'
})
export class DetalleEspaciosComponent implements OnInit {
  espacios: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.obtenerEspacios();
  }

  obtenerEspacios() {
    this.dataService.obtenerEspacios().subscribe(data => {
      this.espacios = data;
    });
  }

  editarEspacio(espacio: any) {
    const nuevoNombre = prompt('Nuevo nombre:', espacio.nombre);
    if (nuevoNombre) {
      espacio.nombre = nuevoNombre;
      this.dataService.editarEspacio(espacio.id, espacio).subscribe(() => {
        alert('Espacio actualizado');
        this.obtenerEspacios();
      });
    }
  }

  eliminarEspacio(id: number) {
    if (confirm('¿Seguro que deseas eliminar este espacio?')) {
      this.dataService.eliminarEspacio(id).subscribe(() => {
        alert('Espacio eliminado');
        this.obtenerEspacios();
      });
    }
  }

  volver() {
    this.router.navigate(['/espacios']);
  }

}
