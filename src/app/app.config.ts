import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),  // Agrega provideHttpClient aquí
    HttpClientModule,     // Añade HttpClientModule a los providers
    provideClientHydration(withEventReplay())
  ]
};