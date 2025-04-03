import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registro',
  standalone: true,
  providers: [AuthService],
  imports: [FormsModule, CommonModule, HttpClientModule, RouterModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
//constructor(private authService: AuthService, private router: Router) {}
export class RegistroComponent {
  form: FormGroup;
  authService = inject(AuthService);
  router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: [''],
      contrasena: ['', Validators.required]
    });
  }

  register() {
    if (this.form.valid) {
      this.authService.register(this.form.value).subscribe({
        next: () => {
          alert('Registro exitoso');
          this.router.navigate(['/login']);
        },
        error: () => alert('Error en el registro')
      });
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
