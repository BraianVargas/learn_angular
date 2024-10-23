import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    // Recupera el token de localStorage
    const token = localStorage.getItem('token');

    // Llama al servicio pasando el token
    if (token) {
      this.mainService.index(token).subscribe(
        data => {
          console.log('[DEBUG] Datos recibidos:', data);
        },
        error => {
          console.error('[DEBUG] Error al obtener datos:', error);
        }
      );
    } else {
      console.error('No se encontró token. Debes iniciar sesión.');
    }
  }
}
