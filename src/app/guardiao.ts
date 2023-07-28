import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MinhaGuardaDeRota implements CanActivate {
  private tarefaConcluida: boolean = false;

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.tarefaConcluida) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

  concluirTarefa() {
    this.tarefaConcluida = true;
  }
}
