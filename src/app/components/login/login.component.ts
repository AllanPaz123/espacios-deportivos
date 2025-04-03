import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [AuthService],
  imports: [FormsModule, CommonModule, HttpClientModule, RouterModule,  ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 // constructor(private authService: AuthService, private router: Router) {}
 form: FormGroup;
 authService = inject(AuthService);
 router = inject(Router);

 constructor(private fb: FormBuilder) {
   this.form = this.fb.group({
     correo: ['', [Validators.required, Validators.email]],
     contrasena: ['', Validators.required]
   });
 }

 login() {
  if (this.form.valid) {
    this.authService.login(this.form.value).subscribe({
      next: () => this.router.navigate(['/home']),
      error: (err) => alert('Error en credenciales')
    });
  }
}

 goToRegister() {
   this.router.navigate(['/registro']);
 }
}
