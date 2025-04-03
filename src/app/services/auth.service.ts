import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://192.168.0.108:5000/auth'; // Endpoint del backend
  private authState = new BehaviorSubject<boolean>(this.isAuthenticated());

  http = inject(HttpClient);
  router = inject(Router);

  login(credentials: { correo: string, contrasena: string }): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        localStorage.setItem('token', response.token); // Guardar token en localStorage
        this.authState.next(true);
        this.router.navigate(['/home']); // Redirigir al usuario
      })
    );
  }

  register(user: { nombre: string, correo: string, telefono?: string, contrasena: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.authState.next(false);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    //return !!localStorage.getItem('token');
    return !!window?.localStorage?.getItem('token'); // Usa window?.localStorage
  }

  getAuthState(): Observable<boolean> {
    return this.authState.asObservable();
  }

}
