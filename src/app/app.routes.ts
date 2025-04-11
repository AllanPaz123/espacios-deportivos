import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { DetalleInscripcionComponent } from './components/detalle-inscripcion/detalle-inscripcion.component';
import { DetalleReservasComponent } from './components/detalle-reservas/detalle-reservas.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { EspaciosComponent } from './components/espacios/espacios.component';       
import { DetalleEspaciosComponent } from './components/detalle-espacios/detalle-espacios.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';
import { EventosinscComponent } from './components/eventosinsc/eventosinsc.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige a login al inicio
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // Protegido por AuthGuard

    // Rutas protegidas para usuarios autenticados
    { path: 'eventos', component: EventosComponent, canActivate: [AuthGuard] },
    { path: 'eventosinsc', component: EventosinscComponent, canActivate: [AuthGuard] },
    { path: 'inscripciones', component: InscripcionesComponent, canActivate: [AuthGuard] },
    { path: 'detalle-inscripcion', component: DetalleInscripcionComponent, canActivate: [AuthGuard] },
    { path: 'reservas', component: ReservasComponent, canActivate: [AuthGuard] },
    { path: 'detalle-reservas', component: DetalleReservasComponent, canActivate: [AuthGuard] },
    { path: 'espacios', component: EspaciosComponent, canActivate: [AuthGuard] },
    { path: 'detalle-espacios', component: DetalleEspaciosComponent, canActivate: [AuthGuard] },
];




/*
import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { InscripcionesComponent } from './components/inscripciones/inscripciones.component';
import { DetalleInscripcionComponent } from './components/detalle-inscripcion/detalle-inscripcion.component';
import { DetalleReservasComponent } from './components/detalle-reservas/detalle-reservas.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { EspaciosComponent } from './components/espacios/espacios.component';       
import { DetalleEspaciosComponent } from './components/detalle-espacios/detalle-espacios.component';

import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'eventos', component: EventosComponent },
    { path: 'inscripciones', component: InscripcionesComponent, },
    { path: 'detalle-inscripcion', component: DetalleInscripcionComponent },
    { path: 'reservas', component: ReservasComponent },
    { path: 'detalle-reservas', component: DetalleReservasComponent },
    { path: 'espacios', component: EspaciosComponent },
    { path: 'detalle-espacios', component: DetalleEspaciosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    
];
*/