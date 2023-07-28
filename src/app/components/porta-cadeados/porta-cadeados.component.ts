import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MinhaGuardaDeRota } from 'src/app/guardiao';
import { SessionStorageService, StorageChange, StorageGetItem } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-porta-cadeados',
  templateUrl: './porta-cadeados.component.html',
  styleUrls: ['./porta-cadeados.component.scss']
})
export class PortaCadeadosComponent implements OnInit {
  cadeadoPequenoUm : any ;
  cadeadoPequenoDois: any  ;
  cadeadoPequenoTres: any  ;
  cadeadoGrandeAberto : any ;
  totalCadeadoPequenoAberto = 0;
  habilitarComponente: any  ;
  @Output() abrirProximaPagina = new EventEmitter<boolean>();

  constructor(private sessionStorageService: SessionStorageService, private router: Router, private minhaGuardaDeRota: MinhaGuardaDeRota) { }
  abrirCadeadoPequenoUm() {
    if (!this.cadeadoPequenoUm) {
      this.totalCadeadoPequenoAberto += 1;
    }
    this.cadeadoPequenoUm = true;
    this.setStorage('cadeadoPequenoUm', this.cadeadoPequenoUm, 'sessionStorage');
  }

  fecharCadeadoPequenoUm() {
    if (!this.cadeadoPequenoUm) {
      this.totalCadeadoPequenoAberto -= 1;
    }
    this.cadeadoPequenoUm = false;
    this.setStorage('cadeadoPequenoUm', this.cadeadoPequenoUm, 'sessionStorage');
  }

  ngOnInit(): void {
    this.recuperaSessao();

  }

  abrirCadeadoPequenoDois() {
    if (!this.cadeadoPequenoDois) {
      this.totalCadeadoPequenoAberto += 1;
    }
    this.cadeadoPequenoDois = true;
    this.setStorage('cadeadoPequenoDois', this.cadeadoPequenoDois, 'sessionStorage');


  }

  fecharCadeadoPequenoDois() {
    if (!this.cadeadoPequenoDois) {
      this.totalCadeadoPequenoAberto -= 1;
    }
    this.cadeadoPequenoDois = false;
    this.setStorage('cadeadoPequenoDois', this.cadeadoPequenoDois, 'sessionStorage');


  }

  abrirCadeadoPequenoTres() {
    if (!this.cadeadoPequenoTres) {
      this.totalCadeadoPequenoAberto += 1;
    }
    this.cadeadoPequenoTres = true;

    this.setStorage('cadeadoPequenoTres', this.cadeadoPequenoTres, 'sessionStorage');


  }
  fecharCadeadoPequenoTres() {
    if (!this.cadeadoPequenoTres) {
      this.totalCadeadoPequenoAberto -= 1;
    }

    this.cadeadoPequenoTres = false;


    this.setStorage('cadeadoPequenoTres', this.cadeadoPequenoTres, 'sessionStorage');


  }


  navegarPorta2() {
    this.minhaGuardaDeRota.concluirTarefa();
    this.router.navigate(['/porta2']);
  }

  abrirCadeadoGrande() {
    if (this.cadeadoPequenoUm && this.cadeadoPequenoDois && this.cadeadoPequenoTres) {
      let resposta = confirm("Cadeado grande aberto! Ir para porta 2?")
      if (resposta) {
        this.cadeadoGrandeAberto = true;
        this.setStorage('cadeadoGrandeAberto', this.cadeadoGrandeAberto, 'sessionStorage');
        this.navegarPorta2();
      }
    } else {
      alert("Você ainda precisa abrir os cadeados pequenos!")
    }
  }


  recuperaSessao() {

    let cadeadoPequenoUm: StorageGetItem = {
      name: 'cadeadoPequenoUm',
      storageArea: 'sessionStorage'
    }
    let cadeadoPequenoDois: StorageGetItem = {
      name: 'cadeadoPequenoDois',
      storageArea: 'sessionStorage'
    }
    let cadeadoPequenoTres: StorageGetItem = {
      name: 'cadeadoPequenoTres',
      storageArea: 'sessionStorage'
    }
    let cadeadoGrandeAberto: StorageGetItem = {
      name: 'cadeadoGrandeAberto',
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
    // this.cadeadoGrandeAberto = this.sessionStorageService.get(cadeadoGrandeAberto);
    this.totalCadeadoPequenoAberto = this.sessionStorageService.get(totalCadeadoPequenoAberto);
    this.habilitarComponente = this.sessionStorageService.get(habilitarComponente);

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
