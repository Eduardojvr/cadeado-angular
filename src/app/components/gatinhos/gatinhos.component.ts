import { SessionStorageService } from './../../services/session-storage.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gatinhos',
  templateUrl: './gatinhos.component.html',
  styleUrls: ['./gatinhos.component.scss']
})
export class GatinhosComponent {
  constructor(private session : SessionStorageService , private router: Router) { }

  reiniciar() {
    this.session.clear();
    this.router.navigate(['/']);
  }
}
