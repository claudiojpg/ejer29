import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../authservice.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service.service';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
@Injectable({
  providedIn: 'root'
})
export class LoginPage implements OnInit {
  inicioSesionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    public authService: AuthService,
    private router: Router, 
    private userService: UserService
    ) {
    this.inicioSesionForm = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required]
    });
  }

  ngOnInit() {}

  iniciarSesion() {
    if (this.inicioSesionForm?.valid) {
      const correo = this.inicioSesionForm.get('correo')?.value;
      const contraseña = this.inicioSesionForm.get('contraseña')?.value;
  
      if (this.authService.verificarCredenciales(correo, contraseña)) {
        
        this.userService.setEmail(correo);
        this.router.navigate(['/welcome']);
      } else {
        console.log('Credenciales inválidas. Inténtalo de nuevo.');
      }
    }
  }
}