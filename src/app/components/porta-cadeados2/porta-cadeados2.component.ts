import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MinhaGuardaDeRota } from 'src/app/guardiao';
import { SessionStorageService, StorageChange, StorageGetItem } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-porta-cadeados2',
  templateUrl: './porta-cadeados2.component.html',
  styleUrls: ['./porta-cadeados2.component.scss']
})
export class PortaCadeados2Component implements OnInit {
  cadeadoPequenoUm = false;
  cadeadoPequenoDois = false;
  cadeadoPequenoTres = false;
  cadeadoPequenoQuatro = false;
  cadeadoGrandePrincipal = false;
  totalCadeadoPequenoAberto = 0;

  constructor(private sessionStorageService: SessionStorageService,private router: Router, private minhaGuardaDeRota: MinhaGuardaDeRota) { }
  ngOnInit(): void {
    this.recuperaSessao();

  }

  abrirCadeadoPequenoUm() {
    if (!this.cadeadoPequenoUm) {
      this.totalCadeadoPequenoAberto += 1;
    }
    this.cadeadoPequenoUm = !this.cadeadoPequenoUm;
    this.verificaCadeados();
    this.setStorage('cadeadoPequenoUmTela2', this.cadeadoPequenoUm, 'sessionStorage');

  }

  abrirCadeadoPequenoDois() {
    if (!this.cadeadoPequenoDois) {
      this.totalCadeadoPequenoAberto += 1;
    }
    this.cadeadoPequenoDois = !this.cadeadoPequenoDois;
    this.verificaCadeados();
    this.setStorage('cadeadoPequenoDoisTela2', this.cadeadoPequenoDois, 'sessionStorage');

  }

  abrirCadeadoPequenoTres() {
    if (!this.cadeadoPequenoTres) {
      this.totalCadeadoPequenoAberto += 1;
    }
    this.cadeadoPequenoTres = !this.cadeadoPequenoTres;
    this.verificaCadeados();
    this.setStorage('cadeadoPequenoTresTela2', this.cadeadoPequenoTres, 'sessionStorage');

  }

  abrirCadeadoPequenoQuatro() {
    if (!this.cadeadoPequenoQuatro) {
      this.totalCadeadoPequenoAberto += 1;
    }
    this.cadeadoPequenoQuatro = !this.cadeadoPequenoQuatro;
    this.verificaCadeados();
    this.setStorage('cadeadoPequenoQuatroTela2', this.cadeadoPequenoQuatro, 'sessionStorage');

  }


  navegarPorta3() {
    this.minhaGuardaDeRota.concluirTarefa();
    this.router.navigate(['/porta3']);
  }

  verificaCadeados() {
    if ((this.cadeadoPequenoUm && this.cadeadoPequenoDois && this.cadeadoPequenoTres && this.cadeadoPequenoTres) && !this.cadeadoGrandePrincipal) {

      this.navegarPorta3();

    }
  }

  abrirCadeadoPrincipal() {
    if (!this.cadeadoGrandePrincipal) {
      this.totalCadeadoPequenoAberto += 1;
    }
    this.cadeadoGrandePrincipal = !this.cadeadoGrandePrincipal;
    this.verificaCadeados();
  }


  recuperaSessao() {

    let cadeadoPequenoUm: StorageGetItem = {
      name: 'cadeadoPequenoUmTela2',
      storageArea: 'sessionStorage'
    }
    let cadeadoPequenoDois: StorageGetItem = {
      name: 'cadeadoPequenoDoisTela2',
      storageArea: 'sessionStorage'
    }
    let cadeadoPequenoTres: StorageGetItem = {
      name: 'cadeadoPequenoTresTela2',
      storageArea: 'sessionStorage'
    }
    let cadeadoPequenoQuatro: StorageGetItem = {
      name: 'cadeadoPequenoQuatroTela2',
      storageArea: 'sessionStorage'
    }
    let cadeadoGrandePrincipal: StorageGetItem = {
      name: 'cadeadoGrandePrincipal',
      storageArea: 'sessionStorage'
    }
    let totalCadeadoPequenoAberto: StorageGetItem = {
      name: 'totalCadeadoPequenoAberto',
      storageArea: 'sessionStorage'
    }
    let habilitarComponente: StorageGetItem = {
      name: 'habilitarComponente',
      storageArea: 'sessionStorage'
    }


    this.cadeadoPequenoUm = this.sessionStorageService.get(cadeadoPequenoUm);
    this.cadeadoPequenoDois = this.sessionStorageService.get(cadeadoPequenoDois);
    this.cadeadoPequenoTres = this.sessionStorageService.get(cadeadoPequenoTres);
    this.cadeadoPequenoQuatro = this.sessionStorageService.get(cadeadoPequenoQuatro);
    this.totalCadeadoPequenoAberto = this.sessionStorageService.get(totalCadeadoPequenoAberto);
    this.cadeadoGrandePrincipal = this.sessionStorageService.get(cadeadoGrandePrincipal);

  }

  setStorage(key: any, value: any, area: any) {
    let obj: StorageChange = {
      name: key,
      value: value,
      storageArea: area
    }
    this.sessionStorageService.set(obj);
  }
}
