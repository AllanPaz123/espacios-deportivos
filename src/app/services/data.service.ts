import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Evento {
  nombre: string;
  descripcion: string;
  fecha_inicio: string;
  fecha_fin: string;
  ubicacion: string;
  capacidad: number;
  imagen: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://192.168.107.24:5000';

  constructor(private http: HttpClient) {}

   // Método para obtener los eventos
   getEventos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/eventos`);
  }

  getInscripciones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/inscripciones`);
  }

  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/usuarios`);
  }
//inscripciones:
  inscribirUsuario(inscripcion: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/inscripciones`, inscripcion);
  }
  updateInscripcion(id: number, inscripcion: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/inscripciones/${id}`, inscripcion);
  }

  deleteInscripcion(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/inscripciones/${id}`);
  }
  //reservas:
  getReservas() {
    return this.http.get<any[]>(`${this.apiUrl}/reservas`);
  }

  addReserva(reserva: any) {
    return this.http.post(`${this.apiUrl}/reservas`, reserva);
  }
  
  updateReserva(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/reservas/${id}`, data);
  }
  
  deleteReserva(id: number) {
    return this.http.delete(`${this.apiUrl}/reservas/${id}`);
  }
//espacios:

obtenerEspacios(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/espacios`);
}
/*
obtenerEspacios(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}
*/
agregarEspacio(espacio: any): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/espacios`, espacio);
}

editarEspacio(id: number, espacio: any): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/espacios/${id}`, espacio);
}

eliminarEspacio(id: number): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/espacios/${id}`);
}

/*
   //aqui habia que usar: http://192.168.0.102:5000/eventos
   getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.apiUrl);
  }
*/ 

}
