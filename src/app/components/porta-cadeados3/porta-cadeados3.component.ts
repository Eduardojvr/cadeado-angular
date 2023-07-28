import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-porta-cadeados3',
  templateUrl: './porta-cadeados3.component.html',
  styleUrls: ['./porta-cadeados3.component.scss']
})
export class PortaCadeados3Component {
  cadeadoPequenoUm = false;
  senha = '';
  senhaVisor = '';
  senhaCorreta = '28091998';

  constructor(private router: Router) { }


  adicionaNumero(numero: number) {
    if (this.senha.length < 8) {
      this.senha += numero;
      this.senhaVisor += '*';
    }

    if (this.senha.length == 8) {
      if (this.senha == this.senhaCorreta) {
        this.cadeadoPequenoUm = true;
        alert('Senha Correta. Porta aberta!');
        setTimeout(() => {
          let resp = confirm("Clique em ok para continuar!");
          if (resp) {
            this.router.navigate(['/gatos']);
          }
        }, 3000);


      } else {
        this.senha = '';
        this.senhaVisor = '';
        alert('Senha incorreta!');
      }
    }


  }

}
